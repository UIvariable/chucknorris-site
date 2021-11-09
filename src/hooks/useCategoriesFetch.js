import { useState, useEffect } from 'react';

// API
import API from '../API';

// Helpers
import { isPersistedState } from '../helpers';

const initialState = {
	categoriesArray: [],
};

export const useCategoriesFetch = () => {
	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchCategories = async () => {
		try {
			setError(false);
			setLoading(true);
			const categories = await API.fetchCategories();

			setState({
				categoriesArray: categories,
			});
		} catch (error) {
			setError(true);
		}

		setLoading(false);
	};

	// Initial render and search
	// trigger this once on mount and every time we search
	useEffect(() => {
		const sessionState = isPersistedState('categories');

		// grab from sessionStorage
		if (sessionState) {
			setState(sessionState);
			return;
		}

		// grab from API
		setState(initialState);
		fetchCategories();
	}, []);

	// write to sessionStorage
	useEffect(() => {
		sessionStorage.setItem('categories', JSON.stringify(state));
	}, [state]);

	return { state, loading, error };
};
