<template>
  <div class="footer">
    <div>
      已完成 {{ isComplete }} / 全部 {{ list.length }}
    </div>
    <div v-if="isComplete > 0" class="btn">
      <button @click="clear">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name:'TodoFooter',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  setup (props, ctx) {
    let isComplete = computed(() => {
      let arr = props.list.filter(item => {
        return item.complete
      })
      return arr.length
    })
    // 清除已完成
    let clear = () => {
      // 過濾未完成的
      let arr = props.list.filter(item => {
        return item.complete == false
      })
      ctx.emit('clear', arr)
    }

    return {
      isComplete,
      clear
    }
  }
}
</script>

<style scoped lang="scss">
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

</style>