import '@fortawesome/fontawesome-free/js/all.js'

import { createApp } from 'vue'
import App from './App.vue'
// title controller
import {switchTitleInput, changeTitle} from './controllers/titleController/titleChange'
import { dragTitle } from './controllers/titleController/titleDrag'
// add event controller
import { addCardController } from './controllers/addEventController/addEventController'
// input box controller
import {openInputBox, closeInputBox} from './controllers/inputBoxController/inputBoxController'


createApp(App).mount('#app')


// title drag events
dragTitle()

// list drag events
const listDrags = document.getElementsByClassName('card-content-list');

for(var il=0; il<listDrags.length; il++){
    var listDrag = listDrags[il];

    listDrag.addEventListener('click', () => {
        console.log(il)
        console.log("clicked");
    });
}

// change title event
switchTitleInput()
changeTitle()

// add card, add list button events
addCardController()

// inputBoxController
openInputBox()
closeInputBox()