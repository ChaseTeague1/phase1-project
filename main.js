let cardContainer = document.getElementById('card-container');

//grab form element and assign it to a variable
const form = document.querySelector(".add-post-form");

//grab submit button
const addListing = document.querySelector('.submit');

//*****DISPLAY PREVIOUS OFFERS FROM DB.JSON ON PAGE LOAD******//
//create an event listener to listen for page load.
document.addEventListener('DOMContentLoaded', () => {
    //create on submit event listener for form
    form.addEventListener('submit', (e) => {
        console.log('I am working')
        e.preventDefault();
        createOffer(e.target);
        form.reset();
    })
    loadOffers();
})

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
        <img class="image" src="${offer.image}">
        <h4 id="item-price">$${offer.price}</h4>
        <p id="description">${offer.description}</p>
        <button class ="offer-button" id="${offer.id}">Make Offer</button>
    </div>
    `
    //append card variable to the card container
    cardContainer.appendChild(card)
}

//*****ADD LISTING BUTTON VIA POST REQUEST********//
//create callback function that holds POST request
function createOffer(){
    let name = document.getElementById('name');
    let image = document.getElementById('image');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    fetch('http://localhost:3000/offers', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            Accept : 'application/json',
        },
        body : JSON.stringify({
            'name' : name.value,
            'image': image.value,
            'description': description.value,
            'price': price.value,
        })
    })
    .then(res => res.json())
    .then(data => {
        //create a newOffer element that will be appended to cardContainer on submit
        let newOffer = offerInfo(data);
        cardContainer.append(newOffer)
    })
}
