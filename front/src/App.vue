<template>
  <div class="board">
    <VTCardWrapper :items="board"/>
    <VTAddListController />
  </div>
</template>

<script>
import VTCardWrapper from "./components/VT-CardWrapper.vue"
import VTAddListController from "./components/VT-AddListController.vue";

export default {
  name: 'App',
  components: {
    VTCardWrapper,
    VTAddListController
  },
  data() {
    return{
      board:[
        {
        title:"To do",
        lists:["Vue-Go app 생성","블록체인 공부하기","프로젝트 계획서 쓰기","점심 먹기","저녁 약속"]
      },
      {
        title:"Doing",
        lists:["Vue-Go app 프론트 코딩","프론트 익히기"]
      },
      {
        title:"Done",
        lists:["청소하기","아침먹기","Git 등록하기"]
      }
    ]
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
}
</style>
