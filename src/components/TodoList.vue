<template>
  <div class="list">
    <div v-for="(item, index) in list" :key="index">
      <div class="listitem">
        <input type="checkbox" v-model="item.complete">
        <template v-if="!item.editing">
          <span>{{ item.title }}</span>
          <button class="edit" @click="startEditing(item)">編輯</button>
        </template>
        <template v-else>
          <input v-model="item.title" @keyup.enter="endEditing(item)" @blur="endEditing(item)">
          <button class="save" @click="endEditing(item)">保存</button>
        </template>
        <button class="del" @click="del(item, index)">刪除</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TodoList',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  emits: ['del'],
  setup(props, ctx) {
    const del = (item, index) => {
      ctx.emit('del', index);
    };

    const startEditing = (item) => {
      item.editing = true;
    };

    const endEditing = (item) => {
      item.editing = false;
    };

    return {
      del,
      startEditing,
      endEditing,
    };
  },
};
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
    span,input {
      margin-left: 5px;
      font-size: 14px;
    }
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