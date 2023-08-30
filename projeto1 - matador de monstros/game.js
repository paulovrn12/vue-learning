new Vue({
    el: "#game",
    data: {
        gameStart: false,// game iniciado ou não

        // valores do objetivo
        lifeObjective: 12000,// valor de vida do objetivo
        atackBaseObjective: [300, 500],//valor de ataque base do objetivo

        //valores do campeão
        lifeChampion: 4000,// valor de vida do campeão
        atackBaseChampion: [100, 300, 100, false],// ataca com valor entre 100 e 200 e cura 75% do dano causado
        atackQspellChampion: [400, 600, 75, false],// ataca com valor entre 100 e 200 e cura 75% do dano causado e se a abilidade foi usada agora
        atackWspellChampion: [100, 1, false],// impede 100% de ataques por 1 rodada e se a abilidade foi usada agora
        atackEspellChampion: [100, 2, false],// impede 100% de ataques por 2 rodada e se a abilidade foi usada agora
        atackRspellChampion: [700, 900, 100, 2, false],// ataca com valor entre 400 e 500 e cura 75% do dano causado e pode ser usado 2 vez

        //turnos
        turnNumber: 1,// numero do turno atual
        historyTurns: []//histórico dos turnos [{}]
    },
    methods: {
        randomValues(min, max) {
            return Math.floor(Math.random() * (max - min)) + min//gera valores inteiros aleatorios em um intervalo (range)
        },
        controllerOfTurns() {
            // controlador de turno
            this.turnNumber += 1

        },
        aSpell() {
            console.log('Auto-atack activated')
            atackValue = this.randomValues(this.atackBaseChampion[0], this.atackBaseChampion[1])
            this.lifeObjective -= atackValue
            curePercent = (this.atackBaseChampion[2] / 100)
            if (this.lifeChampion <= 4000) {
                this.lifeChampion += atackValue * curePercent
            }
        },
        qSpell() {
            console.log('Q spell activated')
            atackValue = this.randomValues(this.atackQspellChampion[0], this.atackQspellChampion[1])
            this.lifeObjective -= atackValue
            curePercent = (this.atackQspellChampion[2] / 100)
            if (this.lifeChampion <= 4000) {
                this.lifeChampion += atackValue * curePercent
            }
        },
        wSpell() {
            console.log('W spell activated')
        },
        eSpell() {
            console.log('E spell activated')
        },
        rSpell() {
            console.log('R spell activated')
            atackValue = this.randomValues(this.atackRspellChampion[0], this.atackRspellChampion[1])
            this.lifeObjective -= atackValue
            curePercent = (this.atackRspellChampion[2] / 100)
            if (this.lifeChampion <= 4000) {
                this.lifeChampion += atackValue * curePercent
            }
        },
        atackObjective() {
            atackValue = this.randomValues(this.atackBaseObjective[0], this.atackBaseObjective[1])
            this.lifeChampion -= atackValue
        },
        executeAspell() {
            this.aSpell()
            this.atackObjective()
            this.controllerOfTurns()
        },
        executeQspell() {
            this.qSpell()
            this.atackObjective()
            this.controllerOfTurns()
        },
        executeWspell() {
            this.wSpell()
            this.atackObjective()
            this.controllerOfTurns()
        },
        executeEspell() {
            this.eSpell()
            this.atackObjective()
            this.controllerOfTurns()
        },
        executeRspell() {
            this.rSpell()
            this.atackObjective()
            this.controllerOfTurns()
        }
    },
    computed: {

    },
    watch: {

    }
})
