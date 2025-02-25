const d = document;

const buttons = d.querySelectorAll('.rating-btns');
const btnSubmit = d.getElementById('btn-submit');
const cardRating = d.querySelector('.card-rating');
const cardThanks = d.querySelector('.card-thanks');
const outOf = d.getElementById('rating-selected');

let selectedRating = null;

function ratingSelected(e){
    selectedRating = e.target.getAttribute('data-value');
    if(selectedRating >= 1 && selectedRating <= 5){
        outOf.textContent = selectedRating;
    }
}

function changeCard(){
    if(selectedRating){
        cardRating.classList.add('hidden');
        cardThanks.classList.remove('hidden');
        cardThanks.classList.add('visible');
    }
}

buttons.forEach(btn =>{
    btn.addEventListener('click', ratingSelected);
});

btnSubmit.addEventListener('click', changeCard);



