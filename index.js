function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    let cookieString = name + "=" + value + ";" + "expires=" + date.toUTCString() + ";path=/";
    document.cookie = cookieString;
    console.log("Setting cookie:", cookieString);
}
 
function getCookie(name) {
    console.log("All cookies:", document.cookie);
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(name + "=")) {
            let value = cookie.substring(name.length + 1, cookie.length);
            console.log("Found cookie value:", value);
            return value;
        }
    }
    console.log("Cookie not found:", name);
    return null;
}

var myCookie = {
    name: "totaltime",
    value: 0,
    days: 365,
    totalTime: 100
};
document.cookie = JSON.stringify(myCookie);
alert(document.cookie);
// DOM Elements
let timerEl = document.getElementById("timer-el");
let totalTimeEl = document.getElementById("total-time-el");
let titleEl = document.getElementById("title");
// Global State
let isrunning = false;
let timer = 0;
let totalStudiedTime = getCookie("totaltime") || 0;


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
    console.log("startTimer" + document.cookie);
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
    setCookie("totaltime", totalStudiedTime, 365);

    
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

// 2. Loading the cookie when page loads
window.onload = function() {
    let savedTime = getCookie("totaltime");
    if (savedTime) {
        totalStudiedTime = parseInt(savedTime);
        totalTimeEl.innerText = formatTime(totalStudiedTime);
    }
}




