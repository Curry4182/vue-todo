
<template>
    <div>
        <TransitionGroup name="list" tag="ul">
            <li v-for="(todoItem, index) in this.todoItems" :key="todoItem.item + index" class="shadow">
                <i :class="{checkBtnCompleted:todoItem.completed}" class="checkBtn fa-solid fa-check"
                    @click="toggleComplete(todoItem, index)">
                </i>
                <span :class="{textCompleted:todoItem.completed}">{{ todoItem.item }}</span>
                <span class="removeBtn" @click="removeItem(todoItem, index)">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </li>
        </TransitionGroup>
    </div>
</template>

<script>

    import { mapGetters, mapMutations } from 'vuex';

    export default {
        methods: {
            ...mapMutations(['removeTodoItem', 'toggleTodoItem']),
            removeItem(todoItem, index) {
                this.removeTodoItem({todoItem, index});
            },
            toggleComplete(todoItem, index) {
                this.toggleTodoItem({ todoItem, index });
            }
        },
        computed: {
            ...mapGetters({
                todoItems: 'storedTodoItems'
            })
        }
    }
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}

.checkBtnCompleted {
    color: #b3adad;
}

.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}

.list-enter-active,
.list-leave-active {
    transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

</style>