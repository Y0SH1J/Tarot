// keep track of flipped cards
let flipCount = 0;
let maxFlip = 0;
let selectedCards = [];
let enterClicked = false;

// card information
let cardData = {};

// Ensure trailing slash on STATIC_URL
const STATIC = (typeof STATIC_URL !== 'undefined')
  ? (STATIC_URL.endsWith('/') ? STATIC_URL : STATIC_URL + '/')
  : '/static/'; // fallback

const JSON_URL = typeof CARDS_JSON_URL !== 'undefined' ? CARDS_JSON_URL : '/static/data/cards.json';


// Load JSON file once
fetch(JSON_URL)
    .then(response => response.json())
    .then(data => {
        cardData = data;
    })
    .catch(error => console.error("Error loading JSON:", error));

// Function to display all cards from selected arcana
function showArcana(arcanaName) {
    const container = document.getElementById("arcana-info");
    container.innerHTML = ""; // clear previous results

    const cards = cardData[arcanaName]; // e.g. cardData["Major"]
    console.log(cards);
    if (!cards) {
        container.innerHTML = "<p>No data found.</p>";
        return;
    }

    cards.forEach(card => {
        const cardRow = document.createElement("div");
        cardRow.classList.add("card-info-row");

        cardRow.innerHTML = `
            <img src="${STATIC}${card.image}" alt="${card.name}">
            <div class="card-text">
                <h3>${card.name}</h3>
                <p><strong>Upright:</strong> ${card.upright}</p>
                <p><strong>Reversed:</strong> ${card.reversed}</p>
                <p><strong>General:</strong> ${card.general}</p>
            </div>
        `;
        console.log(`${STATIC}${card.image}`);
        container.appendChild(cardRow);
    });
} 

// Function to flip the card on the reading page
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

// Function to shuffle the cards on reading page
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

    const page = document.body.dataset.page;

    if (page === "reading") {


    shuffleCards('.all-cards'); // pass your card container to function for shuffling ***READING***

    
    
    // Event listener for displaying number of cards to be selected ***READING***
    document.getElementById('card-form').addEventListener('submit', function(e) {
        e.preventDefault();
        maxFlip = parseInt(document.getElementById('num_cards').value);
        document.getElementById('form-message').textContent = `Select ${maxFlip} cards`;
        enterClicked = true;
    });

    // Event listener to reset everything for a new reading ***READING***
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
    }
    else {
        const buttonIds = Array.from(document.querySelectorAll('button'))
                       .map(btn => btn.id)
                       .filter(id => id); // removes empty strings

        document.getElementById("major").addEventListener("click", () => showArcana("Major"));
        document.getElementById("cups").addEventListener("click", () => showArcana("Cups"));
        document.getElementById("swords").addEventListener("click", () => showArcana("Swords"));
        document.getElementById("pentacles").addEventListener("click", () => showArcana("Pentacles"));
        document.getElementById("wands").addEventListener("click", () => showArcana("Wands"));
        // const output = document.getElementById("arcana-info");

        // buttonIds.forEach(id => {
        //     const btn = document.getElementById(id);
        //     btn.addEventListener('click', () => output.innerText = id);
        // })



    }

});
