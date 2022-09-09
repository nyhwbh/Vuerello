<template>
  <div class="board">
    <VTCardWrapper :items="board"/>
  </div>
</template>

<script>
import VTCardWrapper from "./components/VT-CardWrapper.vue"

export default {
  name: 'App',
  components: {
    VTCardWrapper,
  },
  data() {
    return{
      board:[
        {
        title:"To do",
        lists:["Vue-Go app생성","블록체인 공부하기","프로젝트 계획서 쓰기","점심먹기","저녁먹기"]
      },
      {
        title:"Doing",
        lists:["Vue-Go app 코딩","프론트 익히기"]
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
  display: flex;
  flex-direction: row;
}
</style>
