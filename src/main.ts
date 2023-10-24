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

// Pinia persist
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Toast
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

// Vue final modal
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'


const messages = {
  'pt-br': ptBrLocale,
}

const i18n = createI18n({
  locale: 'pt-br',
  fallbackLocale: 'pt-br',
  messages,
  legacy: false,
})

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
}))
app.use(i18n)
app.use(ToastPlugin)
app.use(createVfm())
app.use(router)

app.mount('#app')
