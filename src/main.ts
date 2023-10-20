import './styles/global.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//VueI18n
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import ptBrLocale from './locales/pt-br'

const messages = {
  'pt-br': ptBrLocale,
}

const i18n = createI18n({
  locale: 'pt-br',
  fallbackLocale: 'pt-br',
  messages,
})

const app = createApp(App)

app.use(createPinia())
app.use(createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
}))
app.use(i18n)
app.use(router)

app.mount('#app')
