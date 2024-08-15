<template>
  <TodoHeader></TodoHeader>
  <TodoInput v-on:addOneItem="addTodoItem"></TodoInput>
  <TodoList :propsData="todoItems" v-on:removeOneItem="removeTodoItem" v-on:toggleOneItem="toggleTodoItem">
  </TodoList>
  <TodoFooter v-on:clearAllItems="clearAll">
  </TodoFooter>
</template>

<script>

import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  methods: {
    removeTodoItem(todoItem, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(todoItem.item);
    },
    addTodoItem(newTodoItem) {
      const obj = { completed: false, item: newTodoItem };
      localStorage.setItem(newTodoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    toggleTodoItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;

      localStorage.setItem(
        todoItem.item,
        JSON.stringify(todoItem)
      );
    },
    clearAll() {
      this.todoItems = [];
      localStorage.clear();
    }
  },
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === '') {
          continue;
        }

        const todoItem = JSON.parse(
          localStorage.getItem(
            localStorage.key(i)
          )
        );

        this.todoItems.push(
          todoItem
        );
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

import AppVue
<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

</style>
