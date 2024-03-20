const passionsWrapper = document.querySelector("[data-span=passions]");
const virtuesWrapper1 = document.querySelector("[data-span=virtues-1]");
const virtuesWrapper2 = document.querySelector("[data-span=virtues-2]");
const placesWrapper = document.querySelector("[data-span=places]");
const passions = ["user experience", "user interface", "UX/UI"];
const virtues = ["disciplined", "creative"];
const places = [
  "in America",
  "in Western Hemisphere",
  "somewhere where it's earlier",
];
const future = ["programming-guru", "triathlonist", "gardener"];

console.log(virtuesWrapper1);
let counter = 0;

window.addEventListener("DOMContentLoaded", () => {
  passionsWrapper.textContent = passions[counter];
  virtuesWrapper1.textContent = virtues[counter];
  virtuesWrapper2.textContent = virtues[counter + 1];
  placesWrapper.textContent = places[counter];
});

function spanChanger(span, array) {
  span.addEventListener("click", () => {
    counter++;
    if (counter > array.length - 1) {
      counter = 0;
    }
    span.textContent = array[counter];
  });
}

spanChanger(passionsWrapper, passions);
spanChanger(virtuesWrapper1, virtues);
spanChanger(virtuesWrapper2, virtues);
spanChanger(placesWrapper, places);

///--- slider ---///

const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".carousel__btn--right");
const prevBtn = document.querySelector(".carousel__btn--left");

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
  if (targetIndex === 0) {
    prevBtn.classList.add("is-hidden");
    nextBtn.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    nextBtn.classList.add("is-hidden");
    prevBtn.classList.remove("is-hidden");
  } else {
    prevBtn.classList.remove("is-hidden");
    nextBtn.classList.remove("is-hidden");
  }
};

nextBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
});

prevBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
});
