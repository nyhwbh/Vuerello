// title controller
import {switchTitleInput, changeTitle} from './titleController/titleChange'
import { moveTitle, setTitle } from './titleController/titleDrag'
// add event controller
import { addCardControllerByClick, addCardControllerByEnter } from './addEventController/addCardEventController'
import { addListControllerByClick, addListControllerByEnter } from './addEventController/addListEventController'
// input box controller
import {openInputBox, closeInputBox} from './inputBoxController/inputBoxController'


// 함수 동작방식 변경하기
export const sendEvents = () => {
    window.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.path[0]); 
        console.log(e.path[0].className)
        
        // Add a card  click event
        if(e.path[0].className === 'add-input-box'){            
            openInputBox(e)
        }

        // List title  click event
        if(e.path[0].className === 'card-content-title'){            
            switchTitleInput(e)
        }

    })
}

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
changeTitle()
