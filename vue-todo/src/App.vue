<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput @addTodoItem="addTodoItem"></TodoInput>
    <TodoList :todoItems="todoItems"></TodoList>
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

      todoItems.value = fetchTodos();

      return { todoItems, addTodoItem }
    }
  }
</script>

<style lang="scss" scoped>

</style>