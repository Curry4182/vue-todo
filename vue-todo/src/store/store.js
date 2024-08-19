import { createStore } from 'vuex'

const storage = {
    fetch() {
        if (localStorage.length > 0) {
            const arr = [];
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) === '') {
                    continue;
                }

                const todoItem = JSON.parse(
                    localStorage.getItem(
                        localStorage.key(i)
                    )
                );

                arr.push(
                    todoItem
                );
            }
            return arr;
        }
    }
}

const store = createStore({
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        addTodoItem(state, newTodoItem) {
            const obj = { completed: false, item: newTodoItem };
            if(localStorage.getItem(obj.item)) {
                return;
            }
            localStorage.setItem(obj.item, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeTodoItem(state, payload) {
            state.todoItems.splice(payload.index, 1);
            localStorage.removeItem(payload.todoItem.item);
        },
        toggleTodoItem(state, payload) {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

            localStorage.setItem(
                payload.todoItem.item,
                JSON.stringify(payload.todoItem)
            );
        },
        clearAll(state) {
            state.todoItems = [];
            localStorage.clear();
        }
    },
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        }
    }
});

export default store