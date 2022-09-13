import {titleClose} from "../titleController/titleChange.js"

// Add a card, Add another list 클릭시 input box 생성 및 다른 input box 종료
const AddButtons = document.getElementsByClassName('add-a-card-controller-a')
const closeButtons = document.getElementsByClassName('close-add-card')


// input 박스 켜기
export const openInputBox = () => {
    for(var i=0; i<AddButtons.length; i++ ){
        AddButtons[i].addEventListener('click',(events) => {
            titleClose()
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
}

// 켜진 input box 종료하기
export const closeInputBox = () => {
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

export const inputBoxClose = function(){
    const addAppers=document.getElementsByClassName('add-a-card-controller-a-hidden')
    const InputDisapper = document.getElementsByClassName('add-a-card-controller-b')
    if(addAppers.length !== 0){
        addAppers[0].className='add-a-card-controller-a'
        InputDisapper[0].className='add-a-card-controller-b-hidden'
    }
}