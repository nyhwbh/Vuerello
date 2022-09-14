import '@fortawesome/fontawesome-free/js/all.js'

import { createApp } from 'vue'
import App from './App.vue'
// title controller
import {switchTitleInput, changeTitle} from './controllers/titleController/titleChange'
import { moveTitle, setTitle } from './controllers/titleController/titleDrag'
// add event controller
import { addCardControllerByClick, addCardControllerByEnter } from './controllers/addEventController/addCardEventController'
import { addListControllerByClick, addListControllerByEnter } from './controllers/addEventController/addListEventController'
// input box controller
import {openInputBox, closeInputBox} from './controllers/inputBoxController/inputBoxController'


createApp(App).mount('#app')


// 함수 동작방식 변경하기
const sendEvents = () => {
    window.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.path[0]); 
        console.log(e.path[0].className)

        if(e.path[0].className === 'add-input-box'){            
            openInputBox(e)
        }
    })
}

sendEvents()

// title drag events
moveTitle()
setTitle()


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
// openInputBox()
closeInputBox()

// change title event
switchTitleInput()
changeTitle()
