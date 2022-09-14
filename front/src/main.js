import '@fortawesome/fontawesome-free/js/all.js'

import { createApp } from 'vue'
import App from './App.vue'
// title controller
import {switchTitleInput, changeTitle} from './controllers/titleController/titleChange'
import { dragTitle } from './controllers/titleController/titleDrag'
// add event controller
import { addCardControllerByClick, addCardControllerByEnter } from './controllers/addEventController/addCardEventController'
import { addListControllerByClick, addListControllerByEnter } from './controllers/addEventController/addListEventController'
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


// add card, add list button events
addCardControllerByClick()
addCardControllerByEnter()
addListControllerByClick()
addListControllerByEnter()

// inputBoxController
openInputBox()
closeInputBox()

// change title event
switchTitleInput()
changeTitle()
