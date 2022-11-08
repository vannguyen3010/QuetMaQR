const moreBuys = document.getElementById('js-buy-tickets');
const modalMore = document.getElementById('js-modal-more');
const closeModalmore = document.getElementById('js-modal-more-close');

function showBuyticketss() {
    modalMore.classList.add('open');
}
function hideBuyticketss() {
    modalMore.classList.remove('open');
}

 moreBuys.addEventListener('click', showBuyticketss)
 closeModalmore.addEventListener('click', hideBuyticketss)