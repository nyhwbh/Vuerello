<template>
  <div class="add-a-card-controller">
    <div class="add-a-card-controller-a">
      <button class="add-card">+ Add another list</button>
    </div>
    <div class="add-a-card-controller-b">
      <input type="text" placeholder="Enter list title...">
      <div class="add-a-card-buttonbox">
        <input type="button" value="Add card">
        <!-- X 아이콘 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "VTAddCardController",
}
</script>

<style scoped>
  .add-a-card-controller{
    display: flex;
    flex-direction: column;
    width: 272px;
  }

  .add-card{
  background-color: grey;
  border: 0 solid black;
  border-radius: 5px;
  color: white;
  width: 284px;
  height: 35px;
  font-size: 15px;
  margin-bottom: 5px;
}

.add-a-card-controller-b{
  background-color: whitesmoke;
  border-radius: 3px;
  width: 272px;
  padding: 6px;
}

.add-a-card-controller-b > input{
  border: solid cornflowerblue;
  border-radius: 3px;
  width: 96%;
  min-height: 35px;
  margin-bottom: 5px;
  padding-left: 5px;
  text-align: left;
  size: 15px;
  color: gray;
}

.add-a-card-buttonbox > input{
  border: 0 solid black;
  border-radius: 3px;
  background-color: cornflowerblue;
  color: white;
  width: 30%;
  height: 35px;
}
</style>
