const subscribeModal = document.getElementById('subscribe-modal');
const closer = document.querySelector('.modal__close');

window.addEventListener('load', () => {
    if (document.cookie != 'isClosed=true') {
        subscribeModal.classList.add('modal_active');
    } 
});

closer.addEventListener('click', () => {
    subscribeModal.classList.remove('modal_active');
    document.cookie = 'isClosed=true';
})