<template>
  <div>
    <input 
    placeholder="請輸入代辦事項" 
    v-model="value"
    @keydown.enter="enter"
    >
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name:'TodoInput',
  setup(props, ctx) {
    let value =ref('')
    let enter = () => {
      if(value.value.trim() === '') {
        alert('輸入欄不得為空')
        value.value =''
        return
      }
      ctx.emit('add', value.value)
      value.value = ''
    }

    return {
      value,
      enter
    }
  }
}
</script>

<style scoped lang="scss">
  input {
    width: 100%;
    height: 32px;
    margin-bottom: 10px;
    font-size: 16px;
  }
</style>