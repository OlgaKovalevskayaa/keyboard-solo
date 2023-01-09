const wordChoose = document.querySelector('div.word');
let wordNow;
let i = 0;

const wordMistake = document.querySelector('.word-mistakes');
const wrongCount = document.querySelector('.wrong-count');
const correctCount = document.querySelector('.correct-count');

function getRandomWord() {
    const theWords = [
        "big",
        "small",
        "old",
        "new",
        "fast",
        "slow",
        "beautiful",
        "ugly",
        "cheap",
        "expensive"
    ];

    const min = 0;
    const max = 10;

    let number = Math.floor(Math.random() * (max - min) + min);


    //p.s. твои ифы можно заменить на theWords[number] — будет по смыслу то же, но куда лаконичнее
    if (number == 0) {
        number = theWords[0];
    } else {
        number = theWords[number];
    }
    return wordNow = number;
}
getRandomWord();


//функция — это чтобы слово разбить на буквы и обернуть в спаны
function spanWord(word) {
    wordChoose.innerHTML = word.split("").map((it) => `<span>${it}</span>`).join("");

}
spanWord(wordNow);


document.addEventListener("keypress", (event) => {
    const spans = wordChoose.querySelectorAll("span");
    if (event.key === wordNow[i]) {
        spans[i].className = "c";
        i++;
    } else {
        event.key === wordNow[i];
        spans[i].className = "w";
        wordMistake.textContent = ++wordMistake.textContent;
        wrongCount.textContent = ++wrongCount.textContent;
    }
    if (i == wordNow.length) {
        correctCount.textContent = ++correctCount.textContent;
        setTimeout(() => {
            getRandomWord();
            spanWord(wordNow);
            i = 0;
        }, 1000)
    }
})