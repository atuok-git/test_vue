const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue.js!!!',
        km: 0,
        m: 0,
        firstName: '',
        lastName: '',
        // fullName: '',
        colors: [
            { name: 'Red'},
            { name: 'Green'},
            { name: 'Blue'},
        ],
    }),
    watch: {
        message: function(newValue, oldValue) {
            console.log('new: %s, old: %s', newValue, oldValue)
        },
        km: function(value) {
            console.log(value)
            this.km = value
            this.m = value * 1000
        },
        m: function(value) {
            this.km = value / 1000
            this.m = value
        },

        // firstName: function(value) {
        //     this.fullName = value + ' ' + this.lastName
        // },
        // lastName: function(value) {
        //     this.fullName = this.firstName + ' ' + value 
        // },

        colors: {
            handler: function(newValue, oldValue) {
                console.log('Update!!!')
            },
            deep: true
        }

    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }

    },
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
        },
        onClick: function(event) {
            this.colors[1].name = 'White'
        }
    } 
})
app.mount('#app')