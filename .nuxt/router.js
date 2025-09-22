import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e895238 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _e74cdae4 = () => interopDefault(import('../pages/datenschutz.vue' /* webpackChunkName: "pages/datenschutz" */))
const _49823746 = () => interopDefault(import('../pages/galerie.vue' /* webpackChunkName: "pages/galerie" */))
const _6a290ebc = () => interopDefault(import('../pages/impressum.vue' /* webpackChunkName: "pages/impressum" */))
const _8e7258ea = () => interopDefault(import('../pages/kontakt.vue' /* webpackChunkName: "pages/kontakt" */))
const _b4b48daa = () => interopDefault(import('../pages/leistungen.vue' /* webpackChunkName: "pages/leistungen" */))
const _c37da606 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _7e895238,
    name: "about"
  }, {
    path: "/datenschutz",
    component: _e74cdae4,
    name: "datenschutz"
  }, {
    path: "/galerie",
    component: _49823746,
    name: "galerie"
  }, {
    path: "/impressum",
    component: _6a290ebc,
    name: "impressum"
  }, {
    path: "/kontakt",
    component: _8e7258ea,
    name: "kontakt"
  }, {
    path: "/leistungen",
    component: _b4b48daa,
    name: "leistungen"
  }, {
    path: "/",
    component: _c37da606,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
