const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue.js!!',
        number: 100,
        ok: true,
        url: 'https://www.google.com/search',
    }),
    methods: {
        clickHandler : function(event) {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
app.mount('#app')