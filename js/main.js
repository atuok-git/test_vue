const app = Vue.createApp({
    data: () => ({
        newItem: '',
        todos: [],

    }),
    methods: {
        addItem: function(event) {
            let todo = {
                item: this.newItem,
                isDone: false,
            }
            if(this.newItem === '') return
            this.todos.push(todo)
            this.newItem = ''
        },
        deleteItem: function(index) {
            this.todos.splice(index, 1)
        }
    } 
})
app.mount('#app')