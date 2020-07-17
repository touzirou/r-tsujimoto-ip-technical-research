{
    "use strict";

    let nIntervId = null;
    let time = 0;
    const interval = 10;

    const start = () => {
        if (nIntervId !== null) {
            return;
        }
        nIntervId = setInterval(refresh, interval);
    }

    const stop = () => {
        if (nIntervId === null) {
            return;
        }
        clearInterval(nIntervId);
    }

    const clear = () => {
        if (nIntervId === null) {
            return;
        }
        clearInterval(nIntervId);
        time = 0;
        document.getElementById("time").innerHTML = "00:00:00";
        nIntervId = null;
    }

    const refresh = () => {
        time = time + interval;
        const minute = ("00" + Math.floor((time / 1000) / 60)).slice(-2);
        const sec    = ("00" + Math.floor((time / 1000) % 60)).slice(-2);
        const msec   = ("00" + Math.floor(time / 10)).slice(-2);
        document.getElementById("time").innerHTML = minute + ":" + sec + ":" + msec;
    }

    const init = () => {
        document.getElementById("timer-start").addEventListener("click", start);
        document.getElementById("timer-stop").addEventListener("click", stop);
        document.getElementById("timer-clear").addEventListener("click", clear);
    }

    window.onload = init;
}