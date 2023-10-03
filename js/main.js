let app = new Vue({
    el: '.main',
    data: {
        showMain: true,
        showSocial: false,
        showAchivments: false,
        showQuestions: false,
        showResult: false,
        number: 0,
        score: {
            'zerg': 0,
            'promal': 0,
            'protoss': 0,
            'taldarim': 0,
            'terran': 0,
            },
        totalGame: localStorage.getItem('sc2TotalGame') ? 
        JSON.parse(localStorage.getItem
            ('sc2TotalGame')) : {
                'zerg': 0,
                'promal': 0,
                'protoss': 0,
                'taldarim': 0,
                'terran': 0,
                'infested': 0,
                'hybrid': 0
            },
        totalGames: localStorage.getItem('sc2TotalGames') ? 
            localStorage.getItem('sc2TotalGames') : 0, 
        questions: questions,
        results: results, 
        resultRase: 'infested',
    },
    methods: {
        goToMain() {
            this.showMain = true
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showResult = false 
        },
        goToSocial() {
            this.showMain = false
            this.showSocial = true
            this.showAchivments = false
            this.showQuestions = false
            this.showResult = false 
        },
        goToAchivments() {
            if (this.totalGames > 0) {
                this.showMain = false
                this.showSocial = false
                this.showAchivments = true
                this.showQuestions = false
                this.showResult = false 
            } else {
                this.goToQuestions()        
            }
        },
        goToQuestions() {
            this.score = {
                'zerg': 0,
                'promal': 0,
                'protoss': 0,
                'taldarim': 0,
                'terran': 0, 
            }
            this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = true
            this.showResult = false 
        },
        goToResults(race) {
            this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showResult = true 
            this.resultRase = race
        },  
        nextQuestions(answer) {
            if(this.number == 24) { // всего 25 вопросов
                this.number = 0
                //this.endGame();
            } else {
                this.number++
            }
            eval(answer)
        }
    }
}) 