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

var inputBoxOpen = function(idx){
    const AddButtons = document.getElementsByClassName('add-a-card-controller-a')
    const InputAppers = document.getElementsByClassName('add-a-card-controller-b-hidden')

    console.log("the inputBoxOpen fuction is running")
    AddButtons[idx].className='add-a-card-controller-a-hidden'
    InputAppers[idx].className='add-a-card-controller-b'
}

var inputBoxClose = function(idx){
    const AddButtons = document.getElementsByClassName('add-a-card-controller-a-hidden')
    const InputAppers = document.getElementsByClassName('add-a-card-controller-b')

    console.log("the inputBoxClose fuction is running")
    AddButtons[idx].className='add-a-card-controller-a'
    InputAppers[idx].className='add-a-card-controller-b-hidden'
}

AddButtons[0].addEventListener('click',() => {
    inputBoxOpen(0), false
})

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

closeButtons[0].addEventListener('click', () => {
    inputBoxClose(0),false
})



// ***** 수정할 것
// className이 계속 바뀌기 때문에 값을 지정해서 테스트하는 경우 
// 오류가 발생

// 관련한 알고리즘 작성하여 오류 해결 및 JS controller 작성하기