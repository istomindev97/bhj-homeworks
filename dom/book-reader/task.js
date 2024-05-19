const fontSizes = [...document.querySelectorAll('.font-size')];
const textColors = [...document.querySelectorAll('[data-text-color]')];
const backgroundColors =  [...document.querySelectorAll('[data-bg-color]')]; 
const book = document.querySelector('.book');

fontSizes.forEach((element, index) => {
  element.addEventListener("click", function handler(event) {
    event.preventDefault();
    
    fontSizes.forEach(el => el.classList.remove('font-size_active'));

    element.classList.add('font-size_active');

    switch (index) {
      case 0:
        book.classList.add('book_fs-small');
        book.classList.remove('book_fs-big');
        break;
      case 1:
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
        break;
      case 2:
        book.classList.add('book_fs-big');
        book.classList.remove('book_fs-small');
        break;
    }
  });
});

textColors.forEach((element, index) => {
  element.addEventListener("click", function handler(event) {
    event.preventDefault();
    
    textColors.forEach(el => el.classList.remove('color_active'));

    element.classList.add('color_active');

    switch (index) {
      case 0:
        book.style.color = "black";
        break;
      case 1:
        book.style.color = "gray";
        break;
      case 2:
        book.style.color = "whitesmoke";
        break;
    }
  });
});

backgroundColors.forEach((element, index) => {
  element.addEventListener("click", function handler(event) {
    event.preventDefault();
    
    backgroundColors.forEach(el => el.classList.remove('color_active'));

    element.classList.add('color_active');

    switch (index) {
      case 0:
        book.style.backgroundColor = "black";
        break;
      case 1:
        book.style.backgroundColor = "gray";
        break;
      case 2:
        book.style.backgroundColor = "white";
        break;
    }
  });
});