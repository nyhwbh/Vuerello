import {inputBoxClose} from '../inputBoxController/inputBoxController.js'

const titleClick = document.getElementsByClassName('card-title-controller-box')
const textareaValue = document.getElementsByClassName('list-name-change')

//textarea와 h3 변경
export const switchTitleInput = () => {
    for(var i=0; i<titleClick.length; i++){
        titleClick[i].addEventListener('click', (events) => {
            inputBoxClose()
            var controllerA = events.path[2].childNodes[0]
            var controllerB = events.path[2].childNodes[1]
            if (events.path.length === 10) {
                controllerA = events.path[0].childNodes[0]
                controllerB = events.path[0].childNodes[1]
            }else if (events.path.length === 11) {
                controllerA = events.path[1].childNodes[0]
                controllerB = events.path[1].childNodes[1]
            }
            titleControl(controllerA,controllerB)
        })
    }
}
 
//textarea 입력받기
export const changeTitle = () => {
    for(var i=0; i<textareaValue.length; i++){
        textareaValue[i].addEventListener('keydown', (e) => {
            if(e.keyCode === 13){
                e.preventDefault()
                console.log(e)
                var changeTitle = e.path[2].childNodes[0].childNodes[0]
                var changeTextarea = e.path[0]
                console.log(changeTitle)
                console.log(changeTitle.innerText)
                var changeValue = e.target.value
                console.log(e.target._value)
                titleClose()
                titleChange(changeTitle, changeTextarea, changeValue)
            }
        })
    }
}

// h3 -> disapper , textarea -> apper
var titleControl = function(disapper, apper){
    //열려있는 input box 끄기
    const ctrlA = document.getElementsByClassName('card-title-controller-a-hide')
    if(ctrlA.length !== 0 ){
        titleClose()
    }
    //선택한 input box 열기
        disapper.className='card-title-controller-a-hide'
        apper.className='card-title-controller-b'
    
}

// input box 종료
export const titleClose = function(){
    const ctrlA = document.getElementsByClassName('card-title-controller-a-hide')
    const ctrlB = document.getElementsByClassName('card-title-controller-b')
    if(ctrlA.length !== 0 ){
        ctrlA[0].className='card-title-controller-a'
        ctrlB[0].className='card-title-controller-b-hide'
    }
}

var titleChange =function(target_h3, target_textarea, value){
    target_h3.innerText= value
    target_textarea._value=value
}