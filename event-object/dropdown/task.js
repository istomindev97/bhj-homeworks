const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const options = document.querySelectorAll('.dropdown__item')

dropdownValue.addEventListener('click', function() {
	dropdownList.classList.toggle('dropdown__list_active')
})

options.forEach(option => {
	option.addEventListener('click', function(event) {
		event.preventDefault();
		dropdownList.classList.remove('dropdown__list_active');
		dropdownValue.textContent = this.textContent;

	})
})