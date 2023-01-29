import { createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import createServer from "@inertiajs/server";

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

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) => require(`./Pages/${name}`),
        setup({ app, props, plugin }) {
            return createSSRApp({
                render: () => h(app, props),
            })
            .use(I18NextVue, { i18next })
            .use(plugin);
        },
    })
);
