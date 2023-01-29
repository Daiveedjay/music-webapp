"use strict";
const artistCard = document.querySelectorAll(".artist__card");

artistCard.forEach((card) => {
  card.addEventListener("click", function () {
    console.log(card);
    // card.style.backgroundColor = "red";
  });
});
