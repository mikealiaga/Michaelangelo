let totalSeconds = 0;
let timerInterval;
const alarmSound = new Audio('../assets/audio/alarm.mp3'); 

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            alarmSound.play(); 
            alert("Time's up!");
            return;
        }
        totalSeconds--;
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const h3 = document.querySelector('.clock h3');
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    h3.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}


function setTimer() {
    const input = document.getElementById('setTime').value;
    totalSeconds = input * 60; 
    updateTimerDisplay(); 
    startTimer(); 
}


document.getElementById("startButton").addEventListener("click", function() {
    let minutes = prompt("Please enter the number of minutes:", "1");
    if (minutes !== null && !isNaN(minutes) && minutes > 0) {
        totalSeconds = minutes * 60; 
        updateTimerDisplay(); 
        startTimer(); 
    } else {
        alert("Please enter a valid number of minutes.");
    }
});