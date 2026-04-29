import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Publish from '../views/Publish.vue'
import Blog from '../views/Blog.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'LINKUN | Intelligent Software Company' },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { title: 'Projects | LINKUN' },
  },
  {
    path: '/publish',
    name: 'Publish',
    component: Publish,
    meta: { title: 'Product Releases | LINKUN' },
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: { title: 'Blog | LINKUN' },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'About | LINKUN' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'LINKUN'
})

export default router
