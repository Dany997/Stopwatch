// const startBtn = document.querySelector('.start');
// const pauseBtn = document.querySelector('.pause');
// const stopBtn = document.querySelector('.stop');
// const resetBtn = document.querySelector('.reset');
// const historyBtn = document.querySelector('.history');
// const stopWatch = document.querySelector('.stopwatch');
// const time = document.querySelector('.time');
// const timeList = document.querySelector('.time-list');

// const infoBtn = document.querySelector('.info');
// const modalShadow = document.querySelector('.modal-shadow');
// const closeModalBtn = document.querySelector('.close');

// let countTime;
// let minutes = 0;
// let seconds = 0;

// let timesArr = [];

// const handleStart = () => {
// 	// clearInterval(countTime);

// 	countTime = setInterval(() => {
// 		if (seconds < 9) {
// 			seconds++;
// 			stopWatch.textContent = `${minutes}:0${seconds}`;
// 		} else if (seconds >= 9 && seconds < 59) {
// 			seconds++;
// 			stopWatch.textContent = `${minutes}:${seconds}`;
// 		} else {
// 			minutes++;
// 			seconds = 0;
// 			stopWatch.textContent = `${minutes}:00`;
// 		}
// 	}, 100);
// };

// const handleStop = () => {
// 	time.innerHTML = `Ostatni czas ${stopWatch.textContent}`;

// 	if (stopWatch.textContent !== '0:00') {
// 		time.style.visibility = 'visible';
// 		timesArr.push(stopWatch.textContent);
// 	}

// 	clearStuff();
// };

// const handlePause = () => {
// 	clearInterval(countTime);
// };

// const handleReset = () => {
// 	time.style.visibility = 'hidden';
// 	timesArr = [];
// 	clearStuff();
// };

// const clearStuff = () => {
// 	clearInterval(countTime);
// 	stopWatch.textContent = '0:00';
// 	timeList.textContent = '';
// 	seconds = 0;
// 	minutes = 0;
// };

// const showHistory = () => {
// 	timeList.textContent = '';

// 	let num = 1;

// 	timesArr.forEach((time) => {
// 		const newTime = document.createElement('li');

// 		newTime.innerHTML = `Pomiar nr ${num} <span>${time}</span>`;

// 		timeList.appendChild(newTime);

// 		num++;
// 	});
// };

// const showModal = () => {
// 	if (!(modalShadow.style.display === 'block')) {
// 		modalShadow.style.display = 'block';
// 	} else {
// 		modalShadow.style.display = 'none';
// 	}

// 	modalShadow.classList.toggle('modal-animation');
// };

// startBtn.addEventListener('click', handleStart);
// pauseBtn.addEventListener('click', handlePause);
// stopBtn.addEventListener('click', handleStop);
// resetBtn.addEventListener('click', handleReset);
// historyBtn.addEventListener('click', showHistory);
// infoBtn.addEventListener('click', showModal);
// closeModalBtn.addEventListener('click', showModal);
// window.addEventListener('click', (e) =>
// 	e.target === modalShadow ? showModal() : false
// );

// --------------MÓJ---------------KOD-------------------------------------------

// ---------------ogólne-----------------------------------------------
const stopWatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');
const modalShadow = document.querySelector('.modal-shadow');

// ---------------------------BUTT-ONY-------------------------------------------
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const infoBtn = document.querySelector('.fa-question');
const closeBtn = document.querySelector('.close');

// ---------------------------COLORS----------------------------
const colorBtn = document.querySelector('.fa-brush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
let root = document.documentElement;

// zmienne globalne potrzebne do obliczeń czasu

let countTime;

let seconds = 0;

let minutes = 0;

timesArr = [];

// --------------------------FUNKCJE-----------------------------------------------

const handleStart = () => {
	clearInterval(countTime);
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopWatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopWatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopWatch.textContent = `${minutes}:00`;
		}
	}, 100);
};

const handlePause = () => {
	clearInterval(countTime);
};

const handleStop = () => {
	clearInterval(countTime);

	// Ustawienie tekstu w elemencie time
	time.innerHTML = `Ostatni czas: ${stopWatch.textContent}`;

	// Sprawdzenie, czy stoper nie jest ustawiony na 0:00
	if (stopWatch.textContent !== '0:00') {
		// Ustawienie widoczności klasy time na visible
		time.style.visibility = 'visible';

		// Dodanie ostatniego czasu do tablicy timesArr
		timesArr.push(stopWatch.textContent);

		// Dodanie ostatniego czasu do listy czasów
		const newTime = document.createElement('li');
		newTime.innerHTML = `Pomiar nr ${timesArr.length} <span>${stopWatch.textContent}</span>`;
		timeList.appendChild(newTime);
	}

	// Wywołanie funkcji clearStuff, która przywraca początkowe ustawienia
	clearStuff();
};

const handleReset = () => {
	// Ukryj czas
	time.style.visibility = 'hidden';

	// Zresetuj tablicę timesArr
	timesArr = [];

	// Wywołaj funkcję clearStuff, która przywraca początkowe ustawienia
	clearStuff();
};

const clearStuff = () => {
	clearInterval(countTime);
	stopWatch.textContent = '0:00';
	timeList.textContent = '';
	seconds = 0;
	minutes = 0;
};

timeList.style.display = 'none';

const handleHistory = () => {
	if (timeList.style.display === 'none') {
		// Jeśli lista jest ukryta, pokaż ją
		timeList.style.display = 'block';

		// Zaktualizuj tekst przycisku "Archiwum"
		historyBtn.textContent = 'Schowaj Historię';
	} else {
		// Jeśli lista jest widoczna, ukryj ją
		timeList.style.display = 'none';

		// Zaktualizuj tekst przycisku "Archiwum"
		historyBtn.textContent = 'Archiwum';
	}

	timeList.textContent = ''; // Wyczyszczenie listy, aby uniknąć duplikatów

	let num = 1;

	if (timesArr.length > 0) {
		timesArr.forEach((time) => {
			const newTime = document.createElement('li');
			newTime.innerHTML = `Pomiar nr ${num} <span>${time}</span>`;
			timeList.appendChild(newTime);
			num++;
		});
	} else {
		const newTime = document.createElement('li');
		newTime.textContent = 'Brak historii pomiarów.';
		timeList.appendChild(newTime);
	}
};

// Funkcja otwierająca modal
const showModal = () => {
	modalShadow.style.display = 'block';
	modalShadow.classList.add('modal-animation');
};

// Funkcja zamykająca modal
const closeModal = () => {
	modalShadow.style.display = 'none';
	modalShadow.classList.remove('modal-animation');
};

// const changeColor = () => {};

// -----------------LISTENERY--------------------------------
startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', handleHistory);
infoBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', closeModal);
colorBtn.addEventListener('click', () => {
	colorPanel.classList.toggle('show-colors');
});

colorOne.addEventListener('click', () => {
	root.style.setProperty(
	'--first-color', '#db3c0c');
});

colorTwo.addEventListener('click', () => {
	root.style.setProperty(
	'--first-color', '#42be11');
});

colorThree.addEventListener('click', () => {
	root.style.setProperty(
	'--first-color', '#1279ce')
});
