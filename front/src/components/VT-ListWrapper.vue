<template>
  <div class="listWrapper" v-for="(items,idx) in boards" v-bind:key="idx">
    <div class="listContent">
      <ListTitle :listTitle="items.listTitle"/>
      <ListCards :listCards="items.listCards"/>
      <AddCardController :addController="items.listTitle.addCardControl"/>
    </div>
  </div>
</template>

<script>
import ListTitle from './VT-ListTitle.vue';
import ListCards from './VT-ListCards.vue';
import AddCardController from './VT-AddCardController.vue';
export default {
    name: "ListWrapper",
    props: {
        boards: Array
    },
    components: { 
      ListTitle, 
      ListCards, 
      AddCardController 
    },
    methods:{
    }
}
</script>

<style>
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
