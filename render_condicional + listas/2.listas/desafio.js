new Vue({
    el: '#desafio',
    data: {
        livro: {
            titulo: 'O senhor dos Anéis',
            autor: 'J.R.R. Tolkiens',
            volume: 3
        },
        aluno: {
            id: 10,
            nome: 'Maria',
            notas: [
                7.67,
                8.33,
                6.98,
                9.21
            ]
        },
        isVisible: true,
        listaFrutas: [
            'uva',
            'melancia',
            'pêra',
            'maçã',
            'banana',
            'laranja',
            'mamão'
        ]
    },
    computed: {

    }
})
