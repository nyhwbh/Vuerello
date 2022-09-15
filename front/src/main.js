import '@fortawesome/fontawesome-free/js/all.js'

import { createApp } from 'vue'
import App from './App.vue'
// get controller
import {sendEventsClick,sendEventsEnter} from './controllers/controller'

createApp(App).mount('#app')

sendEventsClick()

sendEventsEnter()