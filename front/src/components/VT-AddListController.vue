<template>
  <div class="add-another-list-controller">
    <div class="add-another-list-controller-a">
      <a class="add-list-input-box">+ Add another list</a>
    </div>
    <div class="add-another-list-controller-b-hide">
      <textarea class="add-list-value" placeholder="Enter list title..."></textarea>
      <div class="add-another-list-buttonbox">
        <input type="button" value="Add list" class="add-list-button">
        <span class="close-add-list-card">
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

<style>
.add-another-list-controller-a-hide{
  display: none;
}

.add-another-list-controller-a{
  display: block;
} 

.add-another-list-controller{
  display: block;
}

.add-list-input-box{
  display: block;
  background-color: grey;
  opacity: 0.6;
  border: 0 solid black;
  border-radius: 5px;
  color: white;
  min-height: 35px;
  max-height: 35px;
  font-size: 15px;
  padding-top: 10px;
  text-align: center;
  margin-bottom: 5px;
}

.add-another-list-controller-b-hide{
  display: none;
}

.add-another-list-controller-b{
  display: block;
  background-color: #ebecf0;
  border-radius: 5px;
  padding: 8px 5px 7px 7px;
  border-radius: 5px;
  max-width: 272px;
}

.add-list-value{
  border: solid cornflowerblue;
  border-radius: 3px;
  width: 94%;
  min-height: 35px;
  margin-bottom: 5px;
  padding-left: 5px;
  color: gray;
  font-weight: 100;
  font-size: 15px;
  font-family: sans-serif;
  resize: none;
}

.add-another-list-buttonbox > input{
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
