<template>
  <div class="board">
    <div class="board-lists">
      <VTCardWrapper :boards="board[0].boardLists"/>
    </div>
    <div class="add-list-wrapper">
        <VTAddListController />
    </div>
  </div>
</template>

<script>
import VTCardWrapper from "./components/VT-CardWrapper.vue"
import VTAddListController from "./components/VT-AddListController.vue";
import todoData from "./data/todoData.json"

const board = todoData

export default {
  name: 'App',
  components: {
    VTCardWrapper,
    VTAddListController
  },
  data() {
    return{
      board
    }
  }
}
</script>

<style>

.board{
  background-color: burlywood;
  display: flex;
  flex-direction: row;
  padding:10px;
  overflow-x:auto ;
  height: 97vh;
}

.board-lists{
  display: flex;
  flex-direction: row;
}

.add-list-wrapper{
  flex-shrink: 0;
  width: 272px;
}

a{
  cursor: pointer;
}
</style>
