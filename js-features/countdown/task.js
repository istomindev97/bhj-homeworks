
function countdown() {
    const timer  = document.getElementById("timer");
    timer.textContent -= 1;
    if (timer.textContent === "10") {
        for (let i = 10; i < array.length; i++) {
            timer.textContent -= 1;
            
        }
    }

    if (timer.textContent === "0") {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
        return;
    }
    return;
}

let intervalId  = setInterval(countdown ,1000);




