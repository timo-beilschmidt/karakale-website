import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f41e2bc = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _c9c69fdc = () => interopDefault(import('../pages/datenschutz.vue' /* webpackChunkName: "pages/datenschutz" */))
const _a34e926c = () => interopDefault(import('../pages/galerie.vue' /* webpackChunkName: "pages/galerie" */))
const _54202726 = () => interopDefault(import('../pages/impressum.vue' /* webpackChunkName: "pages/impressum" */))
const _1d9d530f = () => interopDefault(import('../pages/kontakt.vue' /* webpackChunkName: "pages/kontakt" */))
const _4306db27 = () => interopDefault(import('../pages/leistungen.vue' /* webpackChunkName: "pages/leistungen" */))
const _4ef9bd81 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2f41e2bc,
    name: "about"
  }, {
    path: "/datenschutz",
    component: _c9c69fdc,
    name: "datenschutz"
  }, {
    path: "/galerie",
    component: _a34e926c,
    name: "galerie"
  }, {
    path: "/impressum",
    component: _54202726,
    name: "impressum"
  }, {
    path: "/kontakt",
    component: _1d9d530f,
    name: "kontakt"
  }, {
    path: "/leistungen",
    component: _4306db27,
    name: "leistungen"
  }, {
    path: "/",
    component: _4ef9bd81,
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
