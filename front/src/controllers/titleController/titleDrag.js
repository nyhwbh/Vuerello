
export const moveTitle = () => {
    const titleDrags = document.getElementsByClassName('card-content-title');

    for(var i=0; i<titleDrags.length; i++){
        titleDrags[i].addEventListener('mousedown', () => {
            console.log("mouse down now");
        })
    }
}

export const setTitle = () => {
    const titleDrags = document.getElementsByClassName('card-content-title');

    for(var i=0; i<titleDrags.length; i++){
        titleDrags[i].addEventListener('mouseup', () => {
            console.log("mouse up now")
        })
    }
}