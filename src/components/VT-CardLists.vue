<template>
  <div class="card-lists">
    <a class="card-content-list" v-for="(list,idx) in items" :key="idx">{{list}}</a>
  </div>
</template>

<script>
export default {
    name: "VTCardLists",
    props: {
      items: Array
    },
}
</script>

<style>
 .card-lists{
  display: flex;
  flex-direction: column;
 }
</style>
