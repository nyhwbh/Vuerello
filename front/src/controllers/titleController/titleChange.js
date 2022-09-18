import {inputBoxClose} from '../inputBoxController/inputBoxController.js'


//textarea와 h3 변경
export const switchTitleInput = (e) => {
    //열려있는 inputbox 닫기
    inputBoxClose()
    titleClose()
    
    const targetClass = document.getElementsByClassName('card-content-title')
    const controllerA = document.getElementsByClassName('card-title-controller-a')
    const controllerB = document.getElementsByClassName('card-title-controller-b-hide')
    for(var i=0; i<targetClass.length; i++){
        if(e.path[0] === targetClass[i]){
            var targetIndex = i
            break
        }
    }
    titleControl(controllerA[targetIndex],controllerB[targetIndex])
    
}


//textarea 입력받기
export const changeTitle = (e) => {
    // 엔터 입력 막기
    e.preventDefault()

    // 타겟 지정
    var changeTitle = e.path[2].childNodes[0].childNodes[0]
    var changeTextarea = e.path[0]

    // 값 가져오기
    var changeValue = e.target.value

    // 제목 입력창 닫기
    titleClose()

    // 제목 바꿔주기
    titleChange(changeTitle, changeTextarea, changeValue)
}

// h3 -> disapper , textarea -> apper
var titleControl = function(disapper, apper){
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

var titleChange = function(target_h3, target_textarea, value){
    target_h3.innerText= value
    target_textarea._value=value
}
