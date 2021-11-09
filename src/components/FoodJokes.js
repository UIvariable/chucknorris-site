import React from 'react';

// Components
import Grid from './Grid';
import FoodJoke from './FoodJoke';
import Loader from './Loader';

// Hooks
import { useCategoryJokeFetch } from '../hooks/useCategoryJokeFetch';

const FoodJokes = () => {
	const { state, loading, error } = useCategoryJokeFetch('food');

	if (error) return <div>Something went wrong!</div>;

	return (
		<>
			<Grid header='New Recipes'>
				{state.jokesArray.length > 0 ? (
					state.jokesArray.map((joke) => (
						<FoodJoke key={Math.random()} text={joke[0]} />
					))
				) : (
					<Loader />
				)}
			</Grid>

			<Grid header='Already Tried Recipes'>
				{state.seenJokes.length > 0 ? (
					state.seenJokes.map((joke) => (
						<FoodJoke key={Math.random()} text={joke[0]} />
					))
				) : (
					<div className='no-grid'>Let's prepare something!</div>
				)}
			</Grid>
			{loading && <Loader />}
		</>
	);
};

export default FoodJokes;
