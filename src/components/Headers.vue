<script>
// надай кожному завданню унікальний id
let id = 0

export default {
    data() {
        return {
            newTodo: '',
            todos: [
                { id: id++, text: 'Вивчити HTML' },
                { id: id++, text: 'Вивчити JavaScript' },
                { id: id++, text: 'Вивчити Vue' }
            ]
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo && this.todos.filter(t => t.text === this.newTodo).length === 0) {
                this.todos.push({
                    id: id++,
                    text: this.newTodo
                })
            }
        },
        removeTodo(todo) {
            if (todo.text === 'Вивчити Vue') {
                alert('Ви не можете видаляти це завдання')
            } else {
                this.todos = this.todos.filter(t => t !== todo)
            }
        }
    }
}
</script>

<template>
    <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Додати завдання</button>
    </form>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.text }}
            <button @click="removeTodo(todo)">X</button>
        </li>
    </ul>
</template>