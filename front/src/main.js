import '@fortawesome/fontawesome-free/js/all.js'

import { createApp } from 'vue'
import App from './App.vue'

import {openInputBox, closeInputBox} from './controllers/inputBoxController/inputBoxController'

createApp(App).mount('#app')


// title drag events
const titleDrags = document.getElementsByClassName('card-title');

for(var it=0; it<titleDrags.length; it++){
    var titleDrag = titleDrags[it];

    titleDrag.addEventListener('click', () => {
        console.log(it)
        console.log("clicked");
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


// add card, add list button events
const AddCardButtons = document.getElementsByClassName('add-card')

for(var iclb=0; iclb<AddCardButtons.length; iclb++){
    AddCardButtons[iclb].addEventListener('click', (events) => {
        console.log(events)
        const valueInput = events.path[3].childNodes[0].value
        events.path[3].childNodes[0].value = null
        console.log(valueInput);
    });
}

// inputBoxController
openInputBox()
closeInputBox()