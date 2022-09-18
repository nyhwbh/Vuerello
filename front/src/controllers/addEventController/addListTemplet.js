export const makeTemplate = (value) => {
    // 내용 추가
    // wrapper 생성
    var newWrapper = document.createElement('div')
    newWrapper.setAttribute('class', 'card-wrapper')

    // Content 추가
    var newContent = document.createElement('div')
    newContent.setAttribute('class','card-contents')
    
    
    // Title추가
    // Card Title
    var newCardTitle = document.createElement('div')
    newCardTitle.setAttribute('class','card-title')

    // title control box
    var newTitleControllerBox = document.createElement('div')
    newTitleControllerBox.setAttribute('class','card-title-controller-box')
    // title control boxA
    var newTitleControllerA = document.createElement('span')
    newTitleControllerA.setAttribute('class','card-title-controller-a')
    var newCardContentTitle = document.createElement('h3')
    newCardContentTitle.setAttribute('class','card-content-title')
    newCardContentTitle.innerHTML = value
    newTitleControllerA.appendChild(newCardContentTitle)
    // title control boxB
    var newTitleControllerB = document.createElement('span')
    newTitleControllerB.setAttribute('class','card-title-controller-b-hide')
    var newListNameChange = document.createElement('textarea')
    newListNameChange.setAttribute('class','list-name-change')
    newListNameChange.innerHTML = value
    newTitleControllerB.appendChild(newListNameChange)
    // title control boxA + title control boxB
    newTitleControllerBox.append(newTitleControllerA,newTitleControllerB)
    
    // title ellipsis
    var newEllipsis = document.createElement('span')
    var newEllipsisIcon = document.createElement('i')
    newEllipsisIcon.setAttribute('class','fa-solid fa-ellipsis')
    newEllipsis.appendChild(newEllipsisIcon)
    // title control box + title ellipsis
    newCardTitle.append(newTitleControllerBox,newEllipsis)


    // Card List 추가
    var newCardList = document.createElement('div')
    newCardList.setAttribute('class','card-lists')

    
    // Add Card Button 추가
    // Add Card
    var newAddACardController = document.createElement('div')
    newAddACardController.setAttribute('class','add-a-card-controller')
    // Add Card Controller A
    var newAddACardControllerA = document.createElement('div')
    newAddACardControllerA.setAttribute('class','add-a-card-controller-a')
    var newAddInputBox = document.createElement('a')
    newAddInputBox.setAttribute('class','add-input-box')
    newAddInputBox.innerHTML="+ Add a Card"
    newAddACardControllerA.appendChild(newAddInputBox)
    // Add Card Controller B
    var newAddACardControllerB = document.createElement('div')
    newAddACardControllerB.setAttribute('class','add-a-card-controller-b-hide')
    var newAddCardInList = document.createElement('textarea')
    newAddCardInList.setAttribute('class','add-card-in-list')
    newAddCardInList.setAttribute('placeholder','Enter a title for this card...')
    var newAddACardButtonBox = document.createElement('div')
    newAddACardButtonBox.setAttribute('class','add-a-card-buttonbox')            
    var newAddCardButton = document.createElement('div')
    newAddCardButton.setAttribute('class','card-add-button')
    var newAddCard = document.createElement('input')
    newAddCard.setAttribute('class','add-card')
    newAddCard.setAttribute('type','button')
    newAddCard.setAttribute('value','Add card')
    var newCloseAddCard = document.createElement('span')
    newCloseAddCard.setAttribute('class','close-add-card')
    var newXMark = document.createElement('i')
    newXMark.setAttribute('class','fa-solid fa-xmark close-add-card')
    newCloseAddCard.appendChild(newXMark)
    // Add-card input + close add card button
    newAddCardButton.append(newAddCard,newCloseAddCard)
    
    var newCardOptions = document.createElement('span')
    newCardOptions.setAttribute('class','card-options')
    var newInputEllipsis = document.createElement('i')
    newInputEllipsis.setAttribute('class','fa-solid fa-ellipsis')
    newCardOptions.appendChild(newInputEllipsis)
    
    newAddACardButtonBox.append(newAddCardButton,newCardOptions)

    // make add-a-card-controller-b
    newAddACardControllerB.append(newAddCardInList,newAddACardButtonBox)
    
    //make Add Card Box
    newAddACardController.append(newAddACardControllerA,newAddACardControllerB)


    // Content에 내용 넣기
    newContent.append(newCardTitle,newCardList,newAddACardController)

    // wrapper에 내용 넣기
    newWrapper.appendChild(newContent)
    
    // 완성된 wrapper 반환
    return newWrapper
}