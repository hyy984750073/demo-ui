/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const hoverRouter = {
  path: '/hover',
  component: Layout,
  redirect: '/dashboard',
  name: 'Hover',
  meta: {
    title: '悬停效果',
    icon: 'list'
  },
  children: [
    {
      path: 'button',
      component: () => import('@/views/hover/Button'),
      name: 'HoverBotton',
      meta: { title: '按钮悬停效果1', affix: true }
    },
    {
      path: 'button2',
      component: () => import('@/views/hover/Button2'),
      name: 'HoverBotton2',
      meta: { title: '按钮悬停效果2', affix: true }
    },
    {
      path: 'direction-awate',
      component: () => import('@/views/hover/DirectionAwate'),
      name: 'DirectionAwate',
      meta: { title: 'Direction-awate 3D 悬停效果（概念）', affix: true }
    },
    {
      path: 'image',
      component: () => import('@/views/hover/Image'),
      name: 'Image',
      meta: { title: '图像悬停效果', affix: true }
    },
    {
      path: 'world-places',
      component: () => import('@/views/hover/WorldPlaces'),
      name: 'WorldPlaces',
      meta: { title: 'CSS 3d 悬停', affix: true }
    },
    {
      path: 'simple-tile',
      component: () => import('@/views/hover/SimpleTile'),
      name: 'SimpleTile',
      meta: { title: 'Simple Tile 悬停效果', affix: true }
    },
    {
      path: 'creative-menu',
      component: () => import('@/views/hover/CreativeMenu'),
      name: 'CreativeMenu',
      meta: { title: 'Creative Menu 悬停效果', affix: true }
    },
    {
      path: 'attract',
      component: () => import('@/views/hover/Attract'),
      name: 'Attract',
      meta: { title: 'Attract 悬停效果', affix: true }
    },
    {
      path: 'animation',
      component: () => import('@/views/hover/Animation'),
      name: 'Animation',
      meta: { title: 'Animation 悬停效果', affix: true }
    },
    {
      path: 'glowing-icon',
      component: () => import('@/views/hover/GlowingIcon'),
      name: 'GlowingIcon',
      meta: { title: 'Glowing Icon 悬停效果', affix: true }
    },
    {
      path: 'social-meida-icons',
      component: () => import('@/views/hover/SocialMeidaIcons'),
      name: 'SocialMeidaIcons',
      meta: { title: 'Social Meida Icons 悬停效果', affix: true }
    },
    {
      path: 'after-psuedo',
      component: () => import('@/views/hover/AfterPsuedo'),
      name: 'AfterPsuedo',
      meta: { title: '失败 使用:afterPsuedo 元素的 CSS3 悬停效果', affix: true }
    },
    {
      path: 'twisty-thing',
      component: () => import('@/views/hover/TwistyThing'),
      name: 'TwistyThing',
      meta: { title: 'Twisty Thing：拖动指针扭曲立方体', affix: true }
    },
    {
      path: 'thumb',
      component: () => import('@/views/hover/Thumb'),
      name: 'Thumb',
      meta: { title: '3D Thumb 图像悬停效果', affix: true }
    },
    {
      path: 'photo-modal',
      component: () => import('@/views/hover/PhotoModal'),
      name: 'PhotoModal',
      meta: { title: 'Uncomfortable: Photo Modal（仅 CSS）', affix: true }
    },
    {
      path: 'kitties',
      component: () => import('@/views/hover/Kitties'),
      name: 'Kitties',
      meta: { title: '失败 Kitties!（悬停图像）', affix: true }
    },
    {
      path: 'portrait-image',
      component: () => import('@/views/hover/PortraitImage'),
      name: 'PortraitImage',
      meta: { title: 'Inspirational hover in portrait image', affix: true }
    },
    {
      path: 'perspective-tilty-images',
      component: () => import('@/views/hover/PerspectiveTiltyImages'),
      name: 'PerspectiveTiltyImages',
      meta: { title: 'Perspective Tilty Images', affix: true }
    },
    {
      path: 'venetian-blinds',
      component: () => import('@/views/hover/VenetianBlinds'),
      name: 'VenetianBlinds',
      meta: { title: '失败 Venetian Blinds 百叶窗', affix: true }
    },
    {
      path: 'image2',
      component: () => import('@/views/hover/Image2'),
      name: 'Image2',
      meta: { title: '失败 Image Hover Effect', affix: true }
    },
    {
      path: 'gradual',
      component: () => import('@/views/hover/Gradual'),
      name: 'Gradual',
      meta: { title: '失败 CSS 渐变悬停效果', affix: true }
    }
  ]
}

export default hoverRouter
