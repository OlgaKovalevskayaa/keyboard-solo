const word = document.querySelector('div.word');
const spans = document.querySelectorAll('div.word span');


for (let span of spans) {
    console.log(span);

}

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


    for (let i = 0; i < number.length; i++) {
        console.log(number[i]);
        document.addEventListener("keydown", highlight);

        function highlight(event) {
            if (event.key == number[i]) {
                //тогда она подсвечивается зеленым 
                spans[i].className = "c";
            } else {
                // красным
                spans[i].className = "w";
            }
        };
    }

    word.textContent = `${number}`;
}
getRandomWord();