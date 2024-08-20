import { ref } from 'vue';

function useTodo() {
    // data
    const todoItems = ref([]);

    // methods
    function fetchTodos() {
        const arr = [];
        for (let i = 0; i < localStorage.length; i++) {
            const todoItem = localStorage.key(i);
            arr.push(todoItem);
        }
        return arr;
    }

    function addTodoItem(todoItem) {
        if(!localStorage.getItem(todoItem)) {
            todoItems.value.push(todoItem);
        }
    }

    function removeTodoItem(item, index) {
        todoItems.value.splice(index, 1);
        localStorage.removeItem(item);
    }

    return {
        todoItems,
        fetchTodos,
        addTodoItem,
        removeTodoItem
    }
}

export default useTodo;