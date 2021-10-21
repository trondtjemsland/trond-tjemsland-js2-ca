export const writeHtmlToDom = (domElementToTarget, htmlToInsertIntoTheDom) => {
	domElementToTarget.innerHTML += htmlToInsertIntoTheDom;
};

export const articleHTML = (array, domElm) => {
	array.forEach(({ id, title, summary, author }) => {
		document.querySelector(domElm).innerHTML += `
				<div class="col-sm-6">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">${title}</h5>
							<p class="card-text">${summary}</p>
							<div class="readmore">
								<p class="card-text">${author}</p>
								<i class="far fa-star" data-id="${id}" data-title="${title}" data-author="${author}" data-summary="${summary}"></i>
							</div> 
						</div>
					</div>
				</div>
		`;
	});
};
