exports.ids = [1];
exports.modules = {

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/16px-demo.3a4a430.svg";

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/appicon-maskable-512.234bc8f.svg";

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/favicon-512.e48b38f.svg";

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-capt.dfc6df6.png";

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/android-chrome-192x192.e544169.png";

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/id-v.dc852ef.png";

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/id-n.64c3530.png";

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/id-p.34cb135.png";

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mask-demo.9b98b8a.png";

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./templates/index.pug?vue&type=template&id=71ed8131&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"faviKon"}},[_vm._ssrNode("<div class=\"go-up\"><a href=\"#Menu\"></a></div><div class=\"content\"><h1><b>PWA</b> Icons, manifest <br> &amp; Favicon Issues</h1><div class=\"flexVC justifySA mb32 mt32\"><img"+(_vm._ssrAttr("src",__webpack_require__(26)))+" class=\"intro rounded\"><img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" class=\"intro\"></div><p class=\"date\">12/05/2021 - <span class=\"author\">David Délis.</span></p><div class=\"preambule\"><p>Hello, I'm a French graphic designer &amp; front-end web integrator.</p><p>Perfectly understand favicons and App icons behaviours is a nightmare. Lies everywhere, stuff that should work and doesn't, icons ignored, etc.</p><p>Consequently, I decided to create every (a lot) past and present recommended icons and directly inscribed the size value on them. The icons where all the same, except I wrote &quot;16&quot; on the 16px favicon, &quot;32&quot; on the 32px favicon, ... up to 512px. I loaded them in a nuxt/firebase project - the one you're reading now - with a pwa configuration. And I tested.</p><p>Some &quot;nuxt generate&quot; and &quot;firebase deploy&quot; later, I realized that a vast majority of them seemed useless. Designs, sizes and files supposed to help you control how your favicons &amp; App icon look here and there, all of this, even following precise doc &amp; user reco, it didn't work the way it was supposed to.</p><p>The pieces of information bellow are a compilation of links &amp; notes.</p><p>Through final observations and a conclusion, you can directly jump to a summary of what I think every front-end guys should know.</p><p>At the end of this document, my head link declaration, and my manifest.</p><p>At the very end of this document some tips to create crisp favicons and App icons.</p></div><h2 id=\"Menu\">Menu</h2><a href=\"#Favicons\" class=\"space\">Mission 1 : How many favicons am I supposed to create ?</a><a href=\"#AppIcons\" class=\"space\">Mission 2 : App Icons</a><a href=\"#MsTiles\" class=\"space\">Mission 3 : Windows &amp; Ms Tiles</a><a href=\"#ManifestIssue\" class=\"space\">Mission 4 : Testing &amp; the manifest issue</a><a href=\"#AppleTouch\" class=\"space\">Mission 5 : The apple-touch-icon issue</a><a href=\"#Test\" class=\"space\">Test results</a><a href=\"#Observations\" class=\"space\">Final Observations</a><a href=\"#Conclusion\" class=\"space\">Conclusion</a><a href=\"#Head\" class=\"space\">My final nuxt.config.js concerning head, link</a><a href=\"#Manifest\" class=\"space\">My final manifest.json</a><a href=\"#Tips\" class=\"space\">Tips (favicon and App icon design)</a><h2>Links &amp; doc</h2><p></p><h3>Read it or not</h3><a href=\"https://github.com/audreyfeldroy/favicon-cheat-sheet#optional-but-encouraged\" target=\"_blank\" class=\"space\">Github - Favicon Explained</a><a href=\"https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/hh772707(v=vs.85)\" target=\"_blank\" class=\"space\">Microsoft</a><a href=\"https://web.dev/maskable-icon/\" target=\"_blank\" class=\"space\">About PWA maskable icons</a><a href=\"https://stackoverflow.com/questions/48839338/which-icon-sizes-are-required-for-progressive-web-apps-pwa-as-of-q1-2018/52322368#52322368\" target=\"_blank\" class=\"space\">StackOverflow - Topic about Icon Sizes</a><a href=\"https://web.dev/manifest-updates/\" target=\"_blank\" class=\"space\">About manifest updates</a><a href=\"https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html\" target=\"_blank\" class=\"space\">Safari web content Guide / Web App</a><a href=\"https://mathiasbynens.be/notes/touch-icons#effects\" target=\"_blank\" class=\"space\">Touch Icons Sizes et precomposed explanations</a><a href=\"https://www.emergeinteractive.com/insights/detail/the-essentials-of-favicons/\" target=\"_blank\" class=\"space\">A (mostly) complete list of all the 7 known Favorite Icon Sizes (~year 2020)</a><h3>usefull tools</h3><a href=\"https://appsco.pe/developer/splash-screens\" target=\"_blank\" class=\"space\">Splash Screens for iOs generator (no Iphone 12)</a><a href=\"http://www.xiconeditor.com/\" target=\"_blank\" class=\"space\">favicon.ico generator containing multiple .png in one file.</a><p></p><h2 id=\"Favicons\">Mission 1 : How many favicons am I supposed to create ?</h2><li>Concerning the famous &quot;favicon.ico&quot; and its .png brothers, well, only one is needed apparently, at the root of your site, named favicon.ico containing 2 sizes 16px and 32px. And that's it. I recommand you use a<a href=\"http://www.xiconeditor.com/\" target=\"_blank\" class=\"ib\">favicon generator</a> to add multiple .png in one .ico file.</li><li>A fallback is said to be usefull for old browsers, but who cares ? If you do, add a 32px favicon in .png and link it in your head.</li><li>For Android Chrome, 2 are often created : 128px and 192px .png images. That's when it gets confusing. App icons or Favicons Design ? These, in my opinion, have to be of the very same design as the classic favicons. These are not app icons.</li><li>It was recommended to add a 196px icon for the sole purpose of a homescreen Android Chrome shortcut. In the mini tab view of your Android Chrome browser, this icon will be chosen. That's an issue. You want it to look like an app icon in your homescreen, but want it to look like a typical favicon in your browser : here starts the nightmare. Should we skip this one if we're doing a PWA, since the App icons chosen will be the one declared in the manifest ?</li><li>A special case for safari - FYA - It's a pure black 000 rgb shape representing your site or app logo exported as a .svg. You can define the color in the head, but it tends to render poorly. I don't know the rules, but it seems that if the contrast is not high enough, safari will add a white background. It has to be the same shape of your classic favicon in my opinion.</li><h2 id=\"AppIcons\">Mission 2 : App Icons</h2><h3>Should I Create the 128px, 192px, 256px, 384px and 512px App Icons ?</h3><p>You may think that all that is declared in the manifest is app related ? If so, every icon sizes must have a purpose related to the App.</p><p>In 2021, on modern devices, the 192px icon seems to have only one purpose, and I'm almost certain that it's exactly the same as the android-chrome favicon we designed before.</p><p>It means that this icon must in fact be based on a favicon design, where the other icons have to be dedicated to the App and look like App icons.</p><p>Still, I had this test where I didn't have the 128px and 256px declared in the manifest. Chrome Android 7 chose the 192px as the main PWA Icon. I Added the 256px, that was designed as an App Icon. Gets ignored. I Added the 128px, and then, 192px get ignored. mmmh ... :)</p><p>The point of creating 128px, 256px, 384px icons is to target specific devices and resolutions. It MAY be interesting for some issues. See next point.</p><h3>So, which icon will be chosen in the webmanifest ?</h3><blockquote><p>If there are multiple equally appropriate images in icons, a user agent MUST use the last one declared in order at the time that the user agent collected the list of icons. If the user agent tries to use an icon but that icon is determined, upon closer examination, to be inappropriate (e.g. because its content type is unsupported), then the user agent MUST try the next-most-appropriate icon as determined by examining the manifest image resource's members.</p><small><br>Source : somewhere on the web</small></blockquote><p>Well ... the user agent surely must but doesn't really in the end, unless I don't understand what is LAST, MUST, and NEXT-MOST.</p><p>Another example is when the Chrome application tab in your console scans your manifest, and tells you which Icon is gonna be prioritized over the other. So much lies again. :D</p><p>Anyway, after a shit ton of tries (see test bellow), I investigated the maskable icon method : I tried it on 2 icons of 512px, one with &quot;purpose&quot;: &quot;maskable&quot; that's gonna be used as the app icon, and one with no purpose (default: any), used for ... the splashscreen and in ... Microsoft Windows 10. Only these 2 icons were declared in the manifest for this test.</p><p>Concerning 128px, 256px and 384px icons : in android 7.0, on a Samsung Galaxy Tab S2, the maskable value didn't seem to work. But the icon IS masked in the end. So you may have to hack the system to have a App dedicated Icon that is gonna be masked, and prevent the system from choosing a favicon designed Icon. In this case, you should have a unique 256px icon that is gonna be used for the App icon and for the splasher. I came to that conclusion after realising that the 256px App icon will be chosen on your mobile phone too if declared, and the 384px icon will be chosen for your splasher. So, perfect 256px App icon for the Samsung Galaxy Tab and the Samsung A8, Perfect 384px splasher icon for the Samsung A8, and same 256px App icon used for splasher for the Samsung Galaxy Tab. Are you still here ?</p><h2 id=\"MsTiles\">Mission 3 : Windows &amp; Ms Tiles</h2><p>If your point was to have nice tiles in Windows 10 : your browserconfig.xml, your tiles declaration in the head, your specific 5 strange icon dimensions, everything will be completely ignored.</p><p>If you're not concerned with Windows Phone - And I could not find any friend having one - you can give up on the full browserconfig / IEconfig / mstiles icons stuff.</p><p>We are in 2021, I attempted every possible ways, but in the end, windows 10 takes the icon declared in the manifest. Doesn't look that bad in the end, but still. Was this supposed to work that way ? I'll gladly tak any advice concerning that matter.</p><p>What I did not attempted was to check if, when there's no manifest, windows gets the stuff done the way he was supposed to. But well, I need a manifest so ...</p><h2 id=\"ManifestIssue\">Mission 4 : Testing &amp; the manifest issue</h2><p>It's a nightmare to clear the cache on mobile and erase data for installed app. It's long and painful.</p><p>Let's say you installed a first version and are not content with the result : you fix your icons, upload it, and try to reinstall the App. Well, yeah. Android has kept in IDontKnowWhere the previous icon. You can try to clear the Chrome cache all you want, it will not have any effect.</p><p>Actually, to help your browser understand you changed things, you have to add a version key (e.g.: &quot;?v=2&quot;) at the end of your declaration href. It doesn't work 100% of the time, but it works better than any other technic I came across.</p><code>{ rel: &quot;manifest&quot;, href: &quot;/manifest.json<strong class=\"red\">?v=2</strong>&quot; }</code><h3>Will my installed PWA update my App Icons ?</h3><blockquote><p>When the PWA is launched, Chrome determines the last time the local manifest was checked for changes. If the manifest hasn't been checked in the last 24 hours, Chrome will schedule a network request for the manifest, then compare it against the local copy.</p><p>If select properties in the manifest have changed (see list below), Chrome queues the new manifest, and after all windows of the PWA have been closed, the device is plugged in, and connected to WiFi, Chrome requests an updated WebAPK from the server. Once updated, all fields from the new manifest are used.</p><p>Which properties will trigger an update?</p><li>background_color</li><li>display</li><li>orientation</li><li>scope</li><li>shortcuts</li><li>start_url</li><li>theme_color</li><li>web_share_target</li><p></p><p>If Chrome is unable to get an updated manifest from the server, it may increase the time between checks to 30 days.</p><small><br>Source : somewhere on the web</small></blockquote><p>What you can conclude is :</p><li>it's almost impossible to have an update of your icons without uninstalling and installing the PWA again.</li><li>it's a pretty major constraint, because if your icon choices are not iron solid, you may have a ton of users who have installed the App and who will keep the same &quot;bad&quot; icon for eternity. I suggest, as a graphic designer with a solid OCD, to weigh this accordingly : take your time, test, and when you deploy your App, don't regret it !</li><h2 id=\"AppleTouch\">Mission 5 : The apple-touch-icon issue</h2><p>You're supposed to declare a list of apple-touch-icons in your head, dedicated to iOs Users and 4 types of device : Phone, Tablet, Phone Retina, Tablet Retina. Due to &quot;pixel density&quot; shitty concept, iOs will pick a ~60px based icon multiplied by 1, 2 or 3 (the pixel density factor), letting you understand why you have 57px(lol), 120px, 180px icons in the end. The principle is not the same on tablet tough ... ok.</p><p>Isn't the fun infinite ? Yes it is. Because, the best behaviour of all is that some browsers (Chrome, FF) tend to choose the 180px apple-touch-icon over any other. And you fool were sure that if there's apple in the name, it means that it's for Apple users ...</p><p>So, let's say you have a 192px favicon dedicated to your chrome android browser, it WILL get ignored on your mobile phone, but be chosen on your desktop.</p><p>HA HA HA. Kill me.</p><p>Someone suggested - in 2015 - to get rid of the size and type attributes, and pretended it worked like a charm ion iPad, Iphone, Firefox and Chrome. But, why ? What was the point of declaring sizes at the beginning ? Nope. Don't want to test it.</p><p>What I tried :</p><li>changing the declaration order, to no effect.</li><li>Adding bigger icons after or before the 180px apple-touch-icon, because cause someone said modern browsers tend to chose the biggest one, to no effect.</li><p>Ok, in the end the mess comes from the rel attribute &quot;apple-touch-icon&quot;. That's it.</p><li>If the apple icons are declared, the biggest one will bypass the other icons.</li><li>As much as we hate Apple for those absurd screen resolutions and stupid icon sizes (57px, WHY?), we can count on them to always choose the correct icon according to the targeted device.</li><p>Thus, adding new apple-touch-icon will never be a problem, since Apple will never choose incorrect icons. And that's exactly what we can exploit. What we want is our 192px favicon to be chosen. From this objective and these realisations, we have 2 options :</p><li>One way is to avoid declaring apple-touch-icon in the head, and let iOs do its stuff, since these icons are supposed to be fetched automatically by iOs anyway if placed at the root of your app.</li><li>But the best hack is to add a last icon with a rel attribute &quot;apple-touch-icon&quot;, size value of 192x192, and href your existing 192px favicon design icon. It works.</li><h2>Anticipated regrets</h2><p>Let's be cool with it. Trying to have a perfect control on icons for every cases seems &quot;almost&quot; impossible.</p><p>In the end, I guess It would depend on complex JS that would, for instance, load a specific head according to the device/OS detection, etc.</p><p>So, let's try our best without JS, and find a good compromise.</p><div id=\"Test\" class=\"tests\"><h2>Test Results</h2><h3>Icons tested</h3><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" class=\"initial\"><h3>2021 - Windows 10</h3><h4>Browsers favicons - Firefox, Chrome, Edge</h4><li>In navbar / address bar / tabs : 16px (.ico)</li><li>Homescreen / loading page : 32px (.ico)</li><li>Parameters : 16px (.ico)</li><h4>Firefox</h4><li>In collection : 16px (.ico) + gets og:image</li><h4>Desktop install - Firefox, Chrome, Edge</h4><li>Install prompt : 128px</li><li>In Windows taskbar : 128px</li><li>In Windows launch menu : 128px</li><li>In Windows tiles : 128px. If from Edge, it will be with a electric blue background. If not, it will be a transparent one. No tiles options. When resizing thumbnail (small, big), no change. 128px.</li><h3>2021 - Samsung A8 - Android 9</h3><h4>Browsers favicon - Firefox, Chrome, Native / <b>No Apple-touch-icon declared in the Head</b></h4><li>Navbar, address bar, minified page, etc. : 192px</li><li>Parameters, history, collection : 192px</li><li>Homescreen / loading page : 192px</li><h4>Browsers favicon - Firefox, Chrome, Native / <b>Apple-touch-icons are declared in the Head - max size icon is 180px</b></h4><li>Navbar, address bar, minified page, etc. : 180px</li><li>Parameters, history, collection : 180px</li><li>Homescreen / loading page : 192px</li><h4>Browsers favicon - Firefox, Chrome, Native / <b>Apple-touch-icons are declared in the Head - max size icon is 192px</b></h4><li>Navbar, address bar, minified page, etc. : 192px touch</li><li>Parameters, history, collection : 192px touch</li><li>History (Native browser) : 192px (masked)</li><li>Homescreen / loading page : 192px</li><h4>PWA - from Chrome</h4><li>Install prompt : 512px Maskable / 256px Maskable if declared</li><li>App icon : 512px Maskable / 256px Maskable if declared</li><li>Splasher : 512px No Mask / 384px if declared --&gt; Can be any shape (rectangle) BUT Height will be 384px anyway.</li><li>Minified window : 512px Maskable / 256px Maskable if declared</li><h4>PWA - from Native Browser</h4><li>Install prompt : 512px Maskable / 256px Maskable if declared</li><li>App icon : 512px Maskable / 256px Maskable if declared</li><li>Splasher : 512 No Mask</li><li>Minified Windows : 512px Maskable / 256px Maskable if declared. Adds a white square bg in every cases ... sure, why not !</li><h3>2021 - Samsung Galaxy Tab S2 - Android 7</h3><h4>Browsers favicon</h4><li>Same rules as mobile.</li><h4>PWA - from Chrome</h4><li>Install prompt : 128px</li><li>Install prompt 2 : 128px</li><li>App icon : 256px no mask</li><li>Splasher : 256px no mask</li><li>Minified window : 128px</li><h3>2021 - IOs 14.4.2 Mobile Devices (Ipad Air 2 / iPhone 12)</h3><h4>Safari Favicons</h4><li>Tab / minimized window : 32px (.ico)</li><li>Share window : 192px</li><li>Install prompt : Iphone 12 --&gt; 120px / Ipad Air 2 --&gt; 152px</li><h4>PWA</h4><li>All splashscreen declared are displayed</li><li>App Icon : Iphone 12 --&gt; 120px / Ipad Air 2 --&gt; 152px</li><h3>2021 - MacOs</h3><h4>Safari favicons</h4><li>Tab : safari pinned Tab, but with a white background.</li><li>Bookmarks : 32px .ico</li></div><h2 id=\"Observations\">Final Observations</h2><h3>about classic favicons</h3><li>16px and 32px are the only one used in the .ico resource.</li><li>.png favicon resources are never used if you have a multi file favicon.ico</li><li>The BIGGEST apple-touch-icon will be the chosen favicon on almost every mobile devices, whatever the OS.</li><li>The android-chrome-192x192px will be displayed in the vast majority of transition pages in browsers (homescreens, share windows, etc.)</li><h3>about Ms Tiles</h3><li>Gets ignored and ignored and ignored.</li><h3>about PWA App icons</h3><li>The absence of a 192px icon in the manifest can make some OS ignore the whole manifest.</li><li>Install prompts, Mobile homescreens, Minimized windows are choosing one of the icons declared in the manifest.</li><li>Microsoft Windows 10 checks the manifest and chooses the smallest Icon.</li><li>The 512px icon can cover every cases related to the App Icons.</li><li>The minimum quantity of icons to declare is 2 : a mandatory 196px icon and a recommended all-around big maskable App icon.</li><li>The 384px icon has been loaded only one time, As the App splasher, in android 9, On a Samsung A8.</li><li>The best way to hack android 7 has been to declare a 128px App icon and a 256px App icon, as it chooses the first one as the App icon on install prompts, and the second one as App icon and App splasher. Removing the 128px icon makes the OS choose the 192px as the App icon.</li><li>&quot;maskable&quot; doesn't work on every device.</li><li>Apple is good at pinpointing the right resources.</li><h2 id=\"Conclusion\">Conclusion</h2><h3>Only 2 designs are needed</h3><li>1 Favicon Design</li><li>1 App Icon Design</li><h3>12 files</h3><h4>Favicons : 2 files</h4><li>1. favicon.ico : multi sizes .png with 16px / 32px at least &amp; 64px as a base. With the<a href=\"http://www.xiconeditor.com/\" target=\"_blank\" class=\"ib\">favicon.ico generator</a> , upload your 64px .png, previously created from a perfect 16px base.</li><li>2. mobile-favicon-192.png : will be used in 3 places - 2 head link rel &quot;apple-touch-icon&quot; &amp; &quot;icon&quot; and 1 declaration in the manifest)</li><h4>Splashers based on favicon design : 2 files</h4><li>3. appicon-splasher-384.png : will be used as a full icon splasher.</li><li>4. appicon-splasher-512.png : will be used as a full icon splasher.</li><h4>App Icons : 7 files</h4><li>5. appicon-maskable-128.png : will be used as the official App Icon - don't mention purpose in manifest</li><li>6. appicon-maskable-256.png : will be used as the official App Icon / Will be used sometimes as splasher - don't mention purpose in manifest</li><li>7. appicon-maskable-512.png : will be used as the official App Icon - &quot;purpose&quot;: &quot;maskable&quot;</li><li>8. apple-touch-icon-120x120-precomposed.png : iphone Retina</li><li>9. apple-touch-icon-152x152-precomposed.png : ipad</li><li>10. apple-touch-icon-167x167-precomposed.png : ipad Retina</li><li>11. apple-touch-icon-180x180-precomposed.png : iphone Retina</li><h4>Special : 1 file</h4><li>12. safari-pinned-tab : used in Safari Mac OS.</li><h3>Splashers</h3><h4>if you care about apple users</h4><li>Create Custom Splash Screen on iOS <a href=\"https://appsco.pe/developer/splash-screens\" target=\"_blank\" class=\"ib\">Here</a></li><li>The total 12 images weight is gonna be around 300ko, if you have up to 4 colors max in your png. Way mor if you have picture type or complex content.</li><h2 id=\"Head\">My final nuxt.config.js concerning head, link</h2><code><span>link: [</span><br><span class=\"p24\">/* Icons, Manifest */</span><span class=\"p24\">{rel: &quot;apple-touch-icon&quot;, sizes: &quot;120x120&quot;, href: &quot;/apple-touch-icon-120x120-precomposed.png&quot;}, /* iphone retina - previously 114 */</span><span class=\"p24\">{rel: &quot;apple-touch-icon&quot;, sizes: &quot;152x152&quot;, href: &quot;/apple-touch-icon-152x152-precomposed.png&quot;}, /* ipad Touch Icon - previously 144 */</span><span class=\"p24\">{rel: &quot;apple-touch-icon&quot;, sizes: &quot;167x167&quot;, href: &quot;/apple-touch-icon-167x167-precomposed.png&quot;}, /* iPad Retina Touch Icon - Since iOs10, 152 will be used */</span><span class=\"p24\">{rel: &quot;apple-touch-icon&quot;, sizes: &quot;180x180&quot;, href: &quot;/apple-touch-icon-180x180-precomposed.png&quot;}, /* iPhone Retina */</span><span class=\"p24\">{rel: &quot;apple-touch-icon&quot;, sizes: &quot;192x192&quot;, href: &quot;/android/mobile-favicon-192.png&quot;}, /* Retina Screens Trick*/</span><span class=\"p24\">{rel: &quot;shortcut icon&quot;, sizes: &quot;192x192&quot;, href: &quot;/android/mobile-favicon-192.png&quot;}, /* Favicons */</span><span class=\"p24\">{rel: &quot;manifest&quot;, href: &quot;/manifest.json&quot;}, /* Manifest */</span><span class=\"p24\">{rel: &quot;mask-icon&quot;, href: &quot;/ios/safari-pinned-tab.svg&quot;, color: &quot;#ffffff&quot;},</span><span class=\"p24\">{rel: &quot;shortcut icon&quot;, sizes: &quot;16x16 32x32 64x64&quot;, href: &quot;favicon.ico&quot;}, /* Favicons */</span><br><span class=\"p24\">/* iOs SplashScreen - FYA */</span><span class=\"p24\">{href: &quot;/splashscreens/iphone5_splash.png&quot;, media: &quot;(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)&quot;, rel: &quot;apple-touch-startup-image&quot;},</span><span class=\"p24\">{href: &quot;/splashscreens/iphone6_splash.png&quot;, media: &quot;(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)&quot;, rel: &quot;apple-touch-startup-image&quot;},</span><span class=\"p24\">{href: &quot;/splashscreens/iphoneplus_splash.png&quot;, media: &quot;(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)&quot;, rel: &quot;apple-touch-startup-image&quot;},</span><span class=\"p24\">{href: &quot;/splashscreens/iphonex_splash.png&quot;, media: &quot;(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)&quot;, rel: &quot;apple-touch-startup-image&quot;},</span><span class=\"p24\">{href: &quot;/splashscreens/iphonexr_splash.png&quot;, media: &quot;(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)&quot;, rel: &quot;apple-touch-startup-image&quot;},</span><span class=\"p24\">{href: &quot;/splashscreens/iphonexsmax_splash.png&quot;, media: &quot;(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)&quot;, rel: &quot;apple-touch-startup-image&quot;},</span><span class=\"p24\">{href: &quot;/splashscreens/iphone12_splash.png&quot;, media: &quot;(device-width: 390px) and (device-height: 884px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)&quot;, rel: &quot;apple-touch-startup-image&quot;},</span><span class=\"p24\">{href: &quot;/splashscreens/iphone12max_splash.png&quot;, media: &quot;(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)&quot;, rel: &quot;apple-touch-startup-image&quot;},</span><span class=\"p24\">{href: &quot;/splashscreens/ipad_splash.png&quot;, media: &quot;(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)&quot;, rel: &quot;apple-touch-startup-image&quot;},</span><span class=\"p24\">{href: &quot;/splashscreens/ipadpro1_splash.png&quot;, media: &quot;(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)&quot;, rel: &quot;apple-touch-startup-image&quot;},</span><span class=\"p24\">{href: &quot;/splashscreens/ipadpro3_splash.png&quot;, media: &quot;(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)&quot;, rel: &quot;apple-touch-startup-image&quot;},</span><span class=\"p24\">{href: &quot;/splashscreens/ipadpro2_splash.png&quot;, media: &quot;(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)&quot;, rel: &quot;apple-touch-startup-image&quot;},</span><span>],</span></code><h2 id=\"Manifest\">My final manifest.json</h2><code><span>{</span><span class=\"p12\">&quot;name&quot;: &quot;Favikon&quot;,</span><span class=\"p12\">&quot;short_name&quot;: &quot;Favikon&quot;,</span><span class=\"p12\">&quot;description&quot;: &quot;My journey to the favicon &amp; app icon hell&quot;,</span><span class=\"p12\">&quot;display&quot;: &quot;standalone&quot;,</span><span class=\"p12\">&quot;orientation&quot;: &quot;portrait&quot;,</span><span class=\"p12\">&quot;theme_color&quot;: &quot;#2E3E51&quot;,</span><span class=\"p12\">&quot;background_color&quot;: &quot;#2E3E51&quot;,</span><span class=\"p12\">&quot;start_url&quot;: &quot;/&quot;,</span><span class=\"p12\">&quot;icons&quot;: [</span><span class=\"p24\">{&quot;src&quot;: &quot;android/mobile-favicon-192.png&quot;, &quot;sizes&quot;: &quot;192x192&quot;, &quot;type&quot;: &quot;image/png&quot;},</span><span class=\"p24\">{&quot;src&quot;: &quot;appicons/appicon-maskable-128.png&quot;, &quot;sizes&quot;: &quot;128x128&quot;, &quot;type&quot;: &quot;image/png&quot;},</span><span class=\"p24\">{&quot;src&quot;: &quot;appicons/appicon-maskable-256.png&quot;, &quot;sizes&quot;: &quot;256x256&quot;, &quot;type&quot;: &quot;image/png&quot;},</span><span class=\"p24\">{&quot;src&quot;: &quot;appicons/appicon-splasher-384.png&quot;, &quot;sizes&quot;: &quot;384x384&quot;, &quot;type&quot;: &quot;image/png&quot;},</span><span class=\"p24\">{&quot;src&quot;: &quot;appicons/appicon-splasher-512.png&quot;, &quot;sizes&quot;: &quot;512x512&quot;, &quot;type&quot;: &quot;image/png&quot;},</span><span class=\"p24\">{&quot;src&quot;: &quot;appicons/appicon-maskable-512.png&quot;, &quot;sizes&quot;: &quot;512x512&quot;, &quot;type&quot;: &quot;image/png&quot;, &quot;purpose&quot;: &quot;maskable&quot;}</span><span class=\"p12\">]</span><span>}</span></code><h2 id=\"Tips\">Tips</h2><h3>How to design the favicon ?</h3><li>Make a perfect 16px favicon</li><li>Work in vector, use a small amount of color</li><li>Work in a pixel grid view to make sure every element is aligned to pixels. Avoid half pixels on straight lines, it will be blurry.</li><li>from there, upscale it to 64px, 192px, 384px.</li><li>export as .png</li><li>use your 64px icon as base icon in<a href=\"http://www.xiconeditor.com/\" target=\"_blank\" class=\"ib\">favicon.ico generator</a></li><div class=\"tests\"><h4>results from 16px base</h4><img"+(_vm._ssrAttr("src",__webpack_require__(29)))+"><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" class=\"px16\"><span>&lt;- 16px</span><h4>process</h4><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+"><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+"><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+"></div><div class=\"mt32\"></div><h3>Thoughts about pixels, svg and webfonts.</h3><p>There's a bad understanding of how pixel works. Some think that a .svg, because it's a vector file, will help to have a perfect rendering. That's not it at all. Your base 16px icon has to be pixel perfect, be it exported as a .svg or a .png. And, when you scale it, you have to go by increment of 16px, otherwise, you will have partial pixel rendering.</p><p>That's the reason why you have 16px based icon, and 24px based icon.</p><li>If you upscale a 16px to 24px, with, let's says, a initial stroke of 1px somewhere in your design, you increase the size by a factor of 1.5, meaning your stroke is going to be 1.5px.</li><li>It you upscale a 16px to 32px, the 1px stroke is going to be 2px. Crisp rendering.</li><li>Below : 16px based icon in .svg, upscaled at 24px, 32px, 57px. The only two icons that have a perfect rendering are the 1st and 3rd one : 16px and 32px. The rest is ok, but not perfect.</li><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" height=\"16px\" width=\"16px\"><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" height=\"24px\" width=\"24px\"><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" height=\"32px\" width=\"32px\"><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" height=\"57px\" width=\"57px\"><li>Let's say you are designing a webfont, if you want to have the same icon displayed in your App at 16px and 24px, you'll have to create 2 different icons.</li><li>That's why I hate 10px based webfonts too, because they don't give a damn about the 16px rule, and let you think that, because it's a vector, there won't be a problem. Ok, I may have invented that 16px rule, but, you know, every screen dimensions on desktops (except &quot;IWillDoItMyWayApple&quot;), were based on 8px to 16px. A FullHD screen is 120 x 16px. A HD Screen is 80 x 16px, etc. All my PWA for desktops are based on this. My margins and paddings are based on 24px or 16px, that I multiply by X or divide by Y. And I could develop that idea with 16bit/24bit/32bit color depth, 160kbps, 240kps, or 320kbps for mp3, etc. :)</li><p>The retina screens changed the game, but the principle remains the same. Pixel density is just a factor. It just means that, to display correctly a 16px icon on a retina screen, you have to load a 32px resource divided by 2. That's why mobile favicon will choose a 192px favicon and divide it by 12 for a 16px final perception, 6 for a 32px final perception or 4 for a 48px final perception, etc.</p><p>Note that Retina Screens have a much much better render anyway and can let you think that there are no issues with your icons. You have to keep in mind that most of desktop screens are not Retina ... :)</p><h3>How to design the App Icon ?</h3><li>Make it simple. It doesn't mean &quot;no effect&quot;, but rather, 1 or 2 strong elements.</li><li>If you're not concerned with being part of the bad guys, choose ultra vivid colors (unlike my example). Get inspired by facebook, spotify, google and all the contemporary monsters.</li><li>Be carefull of the maskable area. Make your logo/design inside the 80% width red circle.</li><li>Make sure that your logotype inside the red area is 16px based if you want a perfect rendering. Remember that, again, 128, 256, 384, 512 are all 8px / 16px based.</li><li>As for Apple icons ... well ... ask them.</li><div class=\"tests\"><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" class=\"initial\"></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./templates/index.pug?vue&type=template&id=71ed8131&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'favikon',
  components: {},

  data() {
    return {};
  },

  methods: {},
  computed: {}
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "31fc14cc"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map