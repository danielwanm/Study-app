// DOM Elements
let timerEl = document.getElementById("timer-el");

// Global State
let isrunning = false;
let timer = 0;
let totalStudiedTime = 0 

// Timer Functions
function second() {
    console.log("in second func")
    if (isrunning == true) {
        timer +=1
        let current = timer
        let hours = Math.floor(current/3600)
        current = current - hours*3600
        let minutes = Math.floor(current/60)
        current = current - minutes*60
        let seconds = current
        let formatedTime = String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0')
        timerEl.innerText = formatedTime
        console.log(formatedTime)
    }
    else {
        
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
    console.log("doneTimer")




}
// Initialize   
(function () {
    setInterval(second, 1000)
    console.log("This function runs immediately!");
})();




