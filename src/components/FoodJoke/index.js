import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Card, Text, Time, Rating } from './FoodJoke.styles';

// Images
import StarIcon from '../../images/rating-star.png';

const FoodJoke = ({ text }) => (
	<Wrapper>
		<Card>
			<Time>{Math.floor(Math.random() * (75 - 5)) + 5} min</Time>
			<Rating>
				<p>{Math.floor(Math.random() * (5 * 100 - 1 * 100) + 1 * 100) / (1*100)}</p>
				<img alt="star-icon" src={StarIcon} />
			</Rating>
            <Text>{text}</Text>
		</Card>
	</Wrapper>
);

FoodJoke.propTypes = {
	text: PropTypes.string
};

export default FoodJoke;
