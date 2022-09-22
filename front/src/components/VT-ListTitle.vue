<template>
  <div class="listTitle">
    <div class="listTitleControllerBox">
      <span class="listTitleControllerA">
        <h3 class="listContentTitle">{{listTitle}}</h3>
      </span>
      <span class="listTitleControllerBHide">
        <textarea class="listTitleChange" :value="listTitle"></textarea>
      </span>
    </div>
    <span>
      <i class="fa-solid fa-ellipsis"></i>
    </span>
  </div>
</template>

<script>
export default {
    name: "ListTitle",
    props: {
      listTitle:String
    },
}
</script>

<style>
.listTitle{
  display: flex;
  flex-direction: row;
}

.listTitleControllerBox{
  flex-shrink: 0;
  width: 220px;
  margin-right: 10px;
}

.listContentTitle{
  margin: 8px 3px 8px 5px;
  color: grey;
}

.fa-ellipsis{
  padding-top: 10px;
  color: gray;
  margin-right: 15px;
  font-size: 20px;
}

.listTitleChange{
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

.listTitleControllerAHide{
  display: none;
}

.listTitleControllerBHide{
  display: none;
}
</style>