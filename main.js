document.addEventListener('DOMContentLoaded', loadOffers)

function loadOffers(){
    fetch('http://localhost:3000/offers')
    .then(res => res.json())
    .then(offers => offers.forEach(offer => {
        console.log(offer)
    }))
}