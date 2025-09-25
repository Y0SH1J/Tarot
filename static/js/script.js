// keep track of flipped cards
let flipCount = 0;
const maxFlip = 20;

function flipCard(cardElement) {
    const inner = cardElement.querySelector('.card-inner');

    if (!inner.classList.contains('flipped') && flipCount < maxFlip) {
        inner.classList.toggle('flipped');
        flipCount++;
        return;
    }
}

function shuffleCards(containerSelector){
    const container = document.querySelector(containerSelector)
    const cards = Array.from(container.children); //get all of the cards as an array

    //Fisher-Yates shuffle
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    // Append shuffled cards back to container
    cards.forEach(card => container.appendChild(card));
}

window.addEventListener('DOMContentLoaded', () => {
    shuffleCards('.all-cards'); // pass your card container
});