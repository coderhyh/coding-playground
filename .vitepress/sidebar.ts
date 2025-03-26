import type { DefaultTheme } from 'vitepress'

export default <DefaultTheme.Sidebar>[
  {
    text: '开始',
    items: [{ text: '指引', link: '/' }],
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
    text: 'CSS',
    items: [
      { text: '使元素保持宽高比', link: '/packages/css/aspect-ratio' },
      { text: '聚焦input父元素改变背景颜色', link: '/packages/css/focus-within' },
    ],
  },
  {
    text: 'GIS',
    items: [
      { text: 'Mapbox入门', link: '/packages/gis/mapbox/getting-started' },
      { text: '点击飞行效果', link: '/packages/gis/mapbox/fly-to' },
      { text: '地球自转效果', link: '/packages/gis/mapbox/rotation' },
      { text: '添加图片', link: '/packages/gis/mapbox/add-img' },
      { text: '添加图层', link: '/packages/gis/mapbox/add-layer' },
      { text: '添加标记以及弹窗', link: '/packages/gis/mapbox/add-marker-popup' },
    ],
  },
]
