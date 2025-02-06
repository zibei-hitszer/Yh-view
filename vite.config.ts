import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
// 获取当前文件所在的目录路径
const __dirname = path.dirname(__filename);
export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: 'dist/types',
      entryRoot: './packages',
      tsconfigPath: './tsconfig.json'
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/components/index.ts'),
      name: 'YHUI',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `yh-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      input: {
        index: resolve(__dirname, 'packages/components/index.ts')
      },
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: 'theme-chalk/[name].css',
        exports: 'named'
      }
    }
  }
});
