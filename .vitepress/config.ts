import { resolve } from 'node:path'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitepress'

import nav from './nav'
import sidebar from './sidebar'

export default defineConfig({
  title: 'Coding Playground',
  description: 'Coding Playground 是一个代码案例集合库，用于存放各种实用的代码示例和最佳实践。',
  base: '/coding-playground',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://cn.vuejs.org/logo.svg',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,height=device-height, maximum-scale=1.0,minimum-scale=1.0',
      },
    ],
  ],
  themeConfig: {
    logo: 'https://blog.coderhyh.cn/logo.png',
    nav,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/coderhyh/coding-playground' }],
    editLink: {
      pattern: 'https://github.com/coderhyh/coding-playground/blob/main/:path',
      text: '查看源码',
    },
    search: {
      provider: 'local',
    },
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
  vite: {
    resolve: { alias: { '~': resolve(__dirname, '../packages') } },
    plugins: [
      AutoImport({
        imports: ['vue'],
        dts: true,
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        dts: true,
        resolvers: [ElementPlusResolver()],
      }),
      Unocss(),
    ],
    ssr: {
      noExternal: [/element-plus/],
    },
  },
})
