<template>
  <div class="boardLists">
    <div class="listWrapper" v-for="item in boards" v-bind:key="item">
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
    components: { 
      ListContent
    },
    methods:{
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
