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
      meta: { title: '3D 悬停效果（概念）', affix: true }
    },
    {
      path: 'image',
      component: () => import('@/views/hover/Image'),
      name: 'Image',
      meta: { title: '图像悬停效果', affix: true }
    }
  ]
}

export default hoverRouter
