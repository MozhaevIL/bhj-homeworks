const status = document.getElementById("status");
const timer = document.getElementById("timer");

const initialTime = parseInt(timer.textContent);
status.textContent = `До окончания конкурса осталось`;

let seconds = initialTime % 60;
let minutes = Math.floor(initialTime / 60);
let hours = Math.floor(initialTime/360)

function countdown() {
  if (seconds === 0) {
      minutes -=1;
      seconds = 59;
  } else {
      seconds -=1;
  }
  if ((minutes === 0) && (seconds === 0)) {
      hours -=1;
      minutes = 59;
  }

  status.textContent = `До окончания конкурса осталось ${(hours < 10) ? "0"+hours : hours}:${(minutes < 10) ? "0"+minutes : minutes}:${(seconds < 10) ? "0"+seconds : seconds}`;
}

function congratulation() {
   clearInterval(timerID);
   status.textContent = "Вы победили в конкурсе";
   location = "http://hello.kitty/";
}

const timerID = setInterval(countdown, 1000);
setTimeout(congratulation, initialTime*1000);
