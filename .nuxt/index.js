import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_workbox_7b1cf3be from 'nuxt_plugin_workbox_7b1cf3be' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_2c2f4a3e from 'nuxt_plugin_metaplugin_2c2f4a3e' // Source: .\\pwa\\meta.plugin.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"FavAppIkon","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"A guide for Favicon & App Icons"},{"name":"keywords","content":"Favicon, App Icon, PWA, browserconfig, mstiles, tiles, android, ios, splashscreen, chrome"},{"property":"og:url","content":"https:\u002F\u002Ffavikon-b2ba4.web.app\u002F"},{"property":"og:title","content":"FavAppIkon"},{"property":"og:description","content":"A guide for Favicons and Progressive Web App Icons"},{"property":"og:image","content":"\u002Fog.png"},{"name":"theme-color","content":"#2E3E51"},{"name":"mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-title","content":"FavAppIkon"},{"name":"apple-mobile-web-app-status-bar-style","content":"black-translucent"},{"hid":"charset","charset":"utf-8"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"}],"link":[{"rel":"apple-touch-icon","sizes":"120x120","href":"\u002Fapple-touch-icon-120x120-precomposed.png"},{"rel":"apple-touch-icon","sizes":"152x152","href":"\u002Fapple-touch-icon-152x152-precomposed.png"},{"rel":"apple-touch-icon","sizes":"167x167","href":"\u002Fapple-touch-icon-167x167-precomposed.png"},{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Fapple-touch-icon-180x180-precomposed.png"},{"rel":"apple-touch-icon","sizes":"192x192","href":"\u002Fandroid\u002Fmobile-favicon-192.png"},{"rel":"shortcut icon","sizes":"192x192","href":"\u002Fandroid\u002Fmobile-favicon-192.png"},{"rel":"manifest","href":"\u002Fmanifest.json"},{"rel":"mask-icon","href":"\u002Fios\u002Fsafari-pinned-tab.svg","color":"#ffffff"},{"rel":"shortcut icon","sizes":"16x16 32x32 64x64","href":"favicon.ico"},{"href":"\u002Fsplashscreens\u002Fiphone5_splash.png","media":"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)","rel":"apple-touch-startup-image"},{"href":"\u002Fsplashscreens\u002Fiphone6_splash.png","media":"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)","rel":"apple-touch-startup-image"},{"href":"\u002Fsplashscreens\u002Fiphoneplus_splash.png","media":"(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)","rel":"apple-touch-startup-image"},{"href":"\u002Fsplashscreens\u002Fiphonex_splash.png","media":"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)","rel":"apple-touch-startup-image"},{"href":"\u002Fsplashscreens\u002Fiphonexr_splash.png","media":"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)","rel":"apple-touch-startup-image"},{"href":"\u002Fsplashscreens\u002Fiphonexsmax_splash.png","media":"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)","rel":"apple-touch-startup-image"},{"href":"\u002Fsplashscreens\u002Fiphone12_splash.png","media":"(device-width: 390px) and (device-height: 884px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)","rel":"apple-touch-startup-image"},{"href":"\u002Fsplashscreens\u002Fiphone12max_splash.png","media":"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)","rel":"apple-touch-startup-image"},{"href":"\u002Fsplashscreens\u002Fipad_splash.png","media":"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)","rel":"apple-touch-startup-image"},{"href":"\u002Fsplashscreens\u002Fipadpro1_splash.png","media":"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)","rel":"apple-touch-startup-image"},{"href":"\u002Fsplashscreens\u002Fipadpro3_splash.png","media":"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)","rel":"apple-touch-startup-image"},{"href":"\u002Fsplashscreens\u002Fipadpro2_splash.png","media":"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)","rel":"apple-touch-startup-image"},{"hid":"shortcut-icon","rel":"shortcut icon","href":"\u002Ffavicon.ico"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.f9b350a9.json","hid":"manifest"}],"script":[],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_7b1cf3be === 'function') {
    await nuxt_plugin_workbox_7b1cf3be(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_2c2f4a3e === 'function') {
    await nuxt_plugin_metaplugin_2c2f4a3e(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
