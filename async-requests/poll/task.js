const requestURL = 'https://students.netoservices.ru/nestjs-backend/poll';
const xhr = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

xhr.onload = () => {
    const response = JSON.parse(xhr.responseText);
    const answers = response.data.answers;
    const title = response.data.title;

    pollTitle.textContent = title;

    for (let answer of answers) {
        pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">
        ${answer} </button>`);
    }

    console.log(answers, title)
}

pollAnswers.addEventListener('click', () => {
    alert('«Спасибо, ваш голос засчитан!»')
})

xhr.open('GET', requestURL);
xhr.send();