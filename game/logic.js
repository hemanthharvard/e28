// All the elements on the page we'll work with

window.onload = function() {
    let playButton = document.querySelector('#playButton');
    let userSelectionMessage = document.querySelector('#userSelectionMessage');
    let computerSelectionMessage = document.querySelector('#computerSelectionMessage');
    let resultMessage = document.querySelector('#resultMessage');
    let winMessage = document.querySelector('#winMessage');
    let loseMessage = document.querySelector('#loseMessage');
    let tieMessage = document.querySelector('#tieMessage');
    let playerChoice = document.querySelector('input[name="choice"]:checked').value;

    const img = new Image();   // Create new img element
    img.src = './images/sad.png'; // Set source path

    // Hide restuls on load
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
        let result = "lose";

        switch(playerChoice) {
            case "Rock":
                console.log("Rock");
                break;
            case "Paper":
                console.log("Paper");
                break;
            case "Scissor":
                console.log("Scissor");
                break;
        }

        return result;
    }

    function play() {
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
