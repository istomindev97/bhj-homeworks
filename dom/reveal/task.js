const banners = [...document.querySelectorAll('.reveal')]

function handler (el) {

    const {top, bottom} = el.getBoundingClientRect();

    if (bottom < 0) {
        el.classList.remove('reveal_active');
        return;
    }

    if (top > window.innerHeight) {
        el.classList.remove('reveal_active');
        return;
    }

    el.classList.add('reveal_active');
}

function handleScroll() {
    banners.forEach(handler);
}

document.addEventListener('scroll', handleScroll);