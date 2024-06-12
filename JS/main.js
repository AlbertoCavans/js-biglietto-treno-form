/* COLLEGAMENTI */

const userName = document.getElementById("username");
const routeLength = document.getElementById("routeLength");
const userAge = document.getElementById("userAge");
const submitData = document.getElementById("submitData");

const ticketUserName = document.getElementById("ticketUserName");
const ticketDiscount = document.getElementById("ticketDiscount");
const ticketCarriage = document.getElementById("ticketCarriage");
const ticketLabelPrice = document.getElementById("ticketPrice");

/* AZIONI  */

submitData.addEventListener("click", function () {
  const passengerName = userName.value;
  const distance = parseInt(routeLength.value);
  const age = parseInt(userAge.value);
  const trainCarriage = Math.floor(Math.random() * 8 + 1);

  const priceOnlyByDistance = distance * 0.21;

  let discount;
  let discountText;
  if (passengerName && !isNaN(distance) && distance > 0 && !isNaN(age)) {
    /* Calculate discounts */
    /*!!!!! Underage discount */
    if (age < 18) {
      discount = (priceOnlyByDistance / 100) * 20;
      discountText = "Under 18";
    } else if (age >= 65) {
      /*!!!!! NO discount */
      discount = (priceOnlyByDistance / 100) * 60;
      discountText = "Over65";
    } else if (age >= 18) {
      /*  !!!!! OVER65 discount */
      discount = (priceOnlyByDistance / 100) * 0;
      discountText = "Adulto";
    }

    /* Final price */
    const finalPrice = priceOnlyByDistance - discount;
    const ticketPrice = finalPrice.toFixed(2) + "€";

    /* Print final price */

    ticketUserName.innerText = passengerName;
    ticketDiscount.innerText = discountText;
    ticketCarriage.innerText = trainCarriage;
    ticketLabelPrice.innerText = ticketPrice;
  } else {
    alert(
      "Dati inseriti non corretti, inserire km con SOLO tasti numerici ed età SOLO con tasti numerici. Inoltre i Km devono essere maggiori di zero"
    );
  }
});
