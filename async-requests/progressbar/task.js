const form = document.getElementById( 'form' );



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    const requestURL = 'https://students.netoservices.ru/nestjs-backend/upload';
    const progress = document.getElementById( 'progress' );
    
    xhr.open('POST', requestURL)
    
    xhr.upload.addEventListener('progress', (e) => {
        const percentComplete = (e.loaded / e.total) * 100;
        progress.value = percentComplete;
    })

    xhr.onload = () => {
        if (xhr.status === 200) {
            alert('Загрузка успешна'); 
            progress.value = 100; 
        } else {
            alert('Загрузка неуспешна'); 
        }
    };

    

    

    xhr.send(formData)
})