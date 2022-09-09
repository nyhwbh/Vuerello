<template>
  <div class="add-a-card-controller">
    <div class="add-a-card-controller-a">
      <button class="add-input-box">+ Add a card</button>
    </div>
    <div class="add-a-card-controller-b">
      <input type="text" placeholder="Enter a title this card...">
      <div class="add-a-card-buttonbox">
        <div class="card-add-button">
          <input class="add-card" type="button" value="Add card">
          <span class="close-add-card">
            <i class="fa-solid fa-xmark close-add-card"></i>
          </span>
        </div>
        <span class="card-options">
          <i class="fa-solid fa-ellipsis"></i>
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

<style>
.add-a-card-controller{
  display: flex;
  flex-direction: column;
}
</style>

<style scoped>
.add-a-card-controller-a{
  display: block;
} 

.add-input-box{
  background-color: whitesmoke;
  border: 0 solid black;
  color: grey;
  height: 27px;
  font-size: 15px;
}

.add-a-card-controller-b{
  display: block;
  flex-shrink: 0;
}

.add-a-card-controller-b > input{
  border: 0 solid black;
  border-radius: 3px;
  width: 247px;
  min-height: 70px;
  box-shadow: 0px 2px 2px #E2E2E2;
  margin-bottom: 10px;
  padding-left: 5px;
  text-align: left;
  size: 15px;
  color: gray;
}

.add-a-card-buttonbox{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.add-card{
  border: 0 solid black;
  border-radius: 3px;
  background-color: cornflowerblue;
  color: white;
  flex-shrink: 0;
  width: 70px;
  height: 35px;
}

.fa-xmark{
  margin-left: 10px;
  color: grey;
  size: 25px;
}

.card-options{
  padding-top: 5px;
}

.fa-ellipsis{
  color: gray;
  size: 20px;
  margin-right: 15px;
}
</style>
