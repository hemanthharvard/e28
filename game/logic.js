// All the elements on the page we'll work with

window.onload = function() {
    let playButton = document.querySelector('#playButton');
    let results = document.querySelector('#results');
    let flipMessage = document.querySelector('#flipMessage');
    let winMessage = document.querySelector('#winMessage');
    let loseMessage = document.querySelector('#loseMessage');

    playButton.addEventListener('click', play);

    function play() {
        console.log('Play clicked!!!');
    }
};
