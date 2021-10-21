import { articleHTML } from './components/writeHtmlToDom.js';
import {
	addToLocalStorage,
	getFromLocalStorageItem,
} from './libs/localStorage.js';

let favouritesFromLocalStorage = getFromLocalStorageItem('favourites');

console.log(favouritesFromLocalStorage);

articleHTML(favouritesFromLocalStorage, '.cardscontainer');

const clearStorage = document.querySelector('#removeBtn');
clearStorage.onclick = function () {
	localStorage.clear('favourites');
	document.querySelector('.cardscontainer').innerHTML = '';
};
