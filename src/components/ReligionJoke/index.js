import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {
	Wrapper,
	Card,
	FrontText,
	BackText,
	TopText,
	BottomContent,
	BottomText,
	IconImg,
	ActionText,
	Number,
} from './ReligionJoke.styles';

// Images
import BlackCardsIcon from '../../images/black-cards-icon.png';
import WhiteCardsIcon from '../../images/white-cards-icon.png';

const ReligionJoke = ({ frontText, backText }) => (
	<Wrapper>
		<Card>
			<FrontText>
				<TopText>{frontText}</TopText>
				<BottomContent>
					<IconImg src={BlackCardsIcon} alt='card-icon' />
					<BottomText>Chuck Norris Against Humanity</BottomText>
					<ActionText>draw</ActionText>
					<Number>1</Number>
				</BottomContent>
			</FrontText>
			<BackText>
				<TopText>{backText}</TopText>
				<BottomContent>
					<IconImg src={WhiteCardsIcon} alt='card-icon' />
					<BottomText>Chuck Norris Against Humanity</BottomText>
				</BottomContent>
			</BackText>
		</Card>
	</Wrapper>
);

ReligionJoke.propTypes = {
	frontText: PropTypes.string,
	backText: PropTypes.string,
};

export default ReligionJoke;
