let gameItems = ["Rock", "Paper", "Scissor"];
// Define the options of our application
const Game = {
    data() {
        return {
            gameChoices: gameItems,
            isNewGame: true,
            userSelection: null,
            computerSelection: this.generateComputerSelection(),
            scoreBoardRoundsResult: [],
            computerScoreBoard: 0,
            userScoreBoard: 0
        }
    },
    methods: {
        playGame() {
            this.isNewGame = false;
            this.makeUserSelection();
            this.makeComputerSelection();
            const result = this.gameResult(this.userSelection, this.computerSelection);
            switch (result) {
                case 'win':
                    this.userScoreBoard++;
                    this.scoreBoardRoundsResult.push({
                        number: this.scoreBoardRoundsResult.length + 1,
                        winner: 'User',
                        userSelection: this.userSelection,
                        computerSelection: this.computerSelection
                    });
                    break;
                case 'lose':
                    this.computerScoreBoard++;
                    this.scoreBoardRoundsResult.push({
                        number: this.scoreBoardRoundsResult.length + 1,
                        winner: 'Computer',
                        userSelection: this.userSelection,
                        computerSelection: this.computerSelection
                    });
                    break;
                case 'tie':
                    this.scoreBoardRoundsResult.push({
                        number: this.scoreBoardRoundsResult.length + 1,
                        winner: 'Tie',
                        userSelection: this.userSelection,
                        computerSelection: this.computerSelection
                    });
                    break;
            }
        },
        resetGame() {
            this.isNewGame = true;
        },
        makeUserSelection() {
            this.userSelection = document.querySelector('input[name="choice"]:checked').value;
        },
        generateComputerSelection() {
            return gameItems[Math.floor(Math.random() * gameItems.length)];
        },
        makeComputerSelection() {
            this.computerSelection = this.generateComputerSelection();
        },
        gameResult(playerChoice, computerChoice) {
            let result = "win";
    
            switch(playerChoice) {
                case "Rock":
                    if(computerChoice === "Rock") {
                        result = "tie";
                    }
                    else if(computerChoice === "Paper") {
                        result = "lose";
                    }
                    break;
                case "Paper":
                    if(computerChoice === "Paper") {
                        result = "tie";
                    }
                    else if(computerChoice === "Scissor") {
                        result = "lose";
                    }
                    break;
                case "Scissor":
                    if(computerChoice === "Scissor") {
                        result = "tie";
                    }
                    else if(computerChoice === "Rock") {
                        result = "lose";
                    }
                    break;
            }
    
            return result;
        },
        getResultMessage() {
            const result = this.gameResult(this.userSelection, this.computerSelection);
            let message = "win";

            switch(result) {
                case "win":
                    message = "You won!";
                    break;
                case "lose":
                    message = "You lost!";
                    break;
                case "tie":
                    message = "It's a tie!";
                    break;
            }

            return message;
        },
        getResultImage() {
            const result = this.gameResult(this.userSelection, this.computerSelection);
            let image = "happy";

            switch(result) {
                case "win":
                    image = "happy";
                    break;
                case "lose":
                    image = "sad";
                    break;
                case "tie":
                    image = "tie";
                    break;
            }

            return image;
        }
    }
}

// Define the options of the score board component
const ScoreBoard = {
    name: 'ScoreBoard',
    data() {
        return {
        }
    },
    props: {
        number: {
            type: Number,
            default: 0
        },
        winner: {
            type: String,
            default: ''
        },
        userSelection: {
            type: String,
            default: ''
        },
        computerSelection: {
            type: String,
            default: ''
        },
        scoreBoardRoundsResult: {
            type: Array,
            default: []
        }
    },
    methods: {
    },
    template: '#score-board',
};

// Create a new Vue instance using our options
const app = Vue.createApp(Game);

// Globally register the component with our root Vue instance
app.component('score-board', ScoreBoard);

// Mount the root Vue instance
app.mount('#app');
