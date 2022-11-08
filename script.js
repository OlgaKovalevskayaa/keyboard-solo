const wordChoose = document.querySelector('div.word');
let wordNow;

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
    } else if (number == 1) {
        number = theWords[1];
    } else if (number == 2) {
        number = theWords[2];
    } else if (number == 3) {
        number = theWords[3];
    } else if (number == 4) {
        number = theWords[4];
    } else if (number == 5) {
        number = theWords[5];
    } else if (number == 6) {
        number = theWords[6];
    } else if (number == 7) {
        number = theWords[7];
    } else if (number == 8) {
        number = theWords[8];
    } else if (number == 9) {
        number = theWords[9];
    } else if (number == 10) {
        number = theWords[10];
    };

    return wordNow = number;
}
getRandomWord();


//функция — это чтобы слово разбить на буквы и обернуть в спаны
function spanWord(word) {
    wordChoose.innerHTML = word.split("").map((it) => `<span>${it}</span>`).join("");

}
spanWord(wordNow);

let i = 0;
document.addEventListener("keypress", (event) => {
    const spans = wordChoose.querySelectorAll("span");
    if (event.key === wordNow[i]) {
        spans[i].className = "c";
        i++;
    } else {
        event.key === wordNow[i];
        spans[i].className = "w";
        //не знаю что такое в нижних 2-х строчках, но без них не работает правильно
        wordMistake.textContent = ++wordMistake.textContent;
        wrongCount.textContent = ++wrongCount.textContent;
        //
        i++;
    }
    //if (i === length.newWord) {
    //correctCount.textContent = ++correctCount.textContent;
    //setTimeout(RandomNextWord);
    // }
})