const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let counterKilledMoles = 0;
let counterMisses = 0;

let holes = document.getElementsByClassName('hole');
let arr = Array.from(document.getElementsByClassName('hole'));

function checkWin() {
	if (counterKilledMoles === 10) {

		alert('Вы победили!');
		counterKilledMoles = 0;
		counterMisses = 0;
		dead.textContent = 0;
		lost.textContent = 0;

	}

	if (counterMisses === 5) {

		alert('Вы проиграли!');
		counterKilledMoles = 0;
		counterMisses = 0;
		dead.textContent = 0;
		lost.textContent = 0;

	}
}

for (let i = 0; i < arr.length; i++) {
	arr[i].onclick = function() {
		if (arr[i].className.includes('hole_has-mole')) {
			counterKilledMoles++;
			dead.textContent++;
		} else {
			counterMisses++;
			lost.textContent++;
		}

		checkWin();
	}



}