<template>
  <div class="card-wrapper" v-for="(item,idx) in items" :key="idx">
    <div class="card-contents">
      <VTCardTilte :title="item.title"/>
      <VTCardLists :items="item.lists"/>
      <VTAddCardController />
    </div>
  </div>
</template>

<script>
import VTCardTilte from './VT-CardTilte.vue';
import VTCardLists from './VT-CardLists.vue';
import VTAddCardController from './VT-AddCardController.vue';
export default {
    name: "VTCardWrapper",
    props: {
        items: Array
    },
    components: { VTCardTilte, VTCardLists, VTAddCardController }
}
</script>

<style>
.card-wrapper{
  flex-shrink: 0;
  width: 272px;
  max-height: max-content;
  margin-right: 10px;
  overflow-y: auto;
}

.card-contents{
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  border-radius: 5px;
  padding-left: 10px;
  padding-bottom: 10px;
}
</style>
