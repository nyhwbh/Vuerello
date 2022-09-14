import '@fortawesome/fontawesome-free/js/all.js'

import { createApp } from 'vue'
import App from './App.vue'
// get controller
import {sendEvents} from './controllers/controller'

createApp(App).mount('#app')

sendEvents()
