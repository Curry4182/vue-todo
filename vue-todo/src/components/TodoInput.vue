<template>
    <div class="inputBox shadow">
        <input type="text" name="" id="" v-model="newTodoItem" @keyup.enter="addTodoItem">
        <!-- <button @click="addTodo">add button</button> -->
        <span class="addContainer" @click="addTodoItem">
            <i class="fa-solid fa-plus addBtn"></i>
        </span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newTodoItem: ""
            }
        },
        methods: {
            addTodoItem() {
                if(this.newTodoItem === '') {
                    return;
                }
                this.$emit('addOneItem', this.newTodoItem);
                this.clearInput();
            },
            clearInput() {
                this.newTodoItem = "";
            }
        }
    }
</script>

<style lang="scss" scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}

</style>