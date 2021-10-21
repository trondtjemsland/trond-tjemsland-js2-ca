export function addToLocalStorage(keyName, object) {
	localStorage.setItem(keyName, JSON.stringify(object));
}

export function getFromLocalStorageItem(keyName) {
	if (localStorage.getItem(keyName) !== null) {
		return JSON.parse(localStorage.getItem(keyName));
	} else {
		return [];
	}
}

export function favouriteStorage(domElm) {
	let favouriteToggle = document.querySelectorAll(domElm);

	favouriteToggle.forEach((element) => {
		element.onclick = function () {
			element.classList.toggle('fas');

			let localStorageObject = {
				id: element.dataset.id,
				title: element.dataset.title,
				author: element.dataset.author,
				summary: element.dataset.summary,
			};

			let favourites = getFromLocalStorageItem('favourites');

			let isInStorage = favourites.find(
				(articlesObject) => articlesObject.id === localStorageObject.id
			);

			if (isInStorage === undefined) {
				favourites.push(localStorageObject);
				addToLocalStorage('favourites', favourites);
			} else {
				let removedElementArray = favourites.filter(
					(articlesObject) => articlesObject.id !== localStorageObject.id
				);

				addToLocalStorage('favourites', removedElementArray);
			}
		};
	});
}
