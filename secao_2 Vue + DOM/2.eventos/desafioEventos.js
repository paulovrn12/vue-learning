new Vue({
    el: "#vue",
    data: {
        value: "",
    },
    methods: {
        alertButtonClick() {
            alert(`Alerta Exibido com ${this.value}`)
        },
        saveValueInput(event) {
            this.value = event.target.value
        }
    }
})
