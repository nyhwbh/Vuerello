<template>
  <div class="add-a-card-controller">
    <div class="add-a-card-controller-a">
      <button class="add-input-box">+ Add another list</button>
    </div>
    <div class="add-a-card-controller-b-hidden">
      <textarea class="add-list-value" placeholder="Enter list title..."></textarea>
      <div class="add-a-card-buttonbox">
        <input type="button" value="Add list" class="add-list-button">
        <span class="close-add-card">
          <i class="fa-solid fa-xmark close-add-card"></i>
        </span>
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
.add-a-card-controller-a-hidden{
  display: none;
}

.add-a-card-controller-a{
  display: block;
} 

.add-a-card-controller{
  display: flex;
  flex-direction: column;
  width: 272px;
}

.add-input-box{
  background-color: grey;
  opacity: 0.6;
  border: 0 solid black;
  border-radius: 5px;
  color: white;
  width: 284px;
  height: 35px;
  font-size: 15px;
  margin-bottom: 5px;
}

.add-a-card-controller-b-hidden{
  display: none;
}

.add-a-card-controller-b{
  display: block;
  background-color: whitesmoke;
  border-radius: 3px;
  width: 272px;
  padding: 6px;
}

.add-a-card-controller-b > textarea{
  border: solid cornflowerblue;
  border-radius: 3px;
  width: 96%;
  min-height: 35px;
  margin-bottom: 5px;
  padding-left: 5px;
  color: gray;
  font-weight: 100;
  font-size: 15px;
  font-family: sans-serif;
  resize: none;
}

.add-a-card-buttonbox > input{
  border: 0 solid black;
  border-radius: 3px;
  background-color: cornflowerblue;
  color: white;
  width: 30%;
  height: 35px;
}

.fa-xmark{
  margin-left: 10px;
  color: grey;
  size: 25px;
}
</style>
