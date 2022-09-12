import '@fortawesome/fontawesome-free/js/all.js'

import { createApp } from 'vue'
import App from './App.vue'

import { addCardController } from './controllers/addcardandListController/addcardandListController'
import {switchTitleInput, changeTitle} from './controllers/titleController/titleChange'
import {openInputBox, closeInputBox} from './controllers/inputBoxController/inputBoxController'

createApp(App).mount('#app')


// title drag events
const titleDrags = document.getElementsByClassName('card-content-title');

for(var it=0; it<titleDrags.length; it++){
    var titleDrag = titleDrags[it];

    titleDrag.addEventListener('mousedown', () => {
        console.log(it)
        console.log("mouse down now");
    },false);
}

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