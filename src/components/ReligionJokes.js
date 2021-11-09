import React from 'react';

// Components
import Grid from './Grid';
import ReligionJoke from './ReligionJoke';
import Loader from './Loader';

// Hooks
import { useCategoryJokeFetch } from '../hooks/useCategoryJokeFetch';

const ReligionJokes = () => {
	const { state, loading, error } = useCategoryJokeFetch('religion');
	const questions = [
		'What keeps me up at night?',
		'I drink to forget ________.',
		'The inspiration for my startup ________.',
		'During sex I like to think about ________.',
		'What would grandma find disturbing, yet oddly charming?',
		"What's worse than Holocaust?",
		'What are my parents hiding from me?',
		'Daddy, why is Mommy crying?',
	];

	if (error) return <div>Something went wrong!</div>;

	return (
		<>
			<Grid header='Religion Cards'>
				{state?.jokesArray?.length > 0 ? (
					state.jokesArray.map((joke, index) => (
						<ReligionJoke
							key={Math.random()}
							frontText={questions[index]}
							backText={joke[0]}
						/>
					))
				) : (
					<Loader />
				)}
			</Grid>

			<Grid header='Already Played Cards'>
				{state?.seenJokes.length > 0 ? (
					state?.seenJokes.map((joke) => (
						<ReligionJoke
							key={Math.random()}
							frontText={
								questions[Math.floor(Math.random() * (questions.length - 1))]
							}
							backText={joke[0]}
						/>
					))
				) : (
					<div className='no-grid'>Let's begin the game!</div>
				)}
			</Grid> 

			{loading && <Loader />}
		</>
	);
};

export default ReligionJokes;
