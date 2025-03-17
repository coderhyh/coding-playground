import type { DefaultTheme } from 'vitepress'

export default <DefaultTheme.Sidebar>[
  {
    text: '指引',
    items: [{ text: '入手指南', link: '/' }],
  },
  {
    text: '性能优化',
    items: [{ text: 'useDefer', link: '/packages/performance/useDefer' }],
  },
  {
    text: 'hooks',
    items: [{ text: 'useSum', link: '/packages/hooks/useSum' }],
  },
]
