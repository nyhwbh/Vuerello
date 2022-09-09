<template>
  <div class="card-wrapper" v-for="(item,idx) in items" :key="idx">
    <div class="card-contents">
      <div class="card-title">
        <h2 class="card-content-title">{{item.title}}</h2>
      </div>
      <div class="card-lists">
        <a class="card-content-list" v-for="(list,idx) in item.lists" :key="idx">{{list}}</a>
        <a class="card-content-list">블록체인 공부하기</a>
        <a class="card-content-list">프로젝트 계획서 쓰기</a>
      </div>
      <div class="add-a-card-controller">
        <div class="add-a-card-controller-a">
          <button class="add-card">+ Add a card</button>
        </div>
        <div class="add-a-card-controller-b">
          <input type="text" placeholder="Enter a title this card...">
          <div>
            <input type="button" value="Add card">
            <!-- X 아이콘 -->
            <!-- ... 아이콘 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "VTCardWrapper",
    props: {
      items: Array
    },
}
</script>

<style>
 .card-contents{
  display: flex;
  flex-direction: column;
 }

 .card-lists{
  display: flex;
  flex-direction: column;
 }
</style>
