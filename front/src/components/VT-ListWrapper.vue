<template>
  <div class="boardLists" 
       @drop.prevent="wrapperDrop($event)"
       @dragenter.prevent
       @dragover.prevent>
    <div class="listWrapper" v-for="item in contentData" v-bind:key="item"
         @dragstart="wrapperDrag($event, item.listTitle)"
         draggable="true">
      <ListContent :ContentsItem="item"/>
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
        const selectedItem = event.dataTransfer.getData("selectedItem")
        console.log(selectedItem);
        console.log(this.contentData);

        let targetIdx

        const newData = {
          "listTitle": { "title": selectedItem, "titleControl": true, "addCardControl": true },
          "listCards": []
        }
        // let targetItem
        this.contentData.forEach((obj, index) => {
          if (obj.listTitle.title === selectedItem) {
              targetIdx = index
              // targetItem = ob
            }
        })

        this.contentData[targetIdx].listCards.forEach((data) => {
          newData.listCards.push({ cardTitle: data.cardTitle, cardDetail: data.cardDetail })
        })

        // 중간 삽입시 splice 이용방법 확인하기
        this.contentData.push(newData)
        this.contentData.splice(targetIdx, 1)
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
