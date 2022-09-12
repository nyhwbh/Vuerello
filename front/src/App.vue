<template>
  <div class="board">
    <VTCardWrapper :items="board"/>
    <VTAddListController />
  </div>
</template>

<script>
import VTCardWrapper from "./components/VT-CardWrapper.vue"
import VTAddListController from "./components/VT-AddListController.vue";
import todoData from "../../back/data/todoData.json"

export default {
  name: 'App',
  components: {
    VTCardWrapper,
    VTAddListController
  },
  data() {
    return{
      board: todoData
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
