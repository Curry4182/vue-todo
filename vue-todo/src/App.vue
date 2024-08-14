<template>
  <AppHeader></AppHeader>
  <TodoInput></TodoInput>
  <TodoList></TodoList>
  <TodoFooter></TodoFooter>
</template>

<script>

import AppHeader from './components/AppHeader.vue';
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  components: {
    AppHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

import AppVue
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
