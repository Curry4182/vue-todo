<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" :key="todoItem.item + index" class="shadow">
                <i :class="{checkBtnCompleted:todoItem.completed}" class="checkBtn fa-solid fa-check" @click="toggleComplete(todoItem, index)">
                </i>
                <span :class="{textCompleted:todoItem.completed}">{{ todoItem.item }}</span>
                <span class="removeBtn" @click="removeItem(todoItem, index)">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods: {
            removeItem(todoItem, index) {
                this.todoItems.splice(index, 1);
                localStorage.removeItem(todoItem);
            },
            toggleComplete(todoItem, index) {
                todoItem.completed = !todoItem.completed;
                
                localStorage.setItem(
                    localStorage.key(index),
                    JSON.stringify(todoItem)
                );
            }
        }, 
        data() {
            return {
                todoItems: []
            }
        },
        created() {
            if(localStorage.length > 0) {
                for (var i =0; i < localStorage.length; i ++) {
                    if(localStorage.key(i) === '') {
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

</style>