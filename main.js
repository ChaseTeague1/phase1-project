// assign the form element to a variable.
const postForm = document.getElementById('post-form');
document.addEventListener('DOMContentLoaded', loadOffers)

function loadOffers(){
    fetch('http://localhost:3000/offers')
    .then(res => res.json())
    .then(offers => offers.forEach(offer => {
        console.log(offer)
    }))
}



// create a function to fetch offers.
function offersInfo(offer){
    let offerName = document.createElement('h2')
    let offerImg = document.createElement('img')
    let offerPrice = document.createElement('p')
    let offerDescrip = document.createElement('p');

    let card = document.createElement('div');
    let cardContainer = document.getElementById('card-container')
    card.className = 'card';
    cardContainer.appendChild(card);
}

// on page load display created offers.
// iterate through every offer and assign each of them a card to be displayed.
// create an offer button for each card.
// create a comment section for each card.
// create an add offer button that will allow user to post an offer
// create a light mode and dark mode button.
