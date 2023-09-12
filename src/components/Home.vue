<template>
    <div class="text"> TODO LIST</div>
    <div class="container">
        <TodoInput @add="add"></TodoInput>
        <TodoList :list="list" @del="del"></TodoList>
        <TodoFooter :list="list" @clear="clear"></TodoFooter>
    </div>
</template>

<script>
import TodoInput from './TodoInput.vue'
import TodoList from './TodoList.vue'
import TodoFooter from './TodoFooter.vue'

import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    name:'Home',
    components: {
        TodoInput,
        TodoList,
        TodoFooter
    },
    setup(){
        let store = useStore()
        let list = computed(() => {
            return store.state.list
        })
        let value = ref('')
        // 添加任務
        let add = (val) => {
            value.value = val
            store.commit('addTodo', {
                title: value.value,
                complete: false
            })
        }
        // 刪除任務
        let del = (val) => {
            store.commit('delTodo', val)
        }
        // 清除已完成
        let clear = (val) => {
            store.commit('clear', val)
        }
        return{
            add,
            del,
            clear,
            value,
            list
        }
    }
})

</script>

<style scoped lang="scss">
    .text {
        margin: 50px 0 20px 0;
        font-size: 50px;
        text-align: center;
    }
    .container {
        width: 400px;
        height: auto;
        margin: 0 auto;
    }
</style>