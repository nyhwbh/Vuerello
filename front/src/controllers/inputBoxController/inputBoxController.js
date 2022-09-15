import {titleClose} from "../titleController/titleChange.js"


// input 박스 켜기
export const openInputBox = (e) => {
    //켜져있는 다른 input box 끄기
    inputBoxClose()
    titleClose()

    //타깃 지정 및 이벤트 받기
    const AddButtons = document.getElementsByClassName('add-input-box')
    const controllerA = document.getElementsByClassName('add-a-card-controller-a')
    const controllerB = document.getElementsByClassName('add-a-card-controller-b-hide')
    
    // 클릭된 위치 찾기
    for(var i=0; i<AddButtons.length; i++){
        console.log(AddButtons[i])
        if( e.path[0] === AddButtons[i]){
            var check = i
            break
        }
    }
    
    // input box 열기
    inputBoxOpen(controllerA[check],controllerB[check])
}

// 켜진 input box 종료하기
export const closeInputBox = () => {
    const closeButtons = document.getElementsByClassName('close-add-card')
    for(var i=0; i<closeButtons.length; i++){   
        closeButtons[i].addEventListener('click', () => { 
        const addAppers=document.getElementsByClassName('add-a-card-controller-a-hide')
        const InputDisapper = document.getElementsByClassName('add-a-card-controller-b')
        if(addAppers.length !== 0){
            addAppers[0].className='add-a-card-controller-a'
            InputDisapper[0].className='add-a-card-controller-b-hide'
        }
        })
    }
}
    
const inputBoxOpen = function(AddDisapper,InputAppers){
    // Add a card click 입력받기
    AddDisapper.className='add-a-card-controller-a-hide'
    InputAppers.className='add-a-card-controller-b'
}

export const inputBoxClose = function(){
    const addAppers=document.getElementsByClassName('add-a-card-controller-a-hide')
    const InputDisapper = document.getElementsByClassName('add-a-card-controller-b')
    if(addAppers.length !== 0){
        addAppers[0].className='add-a-card-controller-a'
        InputDisapper[0].className='add-a-card-controller-b-hide'
    }
}


export const inputListBoxClose = function(){
    const addAppers=document.getElementsByClassName('add-another-list-controller-a-hide')
    const InputDisapper = document.getElementsByClassName('add-another-list-controller-b')
    if(addAppers.length !== 0){
        addAppers[0].className='add-another-list-controller-a'
        InputDisapper[0].className='add-another-list-controller-b-hide'
    }
}

// Open 
export const openListInputBox = () => {
    //켜져있는 다른 input box 끄기
    inputBoxClose()
    titleClose()

    //타깃 지정 및 이벤트 받기
    const controllerA = document.getElementsByClassName('add-another-list-controller-a')
    const controllerB = document.getElementsByClassName('add-another-list-controller-b-hide')
    
    // input box 열기
    controllerA[0].className='add-another-list-controller-a-hide'
    controllerB[0].className='add-another-list-controller-b'
}
