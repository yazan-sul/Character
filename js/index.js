const lightIcon = document.querySelector('.header-img');
const body = document.body;

lightIcon.addEventListener('click', () => {
    const isDark = body.classList.toggle('darkMode');

    lightIcon.src = isDark ? 'img/lightmode.png' : 'img/darkMode.png';
});
let charCounter = 0;
let wordCounter = 0;
let sentenceCounter = 0;
function textAreaOnInput() {
    const textAreaFiled = document.getElementById('text-area');
    const textValue = textAreaFiled.value;

    charCounter = textValue.length;
    const nOfWord = textValue.split(" ").filter(w => w !== '');
    const nOfSen = textValue.split(". ").filter(w => w !== '');
    wordCounter = nOfWord.length;
    sentenceCounter = nOfSen.length;
    console.log(`Characters: ${charCounter}`);
    console.log(`Words: ${wordCounter}`);
    console.log(`Sentences: ${sentenceCounter}`);
    totalchar = document.getElementById('total-char');
    totalword = document.getElementById('word-count');
    totalsen = document.getElementById('senctence-count');
    totalchar.textContent = charCounter;
    totalword.textContent = wordCounter;
    totalsen.textContent = sentenceCounter;
}

