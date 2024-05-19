const rotators = [...document.querySelectorAll('.rotator__case')];
let currentIndex = 0;

function changeClass() {
    if (rotators[currentIndex]) {
        rotators[currentIndex].classList.remove('rotator__case_active');
        currentIndex = (currentIndex + 1) % rotators.length;
    } else {
        currentIndex = 0;
    }
    
    rotators[currentIndex].style.color = rotators[currentIndex].getAttribute('data-color') || 'black';
    
    const speed = rotators[currentIndex].getAttribute('data-speed') || 1000;
    
    rotators[currentIndex].classList.add('rotator__case_active');
}

setInterval(changeClass, 1000);