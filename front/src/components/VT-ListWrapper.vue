<template>
  <div class="boardLists" 
       @drop.prevent="wrapperDrop($event)"
       @dragenter.prevent
       @dragover.prevent>
    <div class="listWrapper" v-for="item in contentData" v-bind:key="item"
         @dragstart="wrapperDrag($event, item.listTitle)"
         draggable="true">
      <ListContent :ContentsItem="item" />
    </div>
  </div>
</template>

<script>
import ListContent from "./VT-ListContent"
export default {
    name: "ListWrapper",
    props: {
        boards: Array
    },
    data(){
      return{
        contentData : this.boards
      }
    },
    components: { 
      ListContent
    },
    methods:{
      wrapperDrag(event, listTitle){
        event.dataTransfer.dropEffect = "move"
        event.dataTransfer.effectAllowed = "move"
        event.dataTransfer.setData("selectedItem", listTitle.title)
        console.log("wrapper is now dragging");
      },
      wrapperDrop(event){
        console.log(event);
        const selectedItem = event.dataTransfer.getData("selectedItem")

        const xLocation = event.clientX
        console.log(xLocation);
        let dropIndex = parseInt((xLocation-20)/282)
        console.log(dropIndex)
        
        let targetIdx

        const newData = {
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
          newData.listCards.push({ cardTitle: data.cardTitle, cardDetail: data.cardDetail })
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
          this.contentData.splice(dropIndex,0,newData)
        }
      }
    }
}
</script>

<style>
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
</style>
