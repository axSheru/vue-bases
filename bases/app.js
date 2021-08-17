const app = Vue.createApp({
    /* template: `
    <h1>Hola mundo</h1>
    <p>Desde app.js</p>
    ` */

    data() {
        return {
            quote: 'Luke, yo soy tu padre.',
            author: 'Anakin Skywalker'
        }
    },
    methods: {
        changeQuote() {
            this.quote = 'Llegué, la apliqué y pegó.'
            this.author = 'Alex P'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')