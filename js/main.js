const hogeComponent = {
    template: '<p>hogehoge!</p>'
}

const buttonCounter = {
    template: '<div><span>count: </span><button v-on:click="countUp">{{ count }}</button></div>',
    data: () => ({
        count: 0,
    }),
    methods: {
        countUp: function(event) {
            this.count++
        }
    }
}

const app = Vue.createApp({
    data: () => ({
        show: true,
    }),
    methods: {
    }, 
    components: {
        'hoge-component': hogeComponent,
        'button-counter': buttonCounter,
    }
})

app.component('hello-component', {
    template: '<p>Hello!</p>'
})
app.mount('#app')