<template>
  <div class="board">
    <ListWrapper :boards="board.boardLists"/>
    <div class="addListWrapper">
        <AddListController v-on:addNewListCard="addAnotherList"></AddListController>
    </div>
  </div>
</template>

<script>
import AddListController from "./components/VT-AddListController.vue";
import ListWrapper from "./components/VT-ListWrapper.vue";

import todoData from "./data/todoData.json";

export default {
  name: 'App',
  components: {
    ListWrapper,
    AddListController
  },
  data() {
    return{
      board:todoData[0]
    }
  },
  methods:{
    addAnotherList(newList){
      const newData = {
        "listTitle": { "title": newList, "titleControl": true, "addCardControl": true },
        "listCards": []
      }
      this.board.boardLists.push(newData)
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
