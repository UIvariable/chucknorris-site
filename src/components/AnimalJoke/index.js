import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Card, Text } from './AnimalJoke.styles';

const AnimalJoke = ({ index, text }) => (
	<Wrapper>
		<Card>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<span className='tilt'></span>
			<div className='tilt-card'>
				<div className="tilt-text">
				<Text>
					<h3>{index}</h3>
					<p>{text}</p>
				</Text>
				</div>
			</div>
		</Card>
	</Wrapper>
);

AnimalJoke.propTypes = {
	index: PropTypes.string,
	text: PropTypes.string
};

export default AnimalJoke;
