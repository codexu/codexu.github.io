(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{216:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"create-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-project","aria-hidden":"true"}},[e._v("#")]),e._v(" Create project")]),e._v(" "),s("p",[e._v("After learning the previous chapter, we quickly created an X-BUILD project, but its functionality is far from enough. Now re-create a project that belongs to you!")]),e._v(" "),s("h2",{attrs:{id:"create"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create","aria-hidden":"true"}},[e._v("#")]),e._v(" Create")]),e._v(" "),s("p",[e._v("Create a new project with the following instructions:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("x-build create "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("h2",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters","aria-hidden":"true"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),s("p",[s("font",{attrs:{color:"MediumSeaGreen"}},[e._v("[ -q ]")]),e._v(" Skip options to quickly initialize a default project.")],1),e._v(" "),s("p",[s("font",{attrs:{color:"MediumSeaGreen"}},[e._v("[ -n ]")]),e._v(" Ignore version detection, which may affect the normal startup of the project.")],1),e._v(" "),s("h2",{attrs:{id:"option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#option","aria-hidden":"true"}},[e._v("#")]),e._v(" option")]),e._v(" "),s("p",[e._v("X-BUILD provides several options, choose different configurations according to the needs of the project, then create your development directory according to your choice and install the corresponding dependencies.")]),e._v(" "),s("p",[e._v("The options provided ("),s("a",{attrs:{href:"https://github.com/codexu/x-build/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Need more features?"),s("OutboundLink")],1),e._v("):")]),e._v(" "),s("ul",[s("li",[e._v("Babel (default)")]),e._v(" "),s("li",[e._v("ESLint (default)")]),e._v(" "),s("li",[e._v("TypeScript")]),e._v(" "),s("li",[e._v("CSS Pre-processors\n"),s("ul",[s("li",[e._v("Sass")]),e._v(" "),s("li",[e._v("Less")]),e._v(" "),s("li",[e._v("Stylus")])])]),e._v(" "),s("li",[e._v("Pug (Jade)")]),e._v(" "),s("li",[e._v("Rem layout")])]),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("How to choose?")]),e._v(" "),s("p",[s("strong",[e._v("Keyboard ⬆️⬇️")]),e._v(" Switch options, "),s("strong",[e._v("Keyboard space [space]")]),e._v(" Select or cancel options, "),s("strong",[e._v("Keyboard [a]")]),e._v(" Select all, "),s("strong",[e._v("Keyboard [i]")]),e._v(" Inverse selection.")])]),e._v(" "),s("h2",{attrs:{id:"directory-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure","aria-hidden":"true"}},[e._v("#")]),e._v(" Directory Structure")]),e._v(" "),s("div",{staticClass:"language-dir extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  .\n  ├── xbuild.config.js # project configuration file\n  ├── package.json\n  ├── node_modules/\n  └── src/ # source directory\n      ├── api/ # AJAX request directory\n      ├── scripts/\n      | └── index.[js/ts] # ​​JavaScript main entry file\n      ├── styles/\n      | └── index.[css/scss/less/styl] #style entry file\n      └── index.[html/pug] # html文\n")])])]),s("h4",{attrs:{id:"entry-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entry-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Entry file:")]),e._v(" "),s("p",[s("strong",[e._v("HTML")]),e._v(":src/index.[html/pug]")]),e._v(" "),s("p",[s("strong",[e._v("JavaScript")]),e._v(":src/scripts/index.[js/ts]")]),e._v(" "),s("p",[s("strong",[e._v("CSS")]),e._v(": src/styles/index.[css/scss/less/styl]")]),e._v(" "),s("h4",{attrs:{id:"assets-static-resources-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assets-static-resources-directory","aria-hidden":"true"}},[e._v("#")]),e._v(" assets Static Resources Directory:")]),e._v(" "),s("p",[s("strong",[e._v("Image")]),e._v(": Create the directory assets/images, support png|jpe?g|gif|svg|webp format.")]),e._v(" "),s("p",[s("strong",[e._v("Font")]),e._v(": Create the directory assets/font, which supports the woff|eot|ttf|otf format.")]),e._v(" "),s("p",[s("strong",[e._v("Video")]),e._v(": Create the directory assets/media/, which supports the mp4|webm|ogg|mp3|wav|flac|aac format.")]),e._v(" "),s("h2",{attrs:{id:"development-and-production"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#development-and-production","aria-hidden":"true"}},[e._v("#")]),e._v(" Development and production")]),e._v(" "),s("p",[e._v("Usually the instructions of most CLI tools are the same, X-BUILD is no exception.")]),e._v(" "),s("p",[e._v("Development:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run serve\n")])])]),s("p",[e._v("produce:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])])]),s("p",[e._v("To find out what X-BUILD has done in both development and production environments, check out the next chapter "),s("a",{attrs:{href:"/Concepts"}},[e._v("Concepts")]),e._v(".")])])},[],!1,null,null,null);t.default=a.exports}}]);