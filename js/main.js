const app = Vue.createApp({
    data: () => ({
        // isLarge: true,
        // hasError: false,

        // largeClass: 'large',
        // dangerClass: 'text-danger',

        // classObject: {
        //     large: true,
        //     'text-danger': true,
        // }

        largeClass: {
            'large': true,
            'bg-gray': true,
        },
        dangerClass: {
            'text-danger': true
        },
        isLarge: true,
    }),
})
app.mount('#app')