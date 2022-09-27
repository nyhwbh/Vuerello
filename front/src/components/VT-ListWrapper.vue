<template>
  <div class="boardLists" 
       @drop.prevent="wrapperDrop($event)"
       @dragenter.prevent
       @dragover.prevent>
    <div class="listWrapper"
        v-for="item in boards" v-bind:key="item"
        @drop.prevent="cardDrop($event)"
        @dragenter.prevent
        @dragover.prevent
        >
      <div class="listContent">
         <div class="listTitle"
         @dragstart="wrapperDrag($event, item.listTitle)"
         draggable="true">
          <div class="listTitleControllerBox">
            <span class="listTitleControllerA" v-show="item.listTitle.titleControl" @click="titleChangeOpen(item)">
              <h3 class="listContentTitle" >{{item.listTitle.title}}</h3>
            </span>
            <span class="listTitleControllerB" v-show="!item.listTitle.titleControl">
              <textarea class="listTitleChange" ref="focusValue" v-model="item.listTitle.title"
              v-on:keydown.enter.prevent="titleChangeClose(item)"></textarea>
            </span>
          </div>
          <span>
            <i class="fa-solid fa-ellipsis"></i>
          </span>
        </div>
        <div class="listCards">
          <a class="listCardslist"
            v-for="(list,idx) in item.listCards" :key="idx"
            @dragstart="cardDrag($event, list)"
            draggable="true">
         {{list.cardTitle}}</a>
        </div>
        <div class="addACardController">
          <div class="addACardControllerA" v-show="item.listTitle.addCardControl" @click="addCardBoxOpen(item)">
            <a class="addACardButton">+ Add a card</a>
          </div>
          <div class="addACardControllerB" v-show="!item.listTitle.addCardControl" >
            <textarea  class="addCardInCardsList" placeholder="Enter a title for this card..."
            v-on:keydown.enter.prevent="addCardOnList(item.listTitle.title)" 
            v-model="newCardValue"></textarea>  
            <div class="addACardButtonBox">
              <div class="addCardButton">
                <input class="addCard" type="button" value="Add card"
                @click="addCardOnList(item.listTitle.title)">
                <span class="closeAddCard" @click="addCardBoxClose(item)">
                  <i class="fa-solid fa-xmark"></i>
                </span>
              </div>
              <span class="addCardOptions">
                <i class="fa-solid fa-ellipsis"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ListWrapper",
    props: {
        boards: Array
    },
    data(){
      return{
        contentData : this.boards,
        titleValue:"",
        newCardValue:"",
      }
    },
    components: {
    },
    methods:{
      // Title functions
      wrapperDrag(event, listTitle){
        event.dataTransfer.dropEffect = "move"
        event.dataTransfer.effectAllowed = "move"
        event.dataTransfer.setData("selectedItem", listTitle.title)
      },
      wrapperDrop(event){
        const selectedItem = event.dataTransfer.getData("selectedItem")

        const xLocation = event.clientX
        let dropIndex = parseInt((xLocation-20)/282)
        
        let targetIdx

        const moveData = {
          "listTitle": { "title": selectedItem, "titleControl": true, "addCardControl": true },
          "listCards": []
        }

        // 옮기는 데이터의 위치 찾기
        this.contentData.forEach((obj, index) => {
          if (obj.listTitle.title === selectedItem) {
              targetIdx = index
            }
        })

        // 옮기는 데이터의 카드 데이터 복사
        this.contentData[targetIdx].listCards.forEach((data) => {
          moveData.listCards.push({ cardTitle: data.cardTitle, cardDetail: data.cardDetail })
        })

        // 선택한 카드와 옮기는 위치에 따른 데이터 조정
        // splice(시작하는 위치, 삭제하는 양, 삽입할 데이터)
        if(dropIndex === targetIdx){
          console.log("moved location was same as start location");
        } else {
          this.contentData.splice(targetIdx,1)
          if(dropIndex > this.contentData.length){
            dropIndex = this.contentData.length
          }
          this.contentData.splice(dropIndex,0,moveData)
        }
      },
      titleChangeOpen(item){
        item.listTitle.titleControl=!item.listTitle.titleControl;
      },
      titleChangeClose(item){
        item.listTitle.titleControl= true;
      },

      // Card list Function
      cardDrag(event, listCards){
        event.dataTransfer.dropEffect = "move"
        event.dataTransfer.effectAllowed = "move"
        event.dataTransfer.setData("selectedItem", listCards.cardTitle)
      },
      cardDrop(event){
        const selectedItem = event.dataTransfer.getData("selectedItem")
        
        // 데이터를 옮기는 지점의 좌표 찾기
        const xLocation = event.clientX
        const yLocation = event.clientY
        let dropIndexX = parseInt((xLocation-20)/282)
        let dropIndexY = parseInt((yLocation-46)/38)

        let targetIdx
        let targetIndex
        const moveCard = {"cardTitle" : selectedItem ,"cardDetail" : ""}
        // 옮기는 데이터의 시작 위치 찾기
        this.contentData.forEach((obj, idx) => {
          obj.listCards.forEach((ob,index)=>{
            if(ob.cardTitle === selectedItem){
              targetIdx = idx
              targetIndex = index
            }
          })
        })
        console.log("targetIdx " + targetIdx);
        console.log("targetIndex " + targetIndex);

        // 선택한 카드와 옮기는 위치에 따른 데이터 조정
        // splice(시작하는 위치, 삭제하는 양, 삽입할 데이터)
        if(dropIndexX === targetIdx){
          if(dropIndexY == targetIndex){
            console.log("moved location was same as start location");
          }else{
            // 드래그한 데이터 지우기
            this.contentData[targetIdx].listCards.splice(targetIndex,1)
            // 드롭한 위치에 데이터 넣기
            this.contentData[dropIndexX].listCards.splice(dropIndexY,0,moveCard)
          }
        } else {
          // 드래그한 데이터 지우기
          this.contentData[targetIdx].listCards.splice(targetIndex,1)
          if(dropIndexX > this.contentData.length){
            dropIndexX = this.contentData.length
          }
          if(dropIndexY > this.contentData[dropIndexX].listCards.length) {
            dropIndexY = this.contentData[dropIndexX].listCards.length
          }
          this.contentData[dropIndexX].listCards.splice(dropIndexY,0,moveCard)
        }
      },

      // Add Card controller functions
      addCardBoxOpen(item){
        item.listTitle.addCardControl=!item.listTitle.addCardControl
      },
      addCardBoxClose(item){
        item.listTitle.addCardControl = true;
      },
      addCardOnList(item){
        let targetIdx;
        this.boards.forEach((obj, index) => {
          if (obj.listTitle.title === item) {
              targetIdx = index
            }
        })
        if(this.listValue !== ""){
          this.$emit('addNewCard', targetIdx, this.newCardValue);
          this.newCardValue=""
        }
      }
    }
}
</script>

