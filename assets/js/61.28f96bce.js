(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{400:function(e,t,a){"use strict";a.r(t);var r=a(46),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading"}},[e._v("#")]),e._v(" Upgrading")]),e._v(" "),a("p",[e._v("Upgrading the Panel is a relatively simple process. Below you will find a list of articles that will walk you through\nthe upgrade process for each version of the software.")]),e._v(" "),a("h2",{attrs:{id:"maintenance-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maintenance-mode"}},[e._v("#")]),e._v(" Maintenance Mode")]),e._v(" "),a("p",[e._v("Whenever you are performing an upgrade you should be sure to place your Panel into maintenance mode. This will prevent\nusers from encountering unexpected errors and ensure everything can be upgraded before users being encountering\npotentially new features.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Put the Panel into maintenance mode and deny user access")]),e._v("\nphp artisan down\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Bring the Panel back up to receive connections.")]),e._v("\nphp artisan up\n")])])]),a("h2",{attrs:{id:"restarting-queue-workers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restarting-queue-workers"}},[e._v("#")]),e._v(" Restarting Queue Workers")]),e._v(" "),a("p",[e._v("After "),a("em",[e._v("every")]),e._v(" update you should restart the queue worker to ensure that the new code is loaded in and used.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan queue:restart\n")])])]),a("h2",{attrs:{id:"version-specific-guides"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-specific-guides"}},[e._v("#")]),e._v(" Version Specific Guides")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/panel/0.7/upgrade/0.6_to_0.7.html"}},[e._v("0.6.X to 0.7.18")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/panel/0.7/upgrade/0.7.html"}},[e._v("0.7.X series")]),e._v(" "),a("Badge",{attrs:{text:"current",vertical:"middle"}})],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/panel/1.0/upgrade/0.7_to_1.0.html"}},[e._v("0.7.18 to 1.0.X")]),e._v(" "),a("Badge",{attrs:{text:"release candidate",vertical:"middle"}})],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);