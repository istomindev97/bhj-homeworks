const clicker  = document.getElementById("cookie");
const counter  = document.getElementById("clicker__counter");
const speedometer = document.getElementById("clicker__speed");
let lastClickTime = null;


clicker.onclick = function () {

const now = new Date();
clicker.width = 250;
counter.textContent ++;

if (counter.textContent % 2 === 0) {
    clicker.width = 200;
}

if (lastClickTime) {
       
    const clickDuration = (1000 / (now.getTime() - lastClickTime.getTime())).toFixed(2);
    speedometer.textContent = ` ${clickDuration} сек`;
}

lastClickTime = now;
 
}




