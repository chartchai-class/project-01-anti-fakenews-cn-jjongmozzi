import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'
import { useNewsStore } from '@/stores/newsStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      props: (route) => ({
        page: parseInt(route.query.page?.toString() || '1'),
        limit: parseInt(route.query.limit?.toString() || '10'),
        filter: route.query.filter?.toString() || 'all'
      })
    },
    {
      path: '/news/:id',
      name: 'news-layout',
      component: () => import('@/views/news/NewsLayout.vue'),
      props: true,
      beforeEnter: async (to) => {
        const id = parseInt(to.params.id as string)
        const newsStore = useNewsStore()
        try {
          await newsStore.fetchNewsById(id)
        } catch (error) {
          if ((error as any).response?.status === 404) {
            return { name: 'not-found', params: { resource: 'news' } }
          } else {
            return { name: 'network-error' }
          }
        }
      },
      children: [
        {
          path: '',
          name: 'news-detail',
          component: () => import('@/views/news/NewsDetailView.vue'),
          props: true
        },
        {
          path: 'comments',
          name: 'news-comments',
          component: () => import('@/views/news/NewsCommentsView.vue'),
          props: true
        },
        {
          path: 'vote',
          name: 'news-vote',
          component: () => import('@/views/news/NewsVoteView.vue'),
          props: true
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      props: (route) => ({
        resource: route.params.resource || 'page'
      })
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: () => import('@/views/NetworkErrorView.vue')
    }
  ],
  // 修复：用 _ 前缀标记未使用的 to/from，消除 TS6133 错误
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

export default router