import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import Examples from '@/views/Examples.vue'
import Help from '@/views/Help.vue'
import Documentation from '@/views/Documentation.vue'
import i18n from '@/translations'

Vue.use(VueRouter)

const getMeta = (route : string) => ({
  title: i18n.t(`navbar.${route}`) + ' | ' + i18n.t('app.title')
})

export const routesPath = [
  {id: 'home', component: Home},
  {id: 'examples', component: Examples},
  {id: 'documentation', component: Documentation},
  {id: 'help', component: Help},
]

export const routes : Array<RouteConfig> = routesPath.map(r => ({
    path: '/' + r.id,
    name: String(i18n.t(`navbar.${r.id}`)),
    component: r.component,
    meta: getMeta(r.id)
}))

routes.push({path: '/', redirect: '/home'});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(to => {
  Vue.nextTick(() => {
    document.title = to?.meta.title ?? i18n.t('app.title');
  });
});

export default router
