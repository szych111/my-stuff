const langSpan = document.querySelector('.lang-span');
const langArray = ['JavaScript', 'PHP', 'CSS'];
const postSpan = document.querySelector('.post-span');
const postArray = ['Frontend Developer', 'Web Designer'];
const passtimeSpan = document.querySelector('.passtime-span');
const passtimeArray = ['black&white photograpy', 'strawberries', 'flip-flops'];
const futureSpan = document.querySelector('.future-span');
const futureArray = ['programming-guru', 'triathlonist', 'gardener'];

let counter = 0;

window.addEventListener('DOMContentLoaded', () => {
    langSpan.textContent = langArray[counter];
    postSpan.textContent = postArray[counter];
    passtimeSpan.textContent = passtimeArray[counter];
    futureSpan.textContent = futureArray[counter];

  })

function spanChanger(span, array) {
    span.addEventListener('click', () => {
        counter++;
        if (counter > array.length - 1) {
            counter = 0;
        }
        span.textContent = array[counter]
    })
}

spanChanger(langSpan, langArray);
spanChanger(postSpan, postArray);
spanChanger(passtimeSpan, passtimeArray);
spanChanger(futureSpan, futureArray)

///--- slider ---///

const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".carousel__btn--right");
const prevBtn = document.querySelector(".carousel__btn--left");

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
    if(targetIndex === 0) {
        prevBtn.classList.add("is-hidden");
        nextBtn.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
        nextBtn.classList.add("is-hidden");
        prevBtn.classList.remove("is-hidden");
    } else {
        prevBtn.classList.remove("is-hidden");
        nextBtn.classList.remove("is-hidden");
    }
}

nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
    
    moveToSlide(track, currentSlide, nextSlide)
    hideShowArrows(slides, prevBtn, nextBtn, nextIndex)
})

prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)

    moveToSlide(track, currentSlide, prevSlide)
    hideShowArrows(slides, prevBtn, nextBtn, prevIndex)
})


