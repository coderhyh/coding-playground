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
    text: 'HOOKS',
    items: [{ text: 'useSum', link: '/packages/hooks/useSum' }],
  },
  {
    text: 'GIS',
    items: [
      { text: 'Mapbox入门', link: '/packages/gis/mapbox/getting-started' },
      { text: '点击飞行效果', link: '/packages/gis/mapbox/fly-to' },
      { text: '地球自转效果', link: '/packages/gis/mapbox/rotation' },
    ],
  },
]
