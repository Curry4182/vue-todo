<template>
    <div>
        <input type="text" v-model="todoInput">
        <button @click="addTodo">추가</button>
    </div>
</template>

<script>

    import { ref } from 'vue';

    export default {
        setup(props, context) {

            // data
            const todoInput = ref('');

            function addTodo() {
                const todo = todoInput.value.trim();

                if(todo === '') {
                    return;
                }
                
                context.emit('addTodoItem', todo);
                localStorage.setItem(todo, todo);
                clearInput();
            }

            function clearInput() {
                todoInput.value = '';
            }

            return { todoInput, addTodo }
        }
    }
</script>

<style lang="scss" scoped>

</style>