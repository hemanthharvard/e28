let gameItems = ["Rock", "Paper", "Scissor"];
// Define the options of our application
const Game = {
    data() {
        return {
            gameChoices: gameItems,
            isNewGame: true,
            userSelection: null,
            computerSelection: this.generateComputerSelection(),
        }
    },
    methods: {
        startedNewGame() {
            this.isNewGame = false;
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

// Create a new Vue instance using our options
const app = Vue.createApp(Game).mount("#app");
