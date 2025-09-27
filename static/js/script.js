// keep track of flipped cards
let flipCount = 0;
let maxFlip = 0;
let selectedCards = [];
let enterClicked = false;

function flipCard(cardElement, cardName) {
    const inner = cardElement.querySelector('.card-inner');

    if (!inner.classList.contains('flipped') && flipCount < maxFlip) {
        inner.classList.toggle('flipped');
        flipCount++;
        selectedCards.push(cardName);
    }

    if (flipCount == maxFlip && enterClicked) {
        const overlay = document.getElementById('overlay');
        const list = document.getElementById('selected-cards-list');
        let cleanName = "";

        // Clean the key elements before mapping
        for (let i in selectedCards){
            cleanName = selectedCards[i].split("/").pop().replace(".jpg", "");
            selectedCards[i] = cleanName;
        }

        list.innerHTML = selectedCards.map(name => `<li>${name}</li>`).join('');
        overlay.style.display = 'flex';
    }
    return;
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

document.addEventListener('DOMContentLoaded', () => {

    shuffleCards('.all-cards'); // pass your card container to function for shuffling
    
    // Event listener for displaying number of cards to be selected
    document.getElementById('card-form').addEventListener('submit', function(e) {
        e.preventDefault();
        maxFlip = parseInt(document.getElementById('num_cards').value);
        document.getElementById('form-message').textContent = `Select ${maxFlip} cards`;
        enterClicked = true;
    });

    // Event listener to reset everything for a new reading
    document.getElementById("reset-overlay").addEventListener("click", () =>{

        // Flip all the cards back
        document.querySelectorAll(".card-inner").forEach(inner => {
            inner.classList.remove("flipped");
        });

        selectedCards = []; // empty list of selected cards

        // Hide overlay
        document.getElementById("overlay").style.display = "none";

        // Reset the form (number of cards input)
        document.getElementById("card-form").reset();

        enterClicked = false;

         document.getElementById('form-message').textContent = "";
    });

});
