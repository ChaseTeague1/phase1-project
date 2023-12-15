//*****DISPLAY PREVIOUS OFFERS FROM DB.JSON ON PAGE LOAD******//
//create an event listener to listen for page load.
document.addEventListener('DOMContentLoaded', loadOffers)

//make a callback function to pass event listener
function loadOffers(offer){
//callback function will fetch and load offers creating each offer its on card
    fetch('http://localhost:3000/offers')
    .then(res => res.json())
    .then(offers => offers.forEach(offer => {
        offerInfo(offer)
    }));
}

