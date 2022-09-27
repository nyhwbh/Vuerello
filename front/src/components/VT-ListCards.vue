<template>
  <div class="listCards">
    <a class="listCardslist" 
      v-for="(list,idx) in listCards.listCards" :key="idx">{{list.cardTitle}}</a>
  </div>
</template>

<script>
export default {
    name: "ListCards",
    props: {
      listCards: {
        listTitle:Object,
        listCards:Array
      }
    },
    mathods:{
    }
}
</script>

<style>
.listCards{
  display: flex;
  flex-direction: column;
}

.listCardslist{
  display: block;
  background-color: white;
  border-radius: 3px;
  margin-bottom: 7px;
  width: 243px;
  box-shadow: 0px 2px 2px #E2E2E2;
  padding: 5px;
  min-height: 20px;
  color: grey;
  font-size: 15px;
}
</style>
