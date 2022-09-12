const titleClick = document.getElementsByClassName('card-title-controller-box')
const textareaValue = document.getElementsByClassName('list-name-change')

//textarea와 h3 변경
export const switchTitleInput = () => {
    for(var i=0; i<titleClick.length; i++){
        titleClick[i].addEventListener('click', (events) => {
            console.log("clicked")
            console.log(events)
            var controllerA = events.path[1]
            var controllerB = events.path[2].childNodes[1]

            titleControl(controllerA,controllerB)
        })
    }
}
 
//textarea 입력받기
export const changeTitle = () => {
    for(var i=0; i<textareaValue.length; i++){
        console.log(textareaValue[1])
        textareaValue[1].addEventListener('keyup', (e) => {
            if(e.keyCode === 13){
                console.log("Enter pressed")
                console.log(e)
            }
        })
    }
}

// h3 -> disapper , textarea -> apper
var titleControl = function(disapper, apper){
    disapper.className='card-title-controller-a-hide'
    apper.className='card-title-controller-b'
}
