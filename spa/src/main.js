import Vue from 'vue'
import VueRouter from 'vue-router'
import Nova from 'nova-vue-bridge'
import { loadScript } from 'nova-helpers'

import App from './App.vue'
import Home from  './components/Home'

import 'bulma';

Vue.use(VueRouter)

Vue.config.productionTip = false

import entryPoints from './views.json';

document.addEventListener('NovaMount', ({ detail }) => {
  const { name } = detail;

  const script = entryPoints[name];

  if (script) {
    loadScript(script);
  }
});

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: Nova, props: { name: 'Example', data: { title: 'About Page' } } }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
