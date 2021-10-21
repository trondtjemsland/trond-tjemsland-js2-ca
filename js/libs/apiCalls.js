export const getAPI = async function (url) {
	try {
		let response = await axios.get(url);
		let articles = response.data;

		return articles;
	} catch (error) {
		console.log(error);
	}
};
