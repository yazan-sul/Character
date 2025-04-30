const themetoggle = document.getElementById('theme-toggle');
const body = document.body;

themetoggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('darkMode');
    
    // lightIcon.src = isDark ? 'img/lightmode.png' : 'img/darkMode.png';
});
let charCounter = 0;
let wordCounter = 0;
let sentenceCounter = 0;
function textAreaOnInput() {
    const textAreaField = document.getElementById('text-area');
    const ExcludeSpcaces = document.getElementById('ExcludeSpcaces').checked;
    const characterLimit = document.getElementById('CharacterLimit').checked;
    const charLimitValue = parseInt(document.getElementById('char-limit-value').value) || 0;
    
    const warning = document.getElementById('limit-warning');

    const textValue = textAreaField.value;

    const totalchar = document.getElementById('total-char');
    const totalword = document.getElementById('word-count');
    const totalsen = document.getElementById('senctence-count');

    let stats;
    
    if (ExcludeSpcaces) {
        stats = countExcludeSpaces(textValue);
    } else {
        stats = countIncludingSpaces(textValue);
    }
    totalchar.textContent = stats.charCounter;
    totalword.textContent = stats.wordCounter;
    totalsen.textContent = stats.sentenceCounter;

    if(characterLimit && charLimitValue > 0){
        if (stats.charCounter > charLimitValue) {
            warning.textContent = `over limit by ${stats.charCounter - charLimitValue}`;
            warning.style.color = 'red';
        } else {
            warning.textContent = '';
        }
    } else {
        warning.textContent = '';

    }
       
    
}
function countIncludingSpaces(textValue) {
    const nOfWord = textValue.split(/\s+/).filter(w => w !== '');
    const nOfSen = textValue.split(/[.!?]+/).filter(w => w.trim() !== '');
    return {
        wordCounter: nOfWord.length,
        sentenceCounter: nOfSen.length,
        charCounter: textValue.length
    };
}
function countExcludeSpaces(textValue) {
    const noSpaces = textValue.replace(/\s+/g, "");
    const charCounter = noSpaces.length;
    const nOfWord = textValue.split(/\s+/).filter(w => w !== '');
    const nOfSen = textValue.split(/[.!?]+/).filter(w => w.trim() !== '');
    const wordCounter = nOfWord.length;
    const sentenceCounter = nOfSen.length;

    return { charCounter, wordCounter, sentenceCounter };
}