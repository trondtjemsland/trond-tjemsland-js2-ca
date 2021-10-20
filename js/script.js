import { BASE_URL, headers } from './configs/configs.js';

const cards = document.querySelector('.cardscontainer');

async function getStrapApi() {
	let response = await axios.get(`${BASE_URL}/articles`);

	let articles = response.data;
	console.log(articles);

	articles.forEach(({ title, summary, author }) => {
		cards.innerHTML += `
                <div class="col-sm-4">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">${title}</h5>
							<p class="card-text">${summary}</p>
							<p class="card-text">${author}</p>
                            <div class="readmore">
                                <button type="button" class="btn btn-primary btn-sm">Small button</button>
                                <i class="far fa-star"></i>
                            </div>
                            
						</div>
					</div>
				</div>
    
        `;
	});
}

getStrapApi();
