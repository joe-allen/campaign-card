import 'sanitize.css';
import './css/variables.css';
import './css/index.css';
import donors from './assets/donors.json'

const campaignCard = () => ({
  _cache() {
    let cache = (
      {
        cardIsFront: true,
      }
    );
    return cache;
  },
  flip(e, data) {
    let donorsTableSibling = document.querySelector('.card_back--article-table_thead');
    // toggle cardFront boolean
    data.cardIsFront = !data.cardIsFront;

    // if card front visible
    if(data.cardIsFront) {

      // card back animation leave
      data.cardBack.classList.add('flip_out');

      // wait for card back animation end
      data.cardBack.addEventListener("animationend", function(){
        // card back hide
        data.cardBack.classList.add('hide');
        // card front remove hide
        data.cardFront.classList.remove('hide');
        // card back animation enter
        data.cardFront.classList.add('flip_in');
      }, { once: true });

      data.cardFront.addEventListener("animationend", function(){
        // remove ui classes
        data.cardBack.classList.remove('flip_out');
        data.cardFront.classList.remove('flip_in');
      }, { once: true });

    } else {

      // card front animation leave
      data.cardFront.classList.add('flip_out');

      // wait for card front animation end
      data.cardFront.addEventListener("animationend", function(){
        // card back remove hide
        data.cardFront.classList.add('hide');
        // card front hide
        data.cardBack.classList.remove('hide');
        // card back animation enter
        data.cardBack.classList.add('flip_in');
      }, { once: true });

      // wait for card back animation
      data.cardBack.addEventListener("animationend", function(){
        // remove ui classes
        data.cardFront.classList.remove('flip_out');
        data.cardBack.classList.remove('flip_in');
      }, { once: true });
    }
  },
  setDonors(data) {
    let donor;
    let total = 0;
    let donorsTableSibling = document.querySelector('.card_back--article-table_thead');

    data.donors.map((el, i) => {
      donor =
        `<div class="card_back--article-table_trow key_${i}">
          <div class="card_back--article-table_td">${el.name}</div>
          <div class="card_back--article-table_td">${el.amount}</div>
          <div class="card_back--article-table_td">${el.type}</div>
        </div>`;

      total = el.amount + total;

      // append donor(s) after `div.card_back--article-table_thead`
      donorsTableSibling.insertAdjacentHTML("afterend", donor);
    });

    return total;
  },
  setDonorsTotal(total) {
    let elements = document.querySelectorAll('.donorTotal--js');

    // loop elements
    for(let i = 0; i < elements.length; i++) {
      // display total donated
      elements[i].textContent = total;
    }
  },
  setNumOfDonors(total) {
    let elements = document.querySelectorAll('.numOfDonors--js');

    // loop elements
    for(let i = 0; i < elements.length; i++) {
      // display total num of donors
      elements[i].textContent = total;
    }
  },
  // init app
  init() {

    // store data
    let data = this._cache();
    data.donors = donors;
    data.card = document.getElementById("card");
    data.cardFront = document.querySelector(".card_front--container");
    data.cardBack = document.querySelector(".card_back--container");

    // build donor data
    let total = this.setDonors(data);
    this.setDonorsTotal(total);
    this.setNumOfDonors(data.donors.length);

    // listen for card click
    data.card.addEventListener("click", (e) => {

      // do not flip if cta btn is clicked
      if(!e.target.classList.contains('card_back__cta')) {
        // flip front/back
        this.flip(e, data);
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // store factory function
  // in app variable
  let app = campaignCard();
  // call campaign init
  app.init();
})