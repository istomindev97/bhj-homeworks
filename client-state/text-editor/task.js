const editor = document.getElementById('editor');
const button = document.querySelector('.btn');

window.addEventListener('load', () => {
    let savedText = localStorage.getItem('text');
    if (savedText) {
        editor.value = savedText;
    }
});

editor.addEventListener('keyup', () => {
    localStorage.setItem('text', editor.value);
});

button.addEventListener('click', () => {
    editor.value = '';
});

