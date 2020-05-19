const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const clickRateData = document.getElementById("click__rate");
let numberOfClicks = 0;
let lastClick = 0;

cookie.onclick = function() {
    numberOfClicks += 1;
    clickerCounter.textContent = numberOfClicks;

    if(cookie.width === 200) {
        cookie.width = 220;
    } else cookie.width = 200;

    const currentTime = (new Date()).getTime();
    let clickRate = 1000 / (currentTime - lastClick);
    clickRateData.textContent = clickRate.toFixed(2);
    lastClick = currentTime;
}