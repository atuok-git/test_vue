const app = Vue.createApp({
    data: () => ({
        // color: 'blue',
        // toggle: true,      
        counter: 0,
        message: '',
        date: '',
    }),
    methods: {
        clickHandler: function($event, message) {
            this.counter++
            this.message = message
            console.log($event)
        },
        getDate: function() {
            this.date = new Date().toLocaleTimeString()
        }
    }
})
app.mount('#app')