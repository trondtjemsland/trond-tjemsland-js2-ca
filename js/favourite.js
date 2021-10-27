import { articleHTML } from './components/writeHtmlToDom.js';
import { getFromLocalStorageItem } from './libs/localStorage.js';
import alert from './components/alert.js';
let favouritesFromLocalStorage = getFromLocalStorageItem('favourites');

console.log(favouritesFromLocalStorage);

articleHTML(favouritesFromLocalStorage, '.cardscontainer');

if (favouritesFromLocalStorage.length === 0) {
	alert('danger', 'Favourites is empty');
}

const clearStorage = document.querySelector('#removeBtn');
clearStorage.onclick = function () {
	localStorage.clear('favourites');
	document.querySelector('.cardscontainer').innerHTML = '';
	alert('danger', 'Favourites is empty');
};
