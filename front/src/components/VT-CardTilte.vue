<template>
  <div class="card-title">
    <span>
      <h3 class="card-content-title">{{list}}</h3>
    </span>
    <span>
      <i class="fa-solid fa-ellipsis"></i>
    </span>
  </div>
</template>

<script>
export default {
    name: "VTCardTitle",
    props: {
      list:String
    },
}
</script>

<style>
.card-title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card-content-title{
  margin: 5px 3px 8px 3px;
  color: grey;
}
</style>

<style scoped>
.fa-ellipsis{
  padding-top: 10px;
  color: gray;
  margin-right: 15px;
}
</style>