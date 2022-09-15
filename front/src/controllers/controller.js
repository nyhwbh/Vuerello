// title controller
import { switchTitleInput, changeTitle } from './titleController/titleChange'
import { moveTitle, setTitle } from './titleController/titleDrag'
// add event controller
import { addCardControllerByClick, 
         addCardControllerByEnter } from './addEventController/addCardEventController'
import { addListControllerByClick, 
         addListControllerByEnter } from './addEventController/addListEventController'
// input box controller
import { openInputBox,
         closeInputBox, 
         openListInputBox, 
         inputListBoxClose } from './inputBoxController/inputBoxController'


// 함수 동작방식 변경하기
export const sendEventsClick = () => {
    window.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.path[0]); 
        console.log(e.path[0].className)
        
        // Add a card  click event
        if(e.path[0].className === 'add-input-box'){            
            openInputBox(e)
        }

        // Add another list event
        if(e.path[0].className === 'add-list-input-box'){
            openListInputBox()
        }

        // List title click event
        if(e.path[0].className === 'card-content-title'){            
            switchTitleInput(e)
        }
        
        // Add a Card box close event
        if(e.path[1].className === 'close-add-card' ||
        e.path[2].className === 'close-add-card'){
            closeInputBox(e)
        }

        // Add a Card box close event
        if(e.path[1].className === 'close-add-list-card' ||
        e.path[2].className === 'close-add-list-card'){
            inputListBoxClose()
        }
        
        // Add Card Button click event
        if(e.path[0].className === 'add-card'){
            addCardControllerByClick(e)
        }

        // Add List Button click event
        if(e.path[0].className === 'add-list-button'){
            addListControllerByClick(e)
        }

    })
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
    
    
    
    // openInputBox()
    
}

export const sendEventsEnter = () => [
    window.addEventListener('keydown',(event)=>{
        if(event.keyCode === 13){
            console.log(event)
            console.log(event.path[0].className)
            console.log("Enter is pressed")

            
            // change title event
            if(event.path[0].className === 'list-name-change'){
                changeTitle(event)
            }

            // add card button events
            if(event.path[0].className === 'add-card-in-list'){
                addCardControllerByEnter(event)
            }
            // add list enter events
            if(event.path[0].className === 'add-list-value'){
                addListControllerByEnter(event)
            }
        }
    })
]



