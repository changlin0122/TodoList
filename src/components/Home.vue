<template>
    <div class="text"> TODO LIST</div>
    <div class="container">
        <TodoInput @add="addTodo"></TodoInput>
        <TodoList :list="todos" @del="deleteTodo" @edit="editTodo"></TodoList>
        <TodoFooter :list="todos" @clear="clearCompleted"></TodoFooter>
    </div>
</template>

<script>
import TodoInput from './TodoInput.vue'
import TodoList from './TodoList.vue'
import TodoFooter from './TodoFooter.vue'

import { defineComponent, computed, ref, onMounted } from 'vue'
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
        let todos = computed(() => {
            return store.state.list
        })
        const addTodo = (title) => {
            const newTodo = {
                title,
                completed: false,
            }
            store.dispatch('addTodo', newTodo)
        }

        const deleteTodo = (todoId) => {
        store.dispatch('deleteTodo', todoId)
        }

        const editTodo = (updatedTodo) => {
        store.dispatch('updateTodo', updatedTodo)
        }

        const clearCompleted = () => {
            store.dispatch('clearCompleted')

        }

        onMounted(() => {
        store.dispatch('fetchTodoData')
        })
        
        return{
            todos,
            addTodo,
            deleteTodo,
            editTodo,
            clearCompleted,
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