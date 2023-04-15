export default {
    ssr: true,
    /*
    ** Headers of the page
    */
    head: {
        title: 'FavAppIkon',
        htmlAttrs: {lang: 'fr'},
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'description', content: 'A guide for Favicon & App Icons'},
            {name: "keywords", content: "Favicon, App Icon, PWA, browserconfig, mstiles, tiles, android, ios, splashscreen, chrome"},

            /* OG */
            {property: "og:url", content: "https://favikon-b2ba4.web.app/"},
            {property: "og:title", content: "FavAppIkon"},
            {property: "og:description", content: "A guide for Favicons and Progressive Web App Icons"},
            {property: "og:image", content: "/og.png"},

            /* PWA / Browser dedicated */
            {name: "theme-color", content: "#2E3E51"},
            {name: "mobile-web-app-capable", content: "yes"},
            {name: "apple-mobile-web-app-capable", content: "yes"}, /* iOS */
            {name: "apple-mobile-web-app-title", content: "FavAppIkon"}, /* iOS */
            {name: "apple-mobile-web-app-status-bar-style", content: "black-translucent"}, /* iOS */
        ],

        link: [
            /* Icons, Manifest */
            {rel: "apple-touch-icon", sizes: "120x120", href: "/apple-touch-icon-120x120-precomposed.png"}, /* iphone retina - previously 114 */
            {rel: "apple-touch-icon", sizes: "152x152", href: "/apple-touch-icon-152x152-precomposed.png"}, /* ipad Touch Icon - previously 144 */
            {rel: "apple-touch-icon", sizes: "167x167", href: "/apple-touch-icon-167x167-precomposed.png"}, /* iPad Retina Touch Icon - Since iOs10, 152 will be used */
            {rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon-180x180-precomposed.png"}, /* iPhone Retina */
            {rel: "apple-touch-icon", sizes: "192x192", href: "/android/mobile-favicon-192.png"}, /* Retina Screens Trick*/
            {rel: "shortcut icon", sizes: "192x192", href: "/android/mobile-favicon-192.png"}, /* Favicons */
            {rel: "manifest", href: "/manifest.json"}, /* Manifest */
            {rel: "mask-icon", href: "/ios/safari-pinned-tab.svg", color: "#ffffff"},
            {rel: "shortcut icon", sizes: "16x16 32x32 64x64", href: "favicon.ico"}, /* Favicons */


            /* iOs SplashScreen - FYA */
            {href: "/splashscreens/iphone5_splash.png", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image"},
            {href: "/splashscreens/iphone6_splash.png", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image"},
            {href: "/splashscreens/iphoneplus_splash.png", media: "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)", rel: "apple-touch-startup-image"},
            {href: "/splashscreens/iphonex_splash.png", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)", rel: "apple-touch-startup-image"},
            {href: "/splashscreens/iphonexr_splash.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image"},
            {href: "/splashscreens/iphonexsmax_splash.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)", rel: "apple-touch-startup-image"},
            {href: "/splashscreens/iphone12_splash.png", media: "(device-width: 390px) and (device-height: 884px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)", rel: "apple-touch-startup-image"},
            {href: "/splashscreens/iphone12max_splash.png", media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)", rel: "apple-touch-startup-image"},
            {href: "/splashscreens/ipad_splash.png", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image"},
            {href: "/splashscreens/ipadpro1_splash.png", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image"},
            {href: "/splashscreens/ipadpro3_splash.png", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image"},
            {href: "/splashscreens/ipadpro2_splash.png", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image"},
        ],

        script: [],

    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [{src: '~/assets/style/main.sass'}],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/pwa',
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/pwa',
    ],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },
    pwa: {
        icon: false // disables the icon module
    }
}
