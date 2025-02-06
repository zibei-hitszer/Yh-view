// 导入必要的模块
import path from 'path';
import fs from 'fs';
import fsExtra from 'fs-extra';
import { defineConfig, build } from 'vite';
import vue from '@vitejs/plugin-vue';
// 读取 package.json 文件获取版本号
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts';

const __filename = fileURLToPath(import.meta.url);
// 获取当前文件所在的目录路径
const __dirname = path.dirname(__filename);

const packageJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8')
);

const version = packageJson.version;

// 基础配置
const baseConfig = defineConfig({
  publicDir: false,
  plugins: [vue()]
});

const rollupOptions = defineConfig({
  // 不应该被打包的外部依赖
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue'
    },
    exports: 'named'
  }
});

// 组件库全局入口
const compontsDir = path.resolve(__dirname, '../packages/components');
// 样式目录
// const styleDir = path.resolve(__dirname, '../packages/theme-chalk');
// 输出目录
const outputDir = path.resolve(__dirname, '../build');

// 生成 package.json
const createPackageJson = (name) => {
  const fileStr = `{
    "name": "${name ? name : 'yh-ui'}",
    "version": "${version}",
    "description": "Your Vue3 component library",
    "main": "${name ? 'index.umd.js' : 'yh-ui.umd.js'}",
    "module": "${name ? 'index.mjs' : 'yh-ui.mjs'}",
    "repository": {
      "type": "git",
      "url": "your-git-repo-url"
    },
    "keywords": ["vue3", "component library", "UI"],
    "author": "your-name",
    "license": "ISC"
  }
  `;
  // 单个组件 or 全量
  const filePath = path.resolve(outputDir, name ? `${name}/package.json` : `package.json`);

  fsExtra.outputFile(filePath, fileStr, 'utf-8');
};

/** 单组件按需构建 */
const buildSingle = async (name) => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        lib: {
          entry: path.resolve(compontsDir, name, 'index.ts'),
          name: name,
          fileName: 'index',
          formats: ['es', 'umd']
        },
        rollupOptions,
        outDir: path.resolve(outputDir, name)
      }
    })
  );
  const dir = path.join(outputDir, name);

  styleInject(dir, 'index');

  createPackageJson(name);
};

/** 全量构建 */
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        lib: {
          entry: path.resolve(compontsDir, 'index.ts'),
          name: 'yh-ui',
          fileName: 'yh-ui',
          formats: ['umd']
        },
        rollupOptions,
        outDir: outputDir
      },
      plugins: [
        ...baseConfig.plugins,
        dts({
          outDir: path.resolve(__dirname, '../build/types'),
          entryRoot: path.resolve(__dirname, '../packages'),
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json')
        })
      ]
    })
  );

  createPackageJson();
};

const styleInject = (dir, name) => {
  const esModuleFilePath = path.join(dir, `${name}.js`);
  const cssFileName = `${name}.css`;
  const importStatement = `import './${cssFileName}';\n`;

  try {
    // 读取 ES 模块文件内容
    let fileContent = fs.readFileSync(esModuleFilePath, 'utf8');
    // 在文件开头添加导入语句
    fileContent = importStatement + fileContent;
    // 将修改后的内容写回文件
    fs.writeFileSync(esModuleFilePath, fileContent, 'utf8');
  } catch (error) {
    console.log(error);
  }
};

// 入口文件构建
const buildIndex = async () => {
  let componentNames = fsExtra.readdirSync(outputDir).filter((name) => {
    if (name === 'types' || name === 'resolver') return null;
    const componentDir = path.resolve(outputDir, name);
    const isDir = fsExtra.lstatSync(componentDir).isDirectory();
    return isDir;
  });

  // 生成导出组件的代码
  const importComponentsCode = componentNames
    .map((name) => {
      if (name === 'collapse') {
        return `import { Collapse, CollapseItem } from './collapse/index.js';`;
      } else {
        return `import ${name.charAt(0).toUpperCase() + name.slice(1)} from './${name}/index.js';`;
      }
    })
    .join('\n');

  // 特别处理的导出
  const specialImportsCode = `\nimport { createMessage, closeAll } from './message/index.js';
import './yh-ui.css';`;

  // 生成组件数组代码
  const componentArrayCode = `const components = [${componentNames
    .map((name) => {
      return name.charAt(0).toUpperCase() + name.slice(1);
    })
    .join(', ')}];`;

  // 生成 install 函数代码
  const installFunctionCode = `
const install = (app) => {
  components.forEach((component) => component.install(app));
};
export default { install };
`;

  const exportsAllCode = `export {
  install,
  ${componentNames
    .map((name) => {
      if (name === 'collapse') {
        return `Collapse,\n  CollapseItem`;
      } else {
        return name.charAt(0).toUpperCase() + name.slice(1);
      }
    })
    .join(',\n  ')},
  createMessage,
  closeAll
};
`;

  // 组合所有代码
  const indexCode = `${importComponentsCode}${specialImportsCode}\n${componentArrayCode}\n${installFunctionCode}\n${exportsAllCode}`;

  // 写入 index.js 文件
  const indexFilePath = path.resolve(outputDir, 'index.js');
  fsExtra.outputFile(indexFilePath, indexCode, 'utf-8');
};

const buildResolver = async () => {
  await build(
    defineConfig({
      build: {
        lib: {
          entry: path.resolve(__dirname, '../plugins/YHViewResolver.ts'), // TS库入口文件
          name: 'resolver', // 挂载到全局的变量名，CDN导入的时候可以直接使用Counter变量
          formats: ['es', 'umd'],
          fileName: 'YHViewResolver'
        },
        rollupOptions: {
          input: path.resolve(__dirname, '../plugins/YHViewResolver.ts'),
          output: {
            dir: path.resolve(outputDir, 'resolver') // 输出目录
          }
        }
      }
    })
  );
};

// 构建入口
const buildLib = async () => {
  fsExtra.emptyDirSync(outputDir);
  await buildAll();

  // 按需打包
  const componentNames = fsExtra.readdirSync(compontsDir).filter((name) => {
    // 获取组件的目录
    const componentDir = path.resolve(compontsDir, name);
    const isDir = fsExtra.lstatSync(componentDir).isDirectory();
    return isDir && fsExtra.readdirSync(componentDir).includes('index.ts');
  });

  for (const name of componentNames) {
    await buildSingle(name);
  }
  await buildIndex();
  await buildResolver();
};

buildLib();
