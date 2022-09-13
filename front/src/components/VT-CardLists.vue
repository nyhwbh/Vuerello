<template>
  <div class="card-lists">
    <a class="card-content-list" v-for="(list,idx) in cardsList" :key="idx">{{list.cardTitle}}</a>
  </div>
</template>

<script>
export default {
    name: "VTCardLists",
    props: {
      cardsList: Array
    },
}
</script>

<style>
.card-lists{
  display: flex;
  flex-direction: column;
}

.card-content-list{
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
