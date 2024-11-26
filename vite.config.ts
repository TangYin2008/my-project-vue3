/* eslint-disable @typescript-eslint/no-unused-vars */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import vueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    server: {
      proxy: {
        '/web-services': {
          target: 'http://localhost:3000', // 目标服务器的地址
          changeOrigin: true, // 是否改变源地址
          rewrite: (path) => path.replace(/^\/web-services/, ''), // 重写路径
        },
      },
    },
    define: {
      'process.env': {
        VITE_APP_BASE_URL: env.VITE_API_BASE_URL,
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      // vueDevTools(),
      UnoCSS(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],

        // global imports to register
        imports: [
          // presets
          'vue',
          'vue-router',
          '@vueuse/core',
        ],
      }),
      Components({
        dirs: ['src/views', 'src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
        resolvers: [ElementPlusResolver(), IconsResolver({ prefix: 'i' })],
      }),
      Icons({ autoInstall: true }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
