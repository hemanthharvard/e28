// All the elements on the page we'll work with

window.onload = function() {
    let playButton = document.querySelector('#playButton');
    let userSelectionMessage = document.querySelector('#userSelectionMessage');
    let computerSelectionMessage = document.querySelector('#computerSelectionMessage');
    let winMessage = document.querySelector('#winMessage');
    let loseMessage = document.querySelector('#loseMessage');
    let tieMessage = document.querySelector('#tieMessage');
    let playerChoice = document.querySelector('input[name="choice"]:checked').value;

    // Initialize results to none
    winMessage.style.display = "none";
    loseMessage.style.display = "none";
    tieMessage.style.display = "none";

    playButton.addEventListener('click', play);

    function computerSelection() {
        const myArray = [
            "Rock",
            "Paper",
            "Scissor"
          ];
          return myArray[Math.floor(Math.random() * myArray.length)];
    }

    function gameResult(playerChoice, computerChoice) {
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
    }

    function play() {
        // Hide results for new game
        winMessage.style.display = "none";
        loseMessage.style.display = "none";
        tieMessage.style.display = "none";
        playerChoice = document.querySelector('input[name="choice"]:checked').value;
        userSelectionMessage.innerHTML = "You selected: " + playerChoice;
        const computerChoice = computerSelection();
        computerSelectionMessage.innerHTML = "Computer selected: " + computerChoice;
        switch(gameResult(playerChoice, computerChoice)) {
            case "win": 
                winMessage.style.display = "block";
                break;
            case "lose": 
                loseMessage.style.display = "block";
                break;
            case "tie": 
                tieMessage.style.display = "block";
                break;
        }
    }
};
