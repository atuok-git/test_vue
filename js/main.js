const app = Vue.createApp({
    data: () => ({
        basePrice: 100,
    }),
    computed: {
        taxIncludePrice: {
            get: function() {
                return this.basePrice * 2
            },
            set: function(value) {
                this.basePrice = value /2
            }
        },
        computedNumber: function() {
            console.log('computed')
            return Math.random()
        }
    },
    methods: {
        reversedMessageMethod: function() {
            return this.message.split('').reverse().join('')
        },
        methodsNumber: function() {
            console.log('methods')
            return Math.random()
        }
    }
})
app.mount('#app')