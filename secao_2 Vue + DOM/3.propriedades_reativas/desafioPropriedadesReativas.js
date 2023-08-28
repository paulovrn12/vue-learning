new Vue({
    el: "#app",
    data: {
        valor: 0
    },
    watch: {
        valor() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    },
    computed: {
        resultado() {
            return this.valor == 37 ? "Igual a 37" : "Diferente de 37"
        }
    },
    methods: {

    }
})
