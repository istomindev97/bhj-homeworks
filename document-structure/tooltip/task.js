const elements = [...document.querySelectorAll('.has-tooltip')];

let activeTooltip = null;

elements.forEach(element => {
	element.addEventListener('click', (event) => {
		event.preventDefault();

		if (activeTooltip) {
			activeTooltip.remove();
		}

		const tooltip = document.createElement('div');
		tooltip.classList.add('tooltip_active', 'tooltip');
		tooltip.textContent = element.getAttribute('title');
		document.body.appendChild(tooltip);

		const rect = element.getBoundingClientRect();

		tooltip.style.left = `${rect.left + window.scrollX}px`;
		tooltip.style.top = `${rect.bottom + window.scrollY}px`;

		activeTooltip = tooltip;
	});
});