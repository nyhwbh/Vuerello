const AddCardButtons = document.getElementsByClassName('add-card')

export const addCardController = () => {
    for(var iclb=0; iclb<AddCardButtons.length; iclb++){
        AddCardButtons[iclb].addEventListener('click', (events) => {
            console.log(events)
            const valueInput = events.path[3].childNodes[0].value
            events.path[3].childNodes[0].value = null
            console.log(valueInput);
        });
    }
}