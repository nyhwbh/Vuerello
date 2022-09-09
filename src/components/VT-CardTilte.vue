<template>
  <div class="card-title">
    <h3 class="card-content-title">{{title}}</h3>
  </div>
</template>

<script>
export default {
    name: "VTCardTitle",
    props: {
      title:String
    },
}
</script>

<style>
.card-content-title{
  margin: 5px 3px 8px 3px;
  color: grey;
}
</style>
