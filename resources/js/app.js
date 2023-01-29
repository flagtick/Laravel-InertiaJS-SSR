import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

import i18next from "i18next";
import I18NextVue from "i18next-vue";
import LanguageDetector from 'i18next-browser-languagedetector'

import { locales } from "./lang/en.js";

i18next
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: { translation: locales.en },
    },
  });

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ 
      setup: () => delete el.dataset.page, 
      render: () => h(App, props)
    })
      .use(I18NextVue, { i18next })
      .use(plugin)
      .mount(el)
  },
})