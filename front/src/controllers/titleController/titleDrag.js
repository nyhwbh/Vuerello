const titleDrags = document.getElementsByClassName('card-content-title');

export const dragTitle = () => {

    for(var it=0; it<titleDrags.length; it++){
        var titleDrag = titleDrags[it];
        
        titleDrag.addEventListener('mousedown', () => {
            console.log(it)
            console.log("mouse down now");
        },false);
    }
}