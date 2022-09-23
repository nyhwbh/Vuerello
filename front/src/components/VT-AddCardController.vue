<template>
  <div class="addACardController">
    <div class="addACardControllerA" v-bind:class="{}">
      <a class="addACardButton">+ Add a card</a>
    </div>
    <div class="addACardControllerB">
      <textarea  class="addCardInCardsList" placeholder="Enter a title for this card..."></textarea>  
      <div class="addACardButtonBox">
        <div class="addCardButton">
          <input class="addCard" type="button" value="Add card">
          <span class="closeAddCard">
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>
        <span class="addCardOptions">
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
.addACardController{
  display: flex;
  flex-direction: column;
}

.addACardControllerA{
  display: flex;
  flex-direction: space-between; 
  max-height: 38px;
  min-height: 38px;
}


.addACardButton{
  background-color: #ebecf0;
  border-radius: 3px;
  display: block;
  color: #5e6c84;
  flex: 1 0 auto;
  margin-top: 2px;
  padding: 7px 8px 4px 0;
  position: relative;
  max-height: 27px;
  font-size: 15px;
}

.addACardControllerB{
  display: block;
  flex-shrink: 0;
}

.addCardInCardsList{
  border: 0 solid black;
  border-radius: 3px;
  width: 242px;
  min-height: 70px;
  box-shadow: 0px 2px 2px #ebecf0;
  margin-bottom: 3px;
  padding-left: 7px;
  color: gray;
  font-weight: 100;
  font-size: 15px;
  font-family: sans-serif;
  resize: none;
}

.addACardButtonBox{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.addCardButton{
  display: flex;
  flex-direction: row;
  max-height: 35px;

}

.addCard{
  border: 0 solid black;
  border-radius: 3px;
  background-color: cornflowerblue;
  box-shadow: 0px 2px 2px #ebecf0;
  color: white;
  flex-shrink: 0;
  width: 70px;
  height: 35px;
}

.closeAddCard{
  margin-left: 10px;
  margin-top: 8px;
}

.fa-xmark{
  color: grey;
  font-size: 20px;
}

.addCardOptions{
  margin-right: 10px;
}

</style>
<style scoped>
  .fa-ellipsis{
    color: gray;
    font-size: 20px;
    padding-top: 8px;
    margin-right: 5px;
  }
</style>