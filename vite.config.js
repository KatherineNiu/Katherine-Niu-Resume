import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'


// https://vitejs.dev/config/
export default defineConfig({
  //设置项目根目录
  base: './',
  server: {
    port: 5001
  },
  plugins: [
      vue(
      {
        //开启响应式语法糖
        reactivityTransform: true
        }
      ),
      AutoImport({
          imports: ['vue'],
          resolvers: [
              ElementPlusResolver(),
              IconsResolver({
                  prefix: 'Icon',
              })
          ],
      }),
      Components({
          resolvers: [
              ElementPlusResolver(),
              IconsResolver({
                  enabledCollections: ['ep'],
              })
          ],
      }),
      Icons({
          autoInstall: true,
      }),
  ],
})
