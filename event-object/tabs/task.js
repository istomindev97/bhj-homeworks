const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab__content");


tabs.forEach(function(tab, index) {

	tab.addEventListener('click', function() {
		tabs.forEach(function(tab) {
			tab.classList.remove('tab_active');
		})

		contents.forEach(function(content) {
			content.classList.remove('tab__content_active');
		})

		this.classList.add('tab_active');

		contents[index].classList.add('tab__content_active');
	})
})