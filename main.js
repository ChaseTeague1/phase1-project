let cardContainer = document.getElementById('card-container');

//*****DISPLAY PREVIOUS OFFERS FROM DB.JSON ON PAGE LOAD******//
//create an event listener to listen for page load.
document.addEventListener('DOMContentLoaded', loadOffers)

//make a callback function to pass event listener
function loadOffers(){
//callback function will fetch and load each offers
    fetch('http://localhost:3000/offers')
    .then(res => res.json())
    .then(offers => {
        offers.forEach(offer => {
            offerInfo(offer)
        })
    })
}

//create a function called offerInfo that will take in an offer and create a card for it
function offerInfo(offer){
    //create a card variable
    let card = document.createElement('div');
    //populate card innerHtml with each offers info
    card.innerHTML = `
    <div class="card">
        <h1 id="item-name">${offer.name}</h1>
        <p id="user-name">By: Chase Teague</p>
        <img class="image" src="${offer.image}">
        <h4 id="item-price">${offer.price}</h4>
        <p id="description">${offer.description}</p>
        <button class ="offer-button" id="${offer.id}">Make Offer</button>
    </div>
    `
    //append card variable to the card container
    cardContainer.appendChild(card)
}