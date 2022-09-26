<template>
<div class="listContent">
    <ListTitle :listTitle="ContentsItem.listTitle" />
    <ListCards :listCards="ContentsItem" />
    <AddCardController :addController="ContentsItem.listTitle.addCardControl" />
</div>
</template>

<script>
import ListTitle from './VT-ListTitle.vue';
import ListCards from './VT-ListCards.vue';
import AddCardController from './VT-AddCardController.vue';

export default {
    name: "ListContent",
    props: {
        ContentsItem: Object
    },
    components: {
        ListTitle,
        ListCards,
        AddCardController
    },
    methods: {
    }
}
</script>

<style>

</style>