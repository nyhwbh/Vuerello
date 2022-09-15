<template>
  <div class="card-wrapper" v-for="(items,idx) in boards" :key="idx">
    <div class="card-contents">
      <VTCardTilte :listTitle="items.listTitle"/>
      <VTCardLists :cardsList="items.listCards"/>
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
        boards: Array
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
}

.card-contents{
  display: flex;
  flex-direction: column;
  background-color: #ebecf0;
  border-radius: 5px;
  padding-left: 10px;
  padding-bottom: 10px;
}
</style>
