const langSpan = document.querySelector('.lang-span');
const langArray = ['', 'PHP', 'JavaScript', 'CSS'];
const postSpan = document.querySelector('.post-span');
const postArray = ['', 'Web Designer', 'Frontend Developer'];
const passtimeSpan = document.querySelector('.passtime-span');
const passtimeArray = ['', 'black&white photograpy', 'strawberries', 'flip-flops', 'strong tea'];
let counter = 1;

// langSpan.innerText = langArray[counter];

function spanChanger (span, array) {
    span.innerText = array[counter];
    span.addEventListener('click', () => {
        counter += 1;
        span.innerText = array[counter];
        if (counter === array.length-1) {
            counter = 0;
        }
    })
}

spanChanger(langSpan, langArray);
spanChanger(postSpan, postArray);
spanChanger(passtimeSpan, passtimeArray)


