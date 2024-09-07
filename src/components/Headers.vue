<script>
let id = 0

export default {
    data() {
        return {
            newTodo: '',
            hideCompleted: false,
            todos: [
                { id: id++, text: 'Вивчити HTML', done: true },
                { id: id++, text: 'Вивчити JavaScript', done: true },
                { id: id++, text: 'Вивчити Vue', done: false }
            ]
        }
    },
    computed: {
        filteredTodos() {
            return this.hideCompleted ? this.todos.filter(t => !t.done) : this.todos
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() != '' && !this.todos.some(newTodo => newTodo.text === this.newTodo)) {
                this.todos.push({
                    id: id++,
                    text: this.newTodo,
                    done: false
                })
                this.newTodo = ''
            }
        },
        removeTodo(todo) {
            if (todo.text === 'Вивчити Vue') {
                alert('Ви не можете видаляти це завдання')
            } else {
                this.todos = this.todos.filter(t => t !== todo)
            }
        },
    }
}
</script>

<template>
    <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Додати завдання</button>
    </form>
    <button @click="todos = [], newTodo = ''">Очистити список</button>
    <button @click="hideCompleted = !hideCompleted">{{ hideCompleted ? 'Показати всі завдання' :
        'Приховати завдання' }}</button>
    <ul>
        <li v-for="todo in filteredTodos" :key="todo.id">
            <input type="checkbox" v-model="todo.done">
            <span :class="{ done: todo.done }" @click="">{{ todo.text }}</span>
            <button @click="removeTodo(todo)">X</button>
        </li>
    </ul>
</template>

<style>
.done {
    text-decoration: line-through;
}
</style>