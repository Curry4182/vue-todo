<template>
    <div class="inputBox shadow">
        <input type="text" name="" id="" v-model="newTodoItem" @keypress.enter="addTodoItemOne">
        <!-- <button @click="addTodo">add button</button> -->
        <span class="addContainer" @click="addTodoItemOne">
            <i class="fa-solid fa-plus addBtn"></i>
        </span>
        <DefaultModal :show="showModal" @close="closeModal">
            <template v-slot:header>
                경고!
                <i @click="closeModal" class="closeModalBtn fas fa-times"></i>
            </template>
            <template v-slot:body>
                <p>
                    입력이 비어져 있습니다.
                </p>
            </template>
        </DefaultModal>
    </div>
</template>

<script>
    import DefaultModal from './common/DefaultModal.vue';
    import { mapMutations } from 'vuex';

    export default {
        data() {
            return {
                newTodoItem: "",
                showModal: false
            }
        },
        components: {
            DefaultModal
        },
        methods: {
            ...mapMutations(['addTodoItem']),
            addTodoItemOne() {
                if(this.newTodoItem === '') {
                    this.showModal = true;
                    return;
                }
                this.addTodoItem(this.newTodoItem);
                this.clearInput();
            },
            clearInput() {
                this.newTodoItem = "";
            },
            closeModal() {
                this.showModal = false;
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
.closeModalBtn {
    color: #42b983;
}
</style>