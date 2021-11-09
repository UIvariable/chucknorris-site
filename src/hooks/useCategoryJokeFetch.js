import { useState, useEffect } from 'react';

// API
import API from '../API';

// Helpers
import { isPersistedState } from '../helpers';

const initialState = {
	jokesArray: [],
	seenJokes: [],
};

export const useCategoryJokeFetch = (category) => {
	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchData = async () => {
		var jokes = [];
		var sessionState = isPersistedState(category);
		var sessionArray = [];

		try {
			setLoading(true);
			setError(false);

			for (let index = 0; index < 5; ++index) {
				var joke = await API.fetchCategoryJoke(category);

				jokes.push([joke.value, category]);
			}

			if (sessionState) {
				// grab from sessionStorage
				sessionArray = sessionState;

				setState({
					jokesArray: jokes,
					seenJokes: sessionArray,
				});

				let concatArray = sessionArray.concat(jokes);
				let stringArray = concatArray.map(JSON.stringify);
				let uniqueStringArray = new Set(stringArray);
				let distinctJokes = Array.from(uniqueStringArray, JSON.parse);

				// write to sessionStorage
				sessionStorage.setItem(category, JSON.stringify(distinctJokes));
			} else {
				setState({
					jokesArray: jokes,
					seenJokes: [],
				});

				let stringArray = jokes.map(JSON.stringify);
				let uniqueStringArray = new Set(stringArray);
				let distinctJokes = Array.from(uniqueStringArray, JSON.parse);

				//write to sessionStorage
				sessionStorage.setItem(category, JSON.stringify(distinctJokes));
			}

			setLoading(false);
		} catch (error) {
			setError(true);
		}
	};

	useEffect(() => {
		// grab from API
		fetchData();
	}, [category]);

	return { state, loading, error };
};
