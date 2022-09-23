<template>
  <div class="listTitle">
    <div class="listTitleControllerBox">
      <span class="listTitleControllerA" v-show="controller" @click="titleChangeOpen">
        <h3 class="listContentTitle" >{{listTitle.title}}</h3>
      </span>
      <span class="listTitleControllerB" v-show="!controller">
        <textarea class="listTitleChange" :value="listTitle.title"></textarea>
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
    props:{
      listTitle:{
        title:String,
        titleControl:Boolean,
        addCardControl:Boolean
      },
    },
    data(){
      return{
        controller:this.listTitle.titleControl
      }
    },
    methods:{
      titleChangeOpen(){
        this.controller=!this.controller;
      },
      titleChangeClose(){
        this.controller= true;
      }
    }
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
</style>