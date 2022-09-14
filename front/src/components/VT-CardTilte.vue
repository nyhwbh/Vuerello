<template>
  <div class="card-title">
    <div class="card-title-controller-box">
      <span class="card-title-controller-a">
        <h3 class="card-content-title">{{listTitle}}</h3>
      </span>
      <span class="card-title-controller-b-hide">
        <textarea class="list-name-change" :value="listTitle"></textarea>
      </span>
    </div>
    <span>
      <i class="fa-solid fa-ellipsis"></i>
    </span>
  </div>
</template>

<script>
export default {
    name: "VTCardTitle",
    props: {
      listTitle:String
    },
}


</script>

<style>
.card-title{
  display: flex;
  flex-direction: row;
}

.card-title-controller-box{
  flex-shrink: 0;
  width: 220px;
  margin-right: 10px;
}

.card-content-title{
  margin: 5px 3px 8px 3px;
  color: grey;
}

.fa-ellipsis{
  padding-top: 10px;
  color: gray;
  margin-right: 15px;
}

.list-name-change{
  border: 2px solid cornflowerblue;
  border-radius: 3px;
  width: 96%;
  height: 25px;
  margin: 5px 5px 0 0;
  padding: 0 5px 2px 5px;
  text-align: left;
  size: 15px;
  color: gray;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: bold;
  resize: none;
}

.card-title-controller-a-hide{
  display: none;
}

.card-title-controller-b-hide{
  display: none;
}
</style>