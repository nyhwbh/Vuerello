<template>
  <div class="addAnotherListController">
    <div class="addAnotherListControllerA" v-show="controller" @click="addListBoxOpen(this.controller)">
      <a class="addAnotherListInputBox">+ Add another list</a>
    </div>
    <div class="addAnotherListControllerB" v-show="!controller">
      <textarea class="addAnotherListvalue" placeholder="Enter list title..." 
      v-model="listValue" v-on:keydown.enter.prevent="addNewList(listValue),clearInput()"></textarea>
      <div class="addAnotherlistButtonbox">
        <input type="button" value="Add list" class="addAnotherListbutton"
               @click="addNewList(listValue),clearInput()">
        <span class="closeAddAnotherListcard" @click="addListBoxClose()">
          <i class="fa-solid fa-xmark closeAddCard"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: "AddCardController",
    data() {
      return{
        controller : true,
        listValue:"",
      }
    },
    methods:{
      ...mapMutations({
        addNewList : 'addNewList'
      }), 
      addListBoxOpen() {
        this.controller = !this.controller;
      },
      addListBoxClose() {
        this.controller = true;
      },
      clearInput(){
        this.listValue = "";
      }

    }
}
</script>

<style>
.addAnotherListControllerA{
  display: block;
} 

.addAnotherListController{
  display: block;
}

.addAnotherListInputBox{
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

.addAnotherListControllerB{
  display: block;
  background-color: #ebecf0;
  border-radius: 5px;
  padding: 8px 5px 7px 7px;
  border-radius: 5px;
  max-width: 272px;
}

.addAnotherListvalue{
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

.addAnotherlistButtonbox > input{
  border: 0 solid black;
  border-radius: 3px;
  background-color: cornflowerblue;
  color: white;
  width: 30%;
  height: 35px;
}

.closeAddCard{
  margin-left: 10px;
  color: grey;
  size: 25px;
}
</style>
