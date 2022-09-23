<template>
  <div class="board">
    <div class="boardLists">
      <ListWrapper :boards="board[0].boardLists"/>
    </div>
    <div class="addListWrapper">
        <AddListController />
    </div>
  </div>
</template>

<script>
import ListWrapper from "./components/VT-ListWrapper.vue";
import AddListController from "./components/VT-AddListController.vue";

import todoData from "./data/todoData.json";

const board = todoData

export default {
  name: 'App',
  components: {
    ListWrapper,
    AddListController
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

.boardLists{
  display: flex;
  flex-direction: row;
}

.addListWrapper{
  flex-shrink: 0;
  width: 272px;
}

a{
  cursor: pointer;
}

textarea:focus{
  outline: none;
}
</style>
