const watchDocument = document.querySelector("#watch");
let seconds = 0;
let minuts = 0;
let hours = 0;
let interval;

function init() {
    watch();
    interval = setInterval(watch, 200);
}

const pause = () => {
    clearInterval(interval)
}

const clearAll = () => {
    clearInterval(interval)
    seconds = 0;
    minuts = 0;
    watchDocument.innerHTML = "00:00:00"
}

const digitZero = (digit) => {
    if (digit < 10) {
        return `0${digit}`;
    } else {
        return digit
    }
}


function watch() {
    seconds++;

    if (seconds === 60) {
        minuts++;
        seconds = 0;
    }

    if (minuts === 60) {
        minuts = 0;
        hours++;
    }

    watchDocument.innerHTML = digitZero(hours) + ":" + digitZero(minuts) + ":" + digitZero(seconds);
}