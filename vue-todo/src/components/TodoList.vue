<template>
    <div>
        <ul>
            <li v-for="(item, index) in todoItems" :key="index">
                <span>{{ item }}</span>
                <button @click="removeTodoItem(item, index)">삭제</button>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        props: ['todoItems'] ,
        setup(props, context) {

            function removeTodoItem(item, index) {
                context.emit('removeTodoItem', item, index);
            }

            return { removeTodoItem }
        }
    }
</script>

<style lang="scss" scoped>

</style>