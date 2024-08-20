<template>
  <div>
    <TodoHeader :appTitle="todoTitle"></TodoHeader>
    <TodoInput @addTodoItem="addTodoItem"></TodoInput>
    <TodoList :todoItems="todoItems" @removeTodoItem="removeTodoItem"></TodoList>
  </div>
</template>

<script>
  import TodoHeader from '@/components/TodoHeader.vue';
  import TodoInput from '@/components/TodoInput.vue'; 
  import TodoList from '@/components/TodoList.vue';
  import { ref, onBeforeMount } from 'vue';
  import useTodo from './hooks/useTodo.js'

  export default {
    components: {
      TodoHeader,
      TodoInput,
      TodoList
    },
    setup() {
      const todoTitle = ref("할 일");
      const {
        todoItems,
        addTodoItem,
        removeTodoItem,
        fetchTodos
      } = useTodo();

      onBeforeMount(() => {
        todoItems.value = fetchTodos();
      });

      return { todoItems, addTodoItem, removeTodoItem, todoTitle }
    }
  }
</script>

<style lang="scss" scoped>

</style>