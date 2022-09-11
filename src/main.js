import '@fortawesome/fontawesome-free/js/all.js'

import { createApp } from 'vue'
import App from './App.vue'

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

// add a card button events
const AddButtons = document.getElementsByClassName('add-a-card-controller-a')

for(var ib=0; ib<AddButtons.length; ib++ ){
    console.log("for loop "+ ib)
    console.log(AddButtons.item(ib))
    AddButtons.item(ib).addEventListener('click',(events) => {
        console.log(events)
        var controllerA = events.path[0].childNodes[0]
        var controllerB = events.path[0].childNodes[0]
        if (events.path.length === 10){
            controllerA = events.path[1].childNodes[0]
            controllerB = events.path[1].childNodes[1]
        } else {
            controllerA = events.path[2].childNodes[0]
            controllerB = events.path[2].childNodes[1]
        }
        inputBoxOpen(controllerA,controllerB)
    })
}


var inputBoxOpen = function(AddDisapper,InputAppers){
    //켜져있는 다른 inputbox 끄기
    const addAppers=document.getElementsByClassName('add-a-card-controller-a-hidden')
    const InputDisapper = document.getElementsByClassName('add-a-card-controller-b')
    if(addAppers.length !== 0){
        addAppers[0].className='add-a-card-controller-a'
        InputDisapper[0].className='add-a-card-controller-b-hidden'
        //클릭한 inputbox 열기            
        AddDisapper.className='add-a-card-controller-a-hidden'
        InputAppers.className='add-a-card-controller-b'
    }else{
    // Add a card click 입력받기
    AddDisapper.className='add-a-card-controller-a-hidden'
    InputAppers.className='add-a-card-controller-b'
    }
}

// add card, add list button events
const AddCardButtons = document.getElementsByClassName('add-card')

for(var iclb=0; iclb<AddCardButtons.length; iclb++){
    var AddCardButton = AddCardButtons[iclb];
    AddCardButton.addEventListener('click', () => {
        console.log(iclb);
        console.log("clicked");
    });
}

// quit add card button events
const closeButtons = document.getElementsByClassName('close-add-card')
for(var icb=0; icb<closeButtons.length; icb++){

    closeButtons[icb].addEventListener('click', () => {
        const addAppers=document.getElementsByClassName('add-a-card-controller-a-hidden')
        const InputDisapper = document.getElementsByClassName('add-a-card-controller-b')
        if(addAppers.length !== 0){
            addAppers[0].className='add-a-card-controller-a'
            InputDisapper[0].className='add-a-card-controller-b-hidden'
        }
    })
}