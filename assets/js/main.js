const passionsWrapper = document.querySelector("[data-span=passions]");
const virtuesWrapper1 = document.querySelector("[data-span=virtues-1]");
const virtuesWrapper2 = document.querySelector("[data-span=virtues-2]");
const placesWrapper = document.querySelector("[data-span=places]");
//const nonsenseWrapper = document.querySelector("[data-span=nonsense]");
//const senseWrapper = document.querySelector("[data-span=sense]");
const passions = ["user experience", "user interface", "UX/UI"];
//const virtues = ["disciplined", "creative"];
const places = ["where it's earlier", "where it's sunnier", "else"];
const future = ["programming-guru", "triathlonist", "gardener"];

let counter = 0;

window.addEventListener("DOMContentLoaded", () => {
  passionsWrapper.textContent = passions[counter];
  //virtuesWrapper1.textContent = virtues[counter];
  //virtuesWrapper2.textContent = virtues[counter + 1];
  placesWrapper.textContent = places[counter];
  //nonsenseWrapper.classList.add("display-none");
});

function spanChanger(span, array) {
  span.addEventListener("click", () => {
    counter++;
    if (counter > array.length - 1) {
      counter = 0;
    }
    span.textContent = array[counter];
    // if (span === virtuesWrapper1 || span === virtuesWrapper2) {
    //   if (
    //     (virtuesWrapper1.textContent === array[1] &&
    //       virtuesWrapper2.textContent === array[1]) ||
    //     (virtuesWrapper1.textContent === array[0] &&
    //       virtuesWrapper2.textContent === array[0])
    //   ) {
    //     document
    //       .querySelector("[data-span=nonsense]")
    //       .classList.remove("display-none");
    //     document
    //       .querySelector("[data-span=sense]")
    //       .classList.add("display-none");
    //   } else {
    //     document
    //       .querySelector("[data-span=sense]")
    //       .classList.remove("display-none");
    //     document
    //       .querySelector("[data-span=nonsense]")
    //       .classList.add("display-none");
    //   }
    // }
  });
}

spanChanger(passionsWrapper, passions);
// spanChanger(virtuesWrapper1, virtues);
// spanChanger(virtuesWrapper2, virtues);
spanChanger(placesWrapper, places);
