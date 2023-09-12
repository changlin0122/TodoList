    import { createStore } from 'vuex'

    export default createStore({
        state: {
            list: [
                {
                  title: '吃飯',
                  complete: false
                },
                {
                  title: '睡覺',
                  complete: false
                },
                {
                  title: '敲代碼',
                  complete: true
                },
              ]
        },
        mutations: {
            // 添加任務
            addTodo(state, payload) {
                state.list.push(payload)
            },
            // 刪除任務
            delTodo(state, payload) {
                state.list.splice(payload, 1)
            },
            // 清除已完成
            clear(state, payload) {
                state.list = payload
            }
        },
        actions: {

        },
        modules: {

        }
    })