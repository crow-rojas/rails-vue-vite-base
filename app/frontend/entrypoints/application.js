import { Turbo } from "@hotwired/turbo-rails";

window.Turbo = Turbo;

import "./main.scss";

import { createApp } from 'vue';
import Home from "../components/views/Home.vue";

if (document.querySelector('#home')) {
  const home = createApp(Home);
  home.mount('#home');
}