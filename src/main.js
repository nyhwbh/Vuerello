import '@fortawesome/fontawesome-free/js/all.js'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


// title drag events
const titleDrags = document.getElementsByClassName('card-title');

for(var it=0; it<titleDrags.length; it++){
    var titleDrag = titleDrags[it];

    titleDrag.addEventListener('click', () => {
        console.log("clicked");
    });
}

// list drag events
const listDrags = document.getElementsByClassName('card-content-list');

for(var il=0; il<listDrags.length; il++){
    var listDrag = listDrags[il];

    listDrag.addEventListener('click', () => {
        console.log("clicked");
    });
}

// add a card button events
const AddButtons = document.getElementsByClassName('add-a-card-controller-a')

for(var iab=0; iab<AddButtons.length; iab++){
    var AddButton = AddButtons[iab];

    AddButton.addEventListener('click', () => {
        console.log("clicked");
    });
}

// add card, add list button events
const AddCardButtons = document.getElementsByClassName('add-card')
console.log(AddCardButtons)

for(var iclb=0; iclb<AddCardButtons.length; iclb++){
    var AddCardButton = AddCardButtons[iclb];
    console.log(AddButton)
    AddCardButton.addEventListener('click', () => {
        console.log("clicked");
    });
}

// quit add card button events
const closeButtons = document.getElementsByClassName('close-add-card')

for(var icb=0; icb<closeButtons.length; icb++){
    var closeButton = closeButtons[icb];

    closeButton.addEventListener('click', () => {
        console.log("clicked");
    });
}