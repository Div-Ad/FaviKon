(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{170:function(e,t,o){e.exports=o.p+"img/16px-demo.3a4a430.svg"},171:function(e,t,o){e.exports=o.p+"img/appicon-maskable-512.234bc8f.svg"},172:function(e,t,o){e.exports=o.p+"img/favicon-512.e48b38f.svg"},173:function(e,t,o){e.exports=o.p+"img/icon-capt.dfc6df6.png"},174:function(e,t,o){e.exports=o.p+"img/android-chrome-192x192.e544169.png"},175:function(e,t,o){e.exports=o.p+"img/id-v.dc852ef.png"},176:function(e,t,o){e.exports=o.p+"img/id-n.64c3530.png"},177:function(e,t,o){e.exports=o.p+"img/id-p.34cb135.png"},178:function(e,t,o){e.exports=o.p+"img/mask-demo.9b98b8a.png"},179:function(e,t,o){"use strict";o.r(t);var n=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"faviKon"}},[n("div",{staticClass:"go-up"},[n("a",{attrs:{href:"#Menu"}})]),n("div",{staticClass:"content"},[n("h1",[n("b",[e._v("PWA")]),e._v(" Icons, manifest "),n("br"),e._v(" & Favicon Issues")]),n("div",{staticClass:"flexVC justifySA mb32 mt32"},[n("img",{staticClass:"intro rounded",attrs:{src:o(171)}}),n("img",{staticClass:"intro",attrs:{src:o(172)}})]),n("p",{staticClass:"date"},[e._v("12/05/2021 - "),n("span",{staticClass:"author"},[e._v("David Délis.")])]),n("div",{staticClass:"preambule"},[n("p",[e._v("Hello, I'm a French graphic designer & front-end web integrator.")]),n("p",[e._v("Perfectly understand favicons and App icons behaviours is a nightmare. Lies everywhere, stuff that should work and doesn't, icons ignored, etc.")]),n("p",[e._v('Consequently, I decided to create every (a lot) past and present recommended icons and directly inscribed the size value on them. The icons where all the same, except I wrote "16" on the 16px favicon, "32" on the 32px favicon, ... up to 512px. I loaded them in a nuxt/firebase project - the one you\'re reading now - with a pwa configuration. And I tested.')]),n("p",[e._v('Some "nuxt generate" and "firebase deploy" later, I realized that a vast majority of them seemed useless. Designs, sizes and files supposed to help you control how your favicons & App icon look here and there, all of this, even following precise doc & user reco, it didn\'t work the way it was supposed to.')]),n("p",[e._v("The pieces of information bellow are a compilation of links & notes.")]),n("p",[e._v("Through final observations and a conclusion, you can directly jump to a summary of what I think every front-end guys should know.")]),n("p",[e._v("At the end of this document, my head link declaration, and my manifest.")]),n("p",[e._v("At the very end of this document some tips to create crisp favicons and App icons.")])]),n("h2",{attrs:{id:"Menu"}},[e._v("Menu")]),n("a",{staticClass:"space",attrs:{href:"#Favicons"}},[e._v("Mission 1 : How many favicons am I supposed to create ?")]),n("a",{staticClass:"space",attrs:{href:"#AppIcons"}},[e._v("Mission 2 : App Icons")]),n("a",{staticClass:"space",attrs:{href:"#MsTiles"}},[e._v("Mission 3 : Windows & Ms Tiles")]),n("a",{staticClass:"space",attrs:{href:"#ManifestIssue"}},[e._v("Mission 4 : Testing & the manifest issue")]),n("a",{staticClass:"space",attrs:{href:"#AppleTouch"}},[e._v("Mission 5 : The apple-touch-icon issue")]),n("a",{staticClass:"space",attrs:{href:"#Test"}},[e._v("Test results")]),n("a",{staticClass:"space",attrs:{href:"#Observations"}},[e._v("Final Observations")]),n("a",{staticClass:"space",attrs:{href:"#Conclusion"}},[e._v("Conclusion")]),n("a",{staticClass:"space",attrs:{href:"#Head"}},[e._v("My final nuxt.config.js concerning head, link")]),n("a",{staticClass:"space",attrs:{href:"#Manifest"}},[e._v("My final manifest.json")]),n("a",{staticClass:"space",attrs:{href:"#Tips"}},[e._v("Tips (favicon and App icon design)")]),n("h2",[e._v("Links & doc")]),n("p"),n("h3",[e._v("Read it or not")]),n("a",{staticClass:"space",attrs:{href:"https://github.com/audreyfeldroy/favicon-cheat-sheet#optional-but-encouraged",target:"_blank"}},[e._v("Github - Favicon Explained")]),n("a",{staticClass:"space",attrs:{href:"https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/hh772707(v=vs.85)",target:"_blank"}},[e._v("Microsoft")]),n("a",{staticClass:"space",attrs:{href:"https://web.dev/maskable-icon/",target:"_blank"}},[e._v("About PWA maskable icons")]),n("a",{staticClass:"space",attrs:{href:"https://stackoverflow.com/questions/48839338/which-icon-sizes-are-required-for-progressive-web-apps-pwa-as-of-q1-2018/52322368#52322368",target:"_blank"}},[e._v("StackOverflow - Topic about Icon Sizes")]),n("a",{staticClass:"space",attrs:{href:"https://web.dev/manifest-updates/",target:"_blank"}},[e._v("About manifest updates")]),n("a",{staticClass:"space",attrs:{href:"https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html",target:"_blank"}},[e._v("Safari web content Guide / Web App")]),n("a",{staticClass:"space",attrs:{href:"https://mathiasbynens.be/notes/touch-icons#effects",target:"_blank"}},[e._v("Touch Icons Sizes et precomposed explanations")]),n("a",{staticClass:"space",attrs:{href:"https://www.emergeinteractive.com/insights/detail/the-essentials-of-favicons/",target:"_blank"}},[e._v("A (mostly) complete list of all the 7 known Favorite Icon Sizes (~year 2020)")]),n("h3",[e._v("usefull tools")]),n("a",{staticClass:"space",attrs:{href:"https://appsco.pe/developer/splash-screens",target:"_blank"}},[e._v("Splash Screens for iOs generator (no Iphone 12)")]),n("a",{staticClass:"space",attrs:{href:"http://www.xiconeditor.com/",target:"_blank"}},[e._v("favicon.ico generator containing multiple .png in one file.")]),n("p"),n("h2",{attrs:{id:"Favicons"}},[e._v("Mission 1 : How many favicons am I supposed to create ?")]),n("li",[e._v('Concerning the famous "favicon.ico" and its .png brothers, well, only one is needed apparently, at the root of your site, named favicon.ico containing 2 sizes 16px and 32px. And that\'s it. I recommand you use a'),n("a",{staticClass:"ib",attrs:{href:"http://www.xiconeditor.com/",target:"_blank"}},[e._v("favicon generator")]),e._v(" to add multiple .png in one .ico file.")]),n("li",[e._v("A fallback is said to be usefull for old browsers, but who cares ? If you do, add a 32px favicon in .png and link it in your head.")]),n("li",[e._v("For Android Chrome, 2 are often created : 128px and 192px .png images. That's when it gets confusing. App icons or Favicons Design ? These, in my opinion, have to be of the very same design as the classic favicons. These are not app icons.")]),n("li",[e._v("It was recommended to add a 196px icon for the sole purpose of a homescreen Android Chrome shortcut. In the mini tab view of your Android Chrome browser, this icon will be chosen. That's an issue. You want it to look like an app icon in your homescreen, but want it to look like a typical favicon in your browser : here starts the nightmare. Should we skip this one if we're doing a PWA, since the App icons chosen will be the one declared in the manifest ?")]),n("li",[e._v("A special case for safari - FYA - It's a pure black 000 rgb shape representing your site or app logo exported as a .svg. You can define the color in the head, but it tends to render poorly. I don't know the rules, but it seems that if the contrast is not high enough, safari will add a white background. It has to be the same shape of your classic favicon in my opinion.")]),n("h2",{attrs:{id:"AppIcons"}},[e._v("Mission 2 : App Icons")]),n("h3",[e._v("Should I Create the 128px, 192px, 256px, 384px and 512px App Icons ?")]),n("p",[e._v("You may think that all that is declared in the manifest is app related ? If so, every icon sizes must have a purpose related to the App.")]),n("p",[e._v("In 2021, on modern devices, the 192px icon seems to have only one purpose, and I'm almost certain that it's exactly the same as the android-chrome favicon we designed before.")]),n("p",[e._v("It means that this icon must in fact be based on a favicon design, where the other icons have to be dedicated to the App and look like App icons.")]),n("p",[e._v("Still, I had this test where I didn't have the 128px and 256px declared in the manifest. Chrome Android 7 chose the 192px as the main PWA Icon. I Added the 256px, that was designed as an App Icon. Gets ignored. I Added the 128px, and then, 192px get ignored. mmmh ... :)")]),n("p",[e._v("The point of creating 128px, 256px, 384px icons is to target specific devices and resolutions. It MAY be interesting for some issues. See next point.")]),n("h3",[e._v("So, which icon will be chosen in the webmanifest ?")]),n("blockquote",[n("p",[e._v("If there are multiple equally appropriate images in icons, a user agent MUST use the last one declared in order at the time that the user agent collected the list of icons. If the user agent tries to use an icon but that icon is determined, upon closer examination, to be inappropriate (e.g. because its content type is unsupported), then the user agent MUST try the next-most-appropriate icon as determined by examining the manifest image resource's members.")]),n("small",[n("br"),e._v("Source : somewhere on the web")])]),n("p",[e._v("Well ... the user agent surely must but doesn't really in the end, unless I don't understand what is LAST, MUST, and NEXT-MOST.")]),n("p",[e._v("Another example is when the Chrome application tab in your console scans your manifest, and tells you which Icon is gonna be prioritized over the other. So much lies again. :D")]),n("p",[e._v('Anyway, after a shit ton of tries (see test bellow), I investigated the maskable icon method : I tried it on 2 icons of 512px, one with "purpose": "maskable" that\'s gonna be used as the app icon, and one with no purpose (default: any), used for ... the splashscreen and in ... Microsoft Windows 10. Only these 2 icons were declared in the manifest for this test.')]),n("p",[e._v("Concerning 128px, 256px and 384px icons : in android 7.0, on a Samsung Galaxy Tab S2, the maskable value didn't seem to work. But the icon IS masked in the end. So you may have to hack the system to have a App dedicated Icon that is gonna be masked, and prevent the system from choosing a favicon designed Icon. In this case, you should have a unique 256px icon that is gonna be used for the App icon and for the splasher. I came to that conclusion after realising that the 256px App icon will be chosen on your mobile phone too if declared, and the 384px icon will be chosen for your splasher. So, perfect 256px App icon for the Samsung Galaxy Tab and the Samsung A8, Perfect 384px splasher icon for the Samsung A8, and same 256px App icon used for splasher for the Samsung Galaxy Tab. Are you still here ?")]),n("h2",{attrs:{id:"MsTiles"}},[e._v("Mission 3 : Windows & Ms Tiles")]),n("p",[e._v("If your point was to have nice tiles in Windows 10 : your browserconfig.xml, your tiles declaration in the head, your specific 5 strange icon dimensions, everything will be completely ignored.")]),n("p",[e._v("If you're not concerned with Windows Phone - And I could not find any friend having one - you can give up on the full browserconfig / IEconfig / mstiles icons stuff.")]),n("p",[e._v("We are in 2021, I attempted every possible ways, but in the end, windows 10 takes the icon declared in the manifest. Doesn't look that bad in the end, but still. Was this supposed to work that way ? I'll gladly tak any advice concerning that matter.")]),n("p",[e._v("What I did not attempted was to check if, when there's no manifest, windows gets the stuff done the way he was supposed to. But well, I need a manifest so ...")]),n("h2",{attrs:{id:"ManifestIssue"}},[e._v("Mission 4 : Testing & the manifest issue")]),n("p",[e._v("It's a nightmare to clear the cache on mobile and erase data for installed app. It's long and painful.")]),n("p",[e._v("Let's say you installed a first version and are not content with the result : you fix your icons, upload it, and try to reinstall the App. Well, yeah. Android has kept in IDontKnowWhere the previous icon. You can try to clear the Chrome cache all you want, it will not have any effect.")]),n("p",[e._v('Actually, to help your browser understand you changed things, you have to add a version key (e.g.: "?v=2") at the end of your declaration href. It doesn\'t work 100% of the time, but it works better than any other technic I came across.')]),n("code",[e._v('{ rel: "manifest", href: "/manifest.json'),n("strong",{staticClass:"red"},[e._v("?v=2")]),e._v('" }')]),n("h3",[e._v("Will my installed PWA update my App Icons ?")]),n("blockquote",[n("p",[e._v("When the PWA is launched, Chrome determines the last time the local manifest was checked for changes. If the manifest hasn't been checked in the last 24 hours, Chrome will schedule a network request for the manifest, then compare it against the local copy.")]),n("p",[e._v("If select properties in the manifest have changed (see list below), Chrome queues the new manifest, and after all windows of the PWA have been closed, the device is plugged in, and connected to WiFi, Chrome requests an updated WebAPK from the server. Once updated, all fields from the new manifest are used.")]),n("p",[e._v("Which properties will trigger an update?")]),n("li",[e._v("background_color")]),n("li",[e._v("display")]),n("li",[e._v("orientation")]),n("li",[e._v("scope")]),n("li",[e._v("shortcuts")]),n("li",[e._v("start_url")]),n("li",[e._v("theme_color")]),n("li",[e._v("web_share_target")]),n("p"),n("p",[e._v("If Chrome is unable to get an updated manifest from the server, it may increase the time between checks to 30 days.")]),n("small",[n("br"),e._v("Source : somewhere on the web")])]),n("p",[e._v("What you can conclude is :")]),n("li",[e._v("it's almost impossible to have an update of your icons without uninstalling and installing the PWA again.")]),n("li",[e._v("it's a pretty major constraint, because if your icon choices are not iron solid, you may have a ton of users who have installed the App and who will keep the same \"bad\" icon for eternity. I suggest, as a graphic designer with a solid OCD, to weigh this accordingly : take your time, test, and when you deploy your App, don't regret it !")]),n("h2",{attrs:{id:"AppleTouch"}},[e._v("Mission 5 : The apple-touch-icon issue")]),n("p",[e._v('You\'re supposed to declare a list of apple-touch-icons in your head, dedicated to iOs Users and 4 types of device : Phone, Tablet, Phone Retina, Tablet Retina. Due to "pixel density" shitty concept, iOs will pick a ~60px based icon multiplied by 1, 2 or 3 (the pixel density factor), letting you understand why you have 57px(lol), 120px, 180px icons in the end. The principle is not the same on tablet tough ... ok.')]),n("p",[e._v("Isn't the fun infinite ? Yes it is. Because, the best behaviour of all is that some browsers (Chrome, FF) tend to choose the 180px apple-touch-icon over any other. And you fool were sure that if there's apple in the name, it means that it's for Apple users ...")]),n("p",[e._v("So, let's say you have a 192px favicon dedicated to your chrome android browser, it WILL get ignored on your mobile phone, but be chosen on your desktop.")]),n("p",[e._v("HA HA HA. Kill me.")]),n("p",[e._v("Someone suggested - in 2015 - to get rid of the size and type attributes, and pretended it worked like a charm ion iPad, Iphone, Firefox and Chrome. But, why ? What was the point of declaring sizes at the beginning ? Nope. Don't want to test it.")]),n("p",[e._v("What I tried :")]),n("li",[e._v("changing the declaration order, to no effect.")]),n("li",[e._v("Adding bigger icons after or before the 180px apple-touch-icon, because cause someone said modern browsers tend to chose the biggest one, to no effect.")]),n("p",[e._v('Ok, in the end the mess comes from the rel attribute "apple-touch-icon". That\'s it.')]),n("li",[e._v("If the apple icons are declared, the biggest one will bypass the other icons.")]),n("li",[e._v("As much as we hate Apple for those absurd screen resolutions and stupid icon sizes (57px, WHY?), we can count on them to always choose the correct icon according to the targeted device.")]),n("p",[e._v("Thus, adding new apple-touch-icon will never be a problem, since Apple will never choose incorrect icons. And that's exactly what we can exploit. What we want is our 192px favicon to be chosen. From this objective and these realisations, we have 2 options :")]),n("li",[e._v("One way is to avoid declaring apple-touch-icon in the head, and let iOs do its stuff, since these icons are supposed to be fetched automatically by iOs anyway if placed at the root of your app.")]),n("li",[e._v('But the best hack is to add a last icon with a rel attribute "apple-touch-icon", size value of 192x192, and href your existing 192px favicon design icon. It works.')]),n("h2",[e._v("Anticipated regrets")]),n("p",[e._v('Let\'s be cool with it. Trying to have a perfect control on icons for every cases seems "almost" impossible.')]),n("p",[e._v("In the end, I guess It would depend on complex JS that would, for instance, load a specific head according to the device/OS detection, etc.")]),n("p",[e._v("So, let's try our best without JS, and find a good compromise.")]),n("div",{staticClass:"tests",attrs:{id:"Test"}},[n("h2",[e._v("Test Results")]),n("h3",[e._v("Icons tested")]),n("img",{staticClass:"initial",attrs:{src:o(173)}}),n("h3",[e._v("2021 - Windows 10")]),n("h4",[e._v("Browsers favicons - Firefox, Chrome, Edge")]),n("li",[e._v("In navbar / address bar / tabs : 16px (.ico)")]),n("li",[e._v("Homescreen / loading page : 32px (.ico)")]),n("li",[e._v("Parameters : 16px (.ico)")]),n("h4",[e._v("Firefox")]),n("li",[e._v("In collection : 16px (.ico) + gets og:image")]),n("h4",[e._v("Desktop install - Firefox, Chrome, Edge")]),n("li",[e._v("Install prompt : 128px")]),n("li",[e._v("In Windows taskbar : 128px")]),n("li",[e._v("In Windows launch menu : 128px")]),n("li",[e._v("In Windows tiles : 128px. If from Edge, it will be with a electric blue background. If not, it will be a transparent one. No tiles options. When resizing thumbnail (small, big), no change. 128px.")]),n("h3",[e._v("2021 - Samsung A8 - Android 9")]),n("h4",[e._v("Browsers favicon - Firefox, Chrome, Native / "),n("b",[e._v("No Apple-touch-icon declared in the Head")])]),n("li",[e._v("Navbar, address bar, minified page, etc. : 192px")]),n("li",[e._v("Parameters, history, collection : 192px")]),n("li",[e._v("Homescreen / loading page : 192px")]),n("h4",[e._v("Browsers favicon - Firefox, Chrome, Native / "),n("b",[e._v("Apple-touch-icons are declared in the Head - max size icon is 180px")])]),n("li",[e._v("Navbar, address bar, minified page, etc. : 180px")]),n("li",[e._v("Parameters, history, collection : 180px")]),n("li",[e._v("Homescreen / loading page : 192px")]),n("h4",[e._v("Browsers favicon - Firefox, Chrome, Native / "),n("b",[e._v("Apple-touch-icons are declared in the Head - max size icon is 192px")])]),n("li",[e._v("Navbar, address bar, minified page, etc. : 192px touch")]),n("li",[e._v("Parameters, history, collection : 192px touch")]),n("li",[e._v("History (Native browser) : 192px (masked)")]),n("li",[e._v("Homescreen / loading page : 192px")]),n("h4",[e._v("PWA - from Chrome")]),n("li",[e._v("Install prompt : 512px Maskable / 256px Maskable if declared")]),n("li",[e._v("App icon : 512px Maskable / 256px Maskable if declared")]),n("li",[e._v("Splasher : 512px No Mask / 384px if declared --\x3e Can be any shape (rectangle) BUT Height will be 384px anyway.")]),n("li",[e._v("Minified window : 512px Maskable / 256px Maskable if declared")]),n("h4",[e._v("PWA - from Native Browser")]),n("li",[e._v("Install prompt : 512px Maskable / 256px Maskable if declared")]),n("li",[e._v("App icon : 512px Maskable / 256px Maskable if declared")]),n("li",[e._v("Splasher : 512 No Mask")]),n("li",[e._v("Minified Windows : 512px Maskable / 256px Maskable if declared. Adds a white square bg in every cases ... sure, why not !")]),n("h3",[e._v("2021 - Samsung Galaxy Tab S2 - Android 7")]),n("h4",[e._v("Browsers favicon")]),n("li",[e._v("Same rules as mobile.")]),n("h4",[e._v("PWA - from Chrome")]),n("li",[e._v("Install prompt : 128px")]),n("li",[e._v("Install prompt 2 : 128px")]),n("li",[e._v("App icon : 256px no mask")]),n("li",[e._v("Splasher : 256px no mask")]),n("li",[e._v("Minified window : 128px")]),n("h3",[e._v("2021 - IOs 14.4.2 Mobile Devices (Ipad Air 2 / iPhone 12)")]),n("h4",[e._v("Safari Favicons")]),n("li",[e._v("Tab / minimized window : 32px (.ico)")]),n("li",[e._v("Share window : 192px")]),n("li",[e._v("Install prompt : Iphone 12 --\x3e 120px / Ipad Air 2 --\x3e 152px")]),n("h4",[e._v("PWA")]),n("li",[e._v("All splashscreen declared are displayed")]),n("li",[e._v("App Icon : Iphone 12 --\x3e 120px / Ipad Air 2 --\x3e 152px")]),n("h3",[e._v("2021 - MacOs")]),n("h4",[e._v("Safari favicons")]),n("li",[e._v("Tab : safari pinned Tab, but with a white background.")]),n("li",[e._v("Bookmarks : 32px .ico")])]),n("h2",{attrs:{id:"Observations"}},[e._v("Final Observations")]),n("h3",[e._v("about classic favicons")]),n("li",[e._v("16px and 32px are the only one used in the .ico resource.")]),n("li",[e._v(".png favicon resources are never used if you have a multi file favicon.ico")]),n("li",[e._v("The BIGGEST apple-touch-icon will be the chosen favicon on almost every mobile devices, whatever the OS.")]),n("li",[e._v("The android-chrome-192x192px will be displayed in the vast majority of transition pages in browsers (homescreens, share windows, etc.)")]),n("h3",[e._v("about Ms Tiles")]),n("li",[e._v("Gets ignored and ignored and ignored.")]),n("h3",[e._v("about PWA App icons")]),n("li",[e._v("The absence of a 192px icon in the manifest can make some OS ignore the whole manifest.")]),n("li",[e._v("Install prompts, Mobile homescreens, Minimized windows are choosing one of the icons declared in the manifest.")]),n("li",[e._v("Microsoft Windows 10 checks the manifest and chooses the smallest Icon.")]),n("li",[e._v("The 512px icon can cover every cases related to the App Icons.")]),n("li",[e._v("The minimum quantity of icons to declare is 2 : a mandatory 196px icon and a recommended all-around big maskable App icon.")]),n("li",[e._v("The 384px icon has been loaded only one time, As the App splasher, in android 9, On a Samsung A8.")]),n("li",[e._v("The best way to hack android 7 has been to declare a 128px App icon and a 256px App icon, as it chooses the first one as the App icon on install prompts, and the second one as App icon and App splasher. Removing the 128px icon makes the OS choose the 192px as the App icon.")]),n("li",[e._v('"maskable" doesn\'t work on every device.')]),n("li",[e._v("Apple is good at pinpointing the right resources.")]),n("h2",{attrs:{id:"Conclusion"}},[e._v("Conclusion")]),n("h3",[e._v("Only 2 designs are needed")]),n("li",[e._v("1 Favicon Design")]),n("li",[e._v("1 App Icon Design")]),n("h3",[e._v("12 files")]),n("h4",[e._v("Favicons : 2 files")]),n("li",[e._v("1. favicon.ico : multi sizes .png with 16px / 32px at least & 64px as a base. With the"),n("a",{staticClass:"ib",attrs:{href:"http://www.xiconeditor.com/",target:"_blank"}},[e._v("favicon.ico generator")]),e._v(" , upload your 64px .png, previously created from a perfect 16px base.")]),n("li",[e._v('2. mobile-favicon-192.png : will be used in 3 places - 2 head link rel "apple-touch-icon" & "icon" and 1 declaration in the manifest)')]),n("h4",[e._v("Splashers based on favicon design : 2 files")]),n("li",[e._v("3. appicon-splasher-384.png : will be used as a full icon splasher.")]),n("li",[e._v("4. appicon-splasher-512.png : will be used as a full icon splasher.")]),n("h4",[e._v("App Icons : 7 files")]),n("li",[e._v("5. appicon-maskable-128.png : will be used as the official App Icon - don't mention purpose in manifest")]),n("li",[e._v("6. appicon-maskable-256.png : will be used as the official App Icon / Will be used sometimes as splasher - don't mention purpose in manifest")]),n("li",[e._v('7. appicon-maskable-512.png : will be used as the official App Icon - "purpose": "maskable"')]),n("li",[e._v("8. apple-touch-icon-120x120-precomposed.png : iphone Retina")]),n("li",[e._v("9. apple-touch-icon-152x152-precomposed.png : ipad")]),n("li",[e._v("10. apple-touch-icon-167x167-precomposed.png : ipad Retina")]),n("li",[e._v("11. apple-touch-icon-180x180-precomposed.png : iphone Retina")]),n("h4",[e._v("Special : 1 file")]),n("li",[e._v("12. safari-pinned-tab : used in Safari Mac OS.")]),n("h3",[e._v("Splashers")]),n("h4",[e._v("if you care about apple users")]),n("li",[e._v("Create Custom Splash Screen on iOS "),n("a",{staticClass:"ib",attrs:{href:"https://appsco.pe/developer/splash-screens",target:"_blank"}},[e._v("Here")])]),n("li",[e._v("The total 12 images weight is gonna be around 300ko, if you have up to 4 colors max in your png. Way mor if you have picture type or complex content.")]),n("h2",{attrs:{id:"Head"}},[e._v("My final nuxt.config.js concerning head, link")]),n("code",[n("span",[e._v("link: [")]),n("br"),n("span",{staticClass:"p24"},[e._v("/* Icons, Manifest */")]),n("span",{staticClass:"p24"},[e._v('{rel: "apple-touch-icon", sizes: "120x120", href: "/apple-touch-icon-120x120-precomposed.png"}, /* iphone retina - previously 114 */')]),n("span",{staticClass:"p24"},[e._v('{rel: "apple-touch-icon", sizes: "152x152", href: "/apple-touch-icon-152x152-precomposed.png"}, /* ipad Touch Icon - previously 144 */')]),n("span",{staticClass:"p24"},[e._v('{rel: "apple-touch-icon", sizes: "167x167", href: "/apple-touch-icon-167x167-precomposed.png"}, /* iPad Retina Touch Icon - Since iOs10, 152 will be used */')]),n("span",{staticClass:"p24"},[e._v('{rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon-180x180-precomposed.png"}, /* iPhone Retina */')]),n("span",{staticClass:"p24"},[e._v('{rel: "apple-touch-icon", sizes: "192x192", href: "/android/mobile-favicon-192.png"}, /* Retina Screens Trick*/')]),n("span",{staticClass:"p24"},[e._v('{rel: "shortcut icon", sizes: "192x192", href: "/android/mobile-favicon-192.png"}, /* Favicons */')]),n("span",{staticClass:"p24"},[e._v('{rel: "manifest", href: "/manifest.json"}, /* Manifest */')]),n("span",{staticClass:"p24"},[e._v('{rel: "mask-icon", href: "/ios/safari-pinned-tab.svg", color: "#ffffff"},')]),n("span",{staticClass:"p24"},[e._v('{rel: "shortcut icon", sizes: "16x16 32x32 64x64", href: "favicon.ico"}, /* Favicons */')]),n("br"),n("span",{staticClass:"p24"},[e._v("/* iOs SplashScreen - FYA */")]),n("span",{staticClass:"p24"},[e._v('{href: "/splashscreens/iphone5_splash.png", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image"},')]),n("span",{staticClass:"p24"},[e._v('{href: "/splashscreens/iphone6_splash.png", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image"},')]),n("span",{staticClass:"p24"},[e._v('{href: "/splashscreens/iphoneplus_splash.png", media: "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)", rel: "apple-touch-startup-image"},')]),n("span",{staticClass:"p24"},[e._v('{href: "/splashscreens/iphonex_splash.png", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)", rel: "apple-touch-startup-image"},')]),n("span",{staticClass:"p24"},[e._v('{href: "/splashscreens/iphonexr_splash.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image"},')]),n("span",{staticClass:"p24"},[e._v('{href: "/splashscreens/iphonexsmax_splash.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)", rel: "apple-touch-startup-image"},')]),n("span",{staticClass:"p24"},[e._v('{href: "/splashscreens/iphone12_splash.png", media: "(device-width: 390px) and (device-height: 884px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)", rel: "apple-touch-startup-image"},')]),n("span",{staticClass:"p24"},[e._v('{href: "/splashscreens/iphone12max_splash.png", media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)", rel: "apple-touch-startup-image"},')]),n("span",{staticClass:"p24"},[e._v('{href: "/splashscreens/ipad_splash.png", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image"},')]),n("span",{staticClass:"p24"},[e._v('{href: "/splashscreens/ipadpro1_splash.png", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image"},')]),n("span",{staticClass:"p24"},[e._v('{href: "/splashscreens/ipadpro3_splash.png", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image"},')]),n("span",{staticClass:"p24"},[e._v('{href: "/splashscreens/ipadpro2_splash.png", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image"},')]),n("span",[e._v("],")])]),n("h2",{attrs:{id:"Manifest"}},[e._v("My final manifest.json")]),n("code",[n("span",[e._v("{")]),n("span",{staticClass:"p12"},[e._v('"name": "Favikon",')]),n("span",{staticClass:"p12"},[e._v('"short_name": "Favikon",')]),n("span",{staticClass:"p12"},[e._v('"description": "My journey to the favicon & app icon hell",')]),n("span",{staticClass:"p12"},[e._v('"display": "standalone",')]),n("span",{staticClass:"p12"},[e._v('"orientation": "portrait",')]),n("span",{staticClass:"p12"},[e._v('"theme_color": "#2E3E51",')]),n("span",{staticClass:"p12"},[e._v('"background_color": "#2E3E51",')]),n("span",{staticClass:"p12"},[e._v('"start_url": "/",')]),n("span",{staticClass:"p12"},[e._v('"icons": [')]),n("span",{staticClass:"p24"},[e._v('{"src": "android/mobile-favicon-192.png", "sizes": "192x192", "type": "image/png"},')]),n("span",{staticClass:"p24"},[e._v('{"src": "appicons/appicon-maskable-128.png", "sizes": "128x128", "type": "image/png"},')]),n("span",{staticClass:"p24"},[e._v('{"src": "appicons/appicon-maskable-256.png", "sizes": "256x256", "type": "image/png"},')]),n("span",{staticClass:"p24"},[e._v('{"src": "appicons/appicon-splasher-384.png", "sizes": "384x384", "type": "image/png"},')]),n("span",{staticClass:"p24"},[e._v('{"src": "appicons/appicon-splasher-512.png", "sizes": "512x512", "type": "image/png"},')]),n("span",{staticClass:"p24"},[e._v('{"src": "appicons/appicon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}')]),n("span",{staticClass:"p12"},[e._v("]")]),n("span",[e._v("}")])]),n("h2",{attrs:{id:"Tips"}},[e._v("Tips")]),n("h3",[e._v("How to design the favicon ?")]),n("li",[e._v("Make a perfect 16px favicon")]),n("li",[e._v("Work in vector, use a small amount of color")]),n("li",[e._v("Work in a pixel grid view to make sure every element is aligned to pixels. Avoid half pixels on straight lines, it will be blurry.")]),n("li",[e._v("from there, upscale it to 64px, 192px, 384px.")]),n("li",[e._v("export as .png")]),n("li",[e._v("use your 64px icon as base icon in"),n("a",{staticClass:"ib",attrs:{href:"http://www.xiconeditor.com/",target:"_blank"}},[e._v("favicon.ico generator")])]),n("div",{staticClass:"tests"},[n("h4",[e._v("results from 16px base")]),n("img",{attrs:{src:o(174)}}),n("img",{staticClass:"px16",attrs:{src:o(170)}}),n("span",[e._v("<- 16px")]),n("h4",[e._v("process")]),n("img",{attrs:{src:o(175)}}),n("img",{attrs:{src:o(176)}}),n("img",{attrs:{src:o(177)}})]),n("div",{staticClass:"mt32"}),n("h3",[e._v("Thoughts about pixels, svg and webfonts.")]),n("p",[e._v("There's a bad understanding of how pixel works. Some think that a .svg, because it's a vector file, will help to have a perfect rendering. That's not it at all. Your base 16px icon has to be pixel perfect, be it exported as a .svg or a .png. And, when you scale it, you have to go by increment of 16px, otherwise, you will have partial pixel rendering.")]),n("p",[e._v("That's the reason why you have 16px based icon, and 24px based icon.")]),n("li",[e._v("If you upscale a 16px to 24px, with, let's says, a initial stroke of 1px somewhere in your design, you increase the size by a factor of 1.5, meaning your stroke is going to be 1.5px.")]),n("li",[e._v("It you upscale a 16px to 32px, the 1px stroke is going to be 2px. Crisp rendering.")]),n("li",[e._v("Below : 16px based icon in .svg, upscaled at 24px, 32px, 57px. The only two icons that have a perfect rendering are the 1st and 3rd one : 16px and 32px. The rest is ok, but not perfect.")]),n("img",{attrs:{src:o(170),height:"16px",width:"16px"}}),n("img",{attrs:{src:o(170),height:"24px",width:"24px"}}),n("img",{attrs:{src:o(170),height:"32px",width:"32px"}}),n("img",{attrs:{src:o(170),height:"57px",width:"57px"}}),n("li",[e._v("Let's say you are designing a webfont, if you want to have the same icon displayed in your App at 16px and 24px, you'll have to create 2 different icons.")]),n("li",[e._v("That's why I hate 10px based webfonts too, because they don't give a damn about the 16px rule, and let you think that, because it's a vector, there won't be a problem. Ok, I may have invented that 16px rule, but, you know, every screen dimensions on desktops (except \"IWillDoItMyWayApple\"), were based on 8px to 16px. A FullHD screen is 120 x 16px. A HD Screen is 80 x 16px, etc. All my PWA for desktops are based on this. My margins and paddings are based on 24px or 16px, that I multiply by X or divide by Y. And I could develop that idea with 16bit/24bit/32bit color depth, 160kbps, 240kps, or 320kbps for mp3, etc. :)")]),n("p",[e._v("The retina screens changed the game, but the principle remains the same. Pixel density is just a factor. It just means that, to display correctly a 16px icon on a retina screen, you have to load a 32px resource divided by 2. That's why mobile favicon will choose a 192px favicon and divide it by 12 for a 16px final perception, 6 for a 32px final perception or 4 for a 48px final perception, etc.")]),n("p",[e._v("Note that Retina Screens have a much much better render anyway and can let you think that there are no issues with your icons. You have to keep in mind that most of desktop screens are not Retina ... :)")]),n("h3",[e._v("How to design the App Icon ?")]),n("li",[e._v('Make it simple. It doesn\'t mean "no effect", but rather, 1 or 2 strong elements.')]),n("li",[e._v("If you're not concerned with being part of the bad guys, choose ultra vivid colors (unlike my example). Get inspired by facebook, spotify, google and all the contemporary monsters.")]),n("li",[e._v("Be carefull of the maskable area. Make your logo/design inside the 80% width red circle.")]),n("li",[e._v("Make sure that your logotype inside the red area is 16px based if you want a perfect rendering. Remember that, again, 128, 256, 384, 512 are all 8px / 16px based.")]),n("li",[e._v("As for Apple icons ... well ... ask them.")]),n("div",{staticClass:"tests"},[n("img",{staticClass:"initial",attrs:{src:o(178)}})])])])}],r={name:"favikon",components:{},data:function(){return{}},methods:{},computed:{}},c=o(38),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),n,!1,null,null,null);t.default=component.exports}}]);