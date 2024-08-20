<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput @addTodoItem="addTodoItem"></TodoInput>
    <TodoList :todoItems="todoItems" @removeTodoItem="removeTodoItem"></TodoList>
  </div>
</template>

<script>
  import TodoHeader from '@/components/TodoHeader.vue';
  import TodoInput from '@/components/TodoInput.vue'; 
  import TodoList from '@/components/TodoList.vue';
  import { ref } from 'vue';

  export default {
    components: {
      TodoHeader,
      TodoInput,
      TodoList
    },
    setup() {

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

      todoItems.value = fetchTodos();

      return { todoItems, addTodoItem, removeTodoItem }
    }
  }
</script>

<style lang="scss" scoped>

</style>