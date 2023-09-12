<template>
  <div class="list">
    <div v-for=" ( item, index) in list" :key="index">
      <div class="listitem">
        <input type="checkbox" v-model="item.complete">
        {{ item.title }}
        <button class="edit" @click="edit(item, index)">編輯</button>
        <button class="del" @click="del(item, index)">刪除</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name:'TodoList',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  emits: ['del'],
  setup(props, ctx){
    let del = (item, index) => {
      ctx.emit('del', index)
    }

    return {
      del
    }
  }
}
</script>

<style scoped lang="scss">
  .list {
    width: 100%;
    height: 210px;
    overflow: scroll;
    .listitem {
    height: 35px;
    line-height: 35px;
    position: relative;
    .edit {
      position: absolute;
      right: 60px;
      top: 6px;
      display: none;
      z-index: 99;
    }
    .del {
      position: absolute;
      right: 20px;
      top: 6px;
      display: none;
      z-index: 99;
    }
    &:hover {
      background: #ddd;
      .del, .edit{
        display: block;
        cursor: pointer;
      }
    }
  }
  }
</style>