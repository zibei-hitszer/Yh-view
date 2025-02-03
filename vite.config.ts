import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
// import { injectStyle } from './script/plugin';

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
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'YHUI',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `yh-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      input: {
        index: resolve(__dirname, 'packages/index.ts')
      },
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'theme/yh-ui.css';
          return 'assets/[name]-[hash][extname]';
        },
        exports: 'named'
      }
    }
  }
});
