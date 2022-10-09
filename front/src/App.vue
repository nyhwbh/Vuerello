<template>
  <div id="app">
    <div class="board">
      <ListWrapper></ListWrapper>
      <div class="addListWrapper">
          <AddListController></AddListController>
      </div>
    </div>
  </div>
</template>

<script>
import AddListController from "./components/VT-AddListController.vue";
import ListWrapper from "./components/VT-ListWrapper.vue";

export default {
  name: 'App',
  components: {
    ListWrapper,
    AddListController
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
