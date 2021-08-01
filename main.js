const langSpan = document.querySelector('.lang-span');
const langArray = ['', 'PHP', 'JavaScript', 'CSS'];
let counter = 1;

langSpan.innerText = langArray[counter];

langSpan.addEventListener('click', () => {
    counter += 1;
    langSpan.innerText = langArray[counter];
    if (counter === langArray.length-1) {
        counter = 0;
    }
    
})


