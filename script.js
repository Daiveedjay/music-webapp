"use strict";
const artistCard = document.querySelectorAll(".artist__card");
const modal = document.querySelector(".modal");

artistCard.forEach((card) => {
  card.addEventListener("click", function () {
    modal.style.display = "flex";
    // console.log(card);
    // card.style.backgroundColor = "red";
  });
});
