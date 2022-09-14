const AddCardButtons = document.getElementsByClassName('add-card')
const AddTextareaValue = document.getElementsByClassName('add-card-in-list')


// 카드 추가 이벤트
// 클릭방식
export const addCardControllerByClick = () => {
    for(var i=0; i<AddCardButtons.length; i++){
        AddCardButtons[i].addEventListener('click', (e) => {
            // 입력한 내용 가져오기
            const valueInput = e.path[3].childNodes[0].value
         
            // null 값 입력 막기
            if( valueInput !== "" ){

                // 내용을 추가할 타겟지정
                const addTarget = e.path[5].childNodes[1]
                
                // 내용 추가
                var newCard = document.createElement('a')               // a테그 생성
                newCard.setAttribute('class','card-content-list')       // class 이름 지정
                newCard.innerHTML= valueInput                           // a테그 안에 입력한 내용 삽입
                addTarget.appendChild(newCard)                          // 지정한 타깃에 테그 삽입
                e.path[3].childNodes[0].value=null                      // 다시 값을 받을 수 있도록 내용 삭제
            }
        });
    }
}

// 엔터방식
export const addCardControllerByEnter = () => {
    for(var i = 0; i<AddTextareaValue.length; i++){
        AddTextareaValue[i].addEventListener('keydown',(e)=> {
            if(e.keyCode === 13){
                // enter 키 입력 막기
                e.preventDefault()  

                // 입력한 내용 가져오기
                const valueInput = e.target.value

                // null 값이면 입력막기
                if( valueInput !== "" ){

                    // 내용을 추가할 타겟지정
                    const addTarget = e.path[3].childNodes[1]
                    
                    // 내용 추가
                    var newCard = document.createElement('a')               // a테그 생성
                    newCard.setAttribute('class','card-content-list')       // class 이름 지정
                    newCard.innerHTML= valueInput                           // a테그 안에 입력한 내용 삽입
                    addTarget.appendChild(newCard)                          // 지정한 타깃에 테그 삽입
                    e.target.value=null                                     // 다시 값을 받을 수 있도록 내용 삭제
                }
            }
        })
    }
}
