new Vue({
    el: "#application",
    data: {
        myName: "Paulo Victor",
        myAge: 24,
        linkImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/120px-Vue.js_Logo_2.svg.png"
    },
    methods: {
        myAgeTriple() {
            return `${this.myAge * 3}`
        },
        numberRandon() {
            return `${Math.random()}`
        }
    }
})
