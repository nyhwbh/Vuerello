import { makeTemplate } from './addListTemplet'
import { setNewListTitle } from '../titleController/titleChange'


// 리스트 추가 이벤트
// 클릭 방식
export const addListControllerByClick = (e) => {

    //입력한 내용 가져오기
    const valueInput = e.path[2].childNodes[0].value

    // null 입력 막기
    if( valueInput !== "" ){
        //내용을 추가할 타겟지정
        const addTarget = e.path[5].childNodes[0]
        
        const makeChild = makeTemplate(valueInput)
        
        addTarget.appendChild(makeChild)
        
        // 새로운 값을 받을 수 있도록 내용 삭제
        e.path[2].childNodes[0].value=null
    }
}

// 엔터 방식
export const addListControllerByEnter = (e) => {
    console.log(e)
    // 엔터 입력 막기
    e.preventDefault()

    // 입력한 내용 가져오기
    const valueInput = e.target.value   

    // null 입력 막기
    if( valueInput !== "" ){
        //내용을 추가할 타겟지정
        const addTarget = e.path[4].childNodes[0]
        
        const makeChild = makeTemplate(valueInput)
        
        addTarget.appendChild(makeChild)
        
        // 
        console.log("here")
        var count = 6
        setNewListTitle( e, count )
        console.log(count)
        // 새로운 값을 받을 수 있도록 내용 삭제
        e.target.value=null                                     
    }    
}