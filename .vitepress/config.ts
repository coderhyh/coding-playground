import { resolve } from 'node:path'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'

import nav from './nav'
import sidebar from './sidebar'

export default defineConfig({
  title: ' ',
  description: 'coding-playground是一个vitepress的起始模板',
  base: '/coding-playground',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: './vue-icon.svg',
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
    logo: '/logo.svg',
    nav,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/coderhyh/coding-playground' }],
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
    resolve: { alias: { 'coding-playground': resolve(__dirname, '../packages') } },
    plugins: [
      // @ts-expect-error unocss返回类型错误
      Unocss(),
    ],
  },
})
