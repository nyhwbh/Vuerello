const AddCardButtons = document.getElementsByClassName('add-card')
const AddTextareaValue = document.getElementsByClassName('add-card-in-list')

export const addCardControllerByClick = () => {
    for(var i=0; i<AddCardButtons.length; i++){
        AddCardButtons[i].addEventListener('click', (events) => {
            console.log(events)
            const valueInput = events.path[3].childNodes[0].value
            events.path[3].childNodes[0].value = null
            console.log(valueInput);
        });
    }
}

export const addCardControllerByEnter = () => {
    for(var i = 0; i<AddTextareaValue.length; i++){
        console.log(AddTextareaValue[i])
        AddTextareaValue[i].addEventListener('keydown',(e)=> {
            if(e.keyCode === 13){
                console.log(e)
                e.preventDefault()
                const valueInput = e.target.value
                console.log(valueInput)
                const addTarget = e.path[3].childNodes[1]
                var newCard = document.createElement("a")
                newCard.appendChild(valueInput)




            }
        })
    }

}