// DOM Elements
let timerEl = document.getElementById("timer-el");
let totalTimeEl = document.getElementById("total-time-el");
let titleEl = document.getElementById("title");
// Global State
let isrunning = false;
let timer = 0;
let totalStudiedTime = 0 

// Timer Functions
function formatTime(timeInSeconds) {
    let current = timeInSeconds;
    let hours = Math.floor(current/3600);
    current = current - hours*3600;
    let minutes = Math.floor(current/60);
    current = current - minutes*60;
    let seconds = current;
    return String(hours).padStart(2, '0') + ":" + 
           String(minutes).padStart(2, '0') + ":" + 
           String(seconds).padStart(2, '0');
}

function second() {
    console.log("in second func")
    if (isrunning == true) {
        timer += 1;
        timerEl.innerText = formatTime(timer);
        console.log(timerEl.innerText);
        titleEl.innerText = "Timer - " + formatTime(timer);
    }
}

// Control Functions
function startTimer() {
    console.log("startTimer");
    isrunning = true;
}

function pauseTimer() {
    console.log("stopTimer");
    isrunning = false;
}
function doneTimer() {
    console.log("doneTimer");
    totalStudiedTime += timer;
    console.log(totalStudiedTime);
    totalTimeEl.innerText = formatTime(totalStudiedTime);
    
    // Reset current timer
    timer = 0;
    timerEl.innerText = "00:00:00";
    isrunning = false;
    titleEl.innerText = "Timer";
}
// Initialize   
(function () {
    setInterval(second, 1000)
    console.log("This function runs immediately!");
})();




