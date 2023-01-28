import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ 
      setup: () => delete el.dataset.page, 
      render: () => h(App, props)
    })
      .use(plugin)
      .mount(el)
  },
})