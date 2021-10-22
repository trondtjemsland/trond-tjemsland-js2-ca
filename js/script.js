import { BASE_URL } from './configs/configs.js';
import { favouriteStorage } from './libs/localStorage.js';
import { getAPI } from './libs/apiCalls.js';
import { filteringAnArray } from './libs/filteringArray.js';
import { articleHTML, writeHtmlToDom } from './components/writeHtmlToDom.js';

const articleArray = await getAPI(BASE_URL + '/articles');

const cards = document.querySelector('.cardscontainer');
articleHTML(articleArray, '.cardscontainer');

favouriteStorage('.fa-star');

const searchInput = document.querySelector('#searchInput');
searchInput.onkeyup = () => {
	let searchResults = filteringAnArray(articleArray, searchInput.value);
	cards.innerHTML = '';

	articleHTML(searchResults, '.cardscontainer');
	favouriteStorage('.fa-star');
};

console.log(articleArray);
