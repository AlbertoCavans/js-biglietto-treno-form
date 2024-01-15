/* COLLEGAMENTI */

/* const userName = document.getElementById("username"); */
const routeLength = document.getElementById("routeLength");
const userAge = document.getElementById("userAge");
const submitData = document.getElementById("submitData");
const ticketPrice = document.getElementById("ticket");

/* AZIONI  */

submitData.addEventListener("click", function () {
  const distance = parseInt(routeLength.value);
  const age = parseInt(userAge.value);

  const priceOnlyByDistance = distance * 0.21;

  let discount;
  if (!isNaN(distance) && !isNaN(age)) {
    /* Calculate discounts */
    /*!!!!! Underage discount */
    if (age < 18) {
      discount = (priceOnlyByDistance / 100) * 20;
      console.log(discount);
    } else if (age >= 18) {
      /*!!!!! NO discount */
      discount = (priceOnlyByDistance / 100) * 0;
      console.log(discount);
    } else if (age > 65) {
      /*  !!!!! OVER65 discount */
      discount = (priceOnlyByDistance / 100) * 60;
      console.log(discount);
    }

    /* Final price */
    const finalPrice = priceOnlyByDistance - discount;

    /* Print final price */
    const labelPrice =
      "Il tuo biglietto del treno costerà: " + finalPrice.toFixed(2) + "€";
    ticket.innerText = labelPrice;
  } else {
    alert(
      "Dati inseriti non corretti, inserire km con SOLO tasti numerici ed età SOLO con tasti numerici. Ricarica la pagina."
    );
  }
});
