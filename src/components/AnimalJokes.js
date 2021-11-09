import React from 'react';

// Components
import GlassGrid from './GlassGrid';
import AnimalJoke from './AnimalJoke';
import Loader from './Loader';

// Hooks
import { useCategoryJokeFetch } from '../hooks/useCategoryJokeFetch';

const AnimalJokes = () => {
	const { state, loading, error } = useCategoryJokeFetch('animal');
	if (error) return <div>Something went wrong!</div>;

	return (
		<>
			<GlassGrid header='Camouflage Animals'>
				{state?.jokesArray?.length > 0 ? (
					state.jokesArray.map((joke, index) => (
						<AnimalJoke
							key={Math.random()}
							index={'0' + `${index + 1}`}
							text={joke[0]}
						/>
					))
				) : (
					<Loader />
				)}
			</GlassGrid>
			<GlassGrid header='Already Discovered Animals'>
				{state?.seenJokes?.length > 0 ? (
					state.seenJokes.map((joke, index) => (
						<AnimalJoke
							key={Math.random()}
							index={'0' + `${index + 1}`}
							text={joke[0]}
						/>
					))
				) : (
					<div className='no-glass-grid'>Let's discover animals!</div>
				)}
			</GlassGrid>
			{loading && <Loader />}
		</>
	);
};

export default AnimalJokes;
