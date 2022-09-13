<template>
  <div class="board">
    <VTCardWrapper :boards="board[0].boardLists"/>
    <VTAddListController />
  </div>
</template>

<script>
import VTCardWrapper from "./components/VT-CardWrapper.vue"
import VTAddListController from "./components/VT-AddListController.vue";
import todoData from "../../back/data/todoData.json"

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
  height: 96vh;
}
</style>
