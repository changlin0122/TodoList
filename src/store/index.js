    import { createStore } from 'vuex'
    import axios from 'axios'

    export default createStore({
        state: {
            list: []
        },
        mutations: {
            setTodoList(state, data) {
              state.list = data
            },
            // 添加任務
            addTodo(state, payload) {
                state.list.unshift(payload)
            },
            // 刪除任務
            deleteTodo(state, payload) {
                state.list.splice(payload, 1)
            },
            // 清除已完成
            clearCompleted(state) {
              state.list = state.list.filter(todo => !todo.complete)
            },
        },
        actions: {
          async fetchTodoData({ commit }) {
            try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
              const todosFromAPI = response.data.map((item) => ({
                title: item.title,
                complete: item.completed,
              }))
              commit('setTodoList', todosFromAPI)
            } catch (error) {
              console.error('获取数据时出错：', error)
            }
          },
          async addTodo({ commit }, todo) {
            try {
              const response = await axios.post('https://jsonplaceholder.typicode.com/todos', todo)
              commit('addTodo', response.data)
            } catch (error) {
              console.error('添加任务时出错：', error)
            }
          },
          async deleteTodo({ commit }, todoId) {
            try {
              await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
              commit('deleteTodo', todoId)
            } catch (error) {
              console.error('删除任务时出错：', error)
            }
          },
          async clearCompleted({ commit, state }) {
            try {
              const completedTodoIds = state.list
                .filter(todo => todo.completed)
                .map(todo => todo.id)
              
              for (const todoId of completedTodoIds) {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
              }
              
              commit('clearCompleted')
            } catch (error) {
              console.error('清除已完成任务时出错：', error)
            }
          }
        }
    })