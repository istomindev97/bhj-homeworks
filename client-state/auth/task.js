const form = document.getElementById('signin__form');
const greeting = document.getElementById('welcome');
const signin = document.getElementById('signin');

window.addEventListener('load', () => {
    if (localStorage.getItem('id')) {
        showWelcome(localStorage.getItem('id'));
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    sendLoginRequest(formData);
});

function sendLoginRequest(formData) {
    const requestURL = 'https://students.netoservices.ru/nestjs-backend/auth';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            handleResponse(xhr);
        }
    };
    xhr.onerror = function() {
        console.error('Network error');
    };
    xhr.open('POST', requestURL);
    xhr.send(formData);
}

function handleResponse(xhr) {
    if (xhr.status === 200 || xhr.status === 201) {
        const response = JSON.parse(xhr.responseText);
        if (response.success === true) {
            showWelcome(response.user_id);
            localStorage.setItem('id', response.user_id);
        } else {
            showErrorMessage('Неверный логин/пароль');
        }
    } else {
        console.error('Error:', xhr.status, xhr.statusText);
    }
}

function showWelcome(userId) {
    greeting.textContent = `Добро пожаловать, пользователь #${userId}`;
    greeting.classList.add('welcome_active');
    signin.classList.remove('signin_active');
}

function showErrorMessage(message) {
    greeting.textContent = message;
    greeting.classList.add('welcome_active');
    console.error(message);
}
