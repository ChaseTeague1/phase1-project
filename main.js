document.addEventListener('DOMContentLoaded', loadOffers)

function loadOffers(){
    fetch('http://localhost:3000/offers')
    .then(res => res.json())
    .then(offers => offers.forEach(offer => {
        console.log(offer)
    }))
}

/*
assign the form element to a variable.
create a function to fetch offers.
on page load display created offers.
iterate through every offer and assign each of them a card to be displayed.
create an offer button for each card.
create a comment section for each card.
create an add offer button that will allow user to post an offer
create a light mode and dark mode button.
*/