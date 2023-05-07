"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var pinia_1 = require("pinia");
var App_vue_1 = require("./App.vue");
require("@unocss/reset/tailwind.css");
require("uno.css");
require("virtual:unocss-devtools");
require("./assets/base.css");
var app = (0, vue_1.createApp)(App_vue_1["default"]);
app.use((0, pinia_1.createPinia)());
app.mount('#app');
