import zh from './lang/zh.js';
import en from './lang/en.js';

export default defineNuxtConfig({
  css: ["~/assets/css/main.css",],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/i18n', 
      {
      defaultLocale: 'en',
      locales: ['en','zh'],
      vueI18n: {
        fallbackLocale: 'en',
        messages: { zh, en },
      },
      // 浏览器语言检测
      detectBrowserLanguage: {
        useCookie: true
        // onlyOnRoot: true
      }
      }
    ]
  ],
  
})