<style>
/* Wrapper Style Sheet */
.boardLists{
  display: flex;
  flex-direction: row;
}

.listWrapper{
  flex-shrink: 0;
  width: 272px;
  max-height: max-content;
  margin-right: 10px;
}

.listContent{
  display: flex;
  flex-direction: column;
  background-color: #ebecf0;
  border-radius: 5px;
  padding-left: 10px;
  padding-bottom: 10px;
}

/* Title Style Sheet */
.listTitle{
  display: flex;
  flex-direction: row;
}

.listTitleControllerBox{
  flex-shrink: 0;
  width: 220px;
  margin-right: 10px;
}

.listContentTitle{
  margin: 8px 3px 8px 5px;
  color: grey;
}

.fa-ellipsis{
  padding-top: 10px;
  color: gray;
  margin-right: 15px;
  font-size: 20px;
}

.listTitleChange{
  border: 2px solid cornflowerblue;
  border-radius: 3px;
  width: 96%;
  height: 25px;
  margin: 5px 5px 0 0;
  padding: 0 5px 2px 5px;
  text-align: left;
  size: 15px;
  color: gray;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: bold;
  resize: none;
}

/* Card Style Sheet */
.listCards{
  display: flex;
  flex-direction: column;
}

.listCardslist{
  display: block;
  background-color: white;
  border-radius: 3px;
  margin-bottom: 7px;
  width: 243px;
  box-shadow: 0px 2px 2px #E2E2E2;
  padding: 5px;
  min-height: 20px;
  color: grey;
  font-size: 15px;
}

/* Add Card Style Sheet */
.addACardController{
  display: flex;
  flex-direction: column;
}

.addACardControllerA{
  display: flex;
  flex-direction: space-between; 
  max-height: 38px;
  min-height: 38px;
}


.addACardButton{
  background-color: #ebecf0;
  border-radius: 3px;
  display: block;
  color: #5e6c84;
  flex: 1 0 auto;
  margin-top: 2px;
  padding: 7px 8px 4px 0;
  position: relative;
  max-height: 27px;
  font-size: 15px;
}

.addACardControllerB{
  display: block;
  flex-shrink: 0;
}

.addCardInCardsList{
  border: 0 solid black;
  border-radius: 3px;
  width: 242px;
  min-height: 70px;
  box-shadow: 0px 2px 2px #ebecf0;
  margin-bottom: 3px;
  padding-left: 7px;
  color: gray;
  font-weight: 100;
  font-size: 15px;
  font-family: sans-serif;
  resize: none;
}

.addACardButtonBox{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.addCardButton{
  display: flex;
  flex-direction: row;
  max-height: 35px;

}

.addCard{
  border: 0 solid black;
  border-radius: 3px;
  background-color: cornflowerblue;
  box-shadow: 0px 2px 2px #ebecf0;
  color: white;
  flex-shrink: 0;
  width: 70px;
  height: 35px;
}

.closeAddCard{
  margin-left: 10px;
  margin-top: 8px;
}

.fa-xmark{
  color: grey;
  font-size: 20px;
}

.addCardOptions{
  margin-right: 10px;
}

</style>
<style scoped>
  .fa-ellipsis{
    color: gray;
    font-size: 20px;
    padding-top: 8px;
    margin-right: 5px;
  }
</style>
