import {
	API_URL,
	CATEGORIES,
	RANDOM_JOKE_CATEGORY
} from './config';

const apiSettings = {
	fetchCategories: async () => {
		const endpoint = `${API_URL}${CATEGORIES}`;
		console.log(`${API_URL}${CATEGORIES}`);

		return await (await fetch(endpoint)).json();
	},
	fetchCategoryJoke: async (category) => {
		const endpoint = `${API_URL}${RANDOM_JOKE_CATEGORY}?category=${category}`;
		return await (await fetch(endpoint)).json();
	},
};

export default apiSettings;
