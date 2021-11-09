import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Text, ImageWrapper, NotFoundImg } from './Page404.styles';

const Page404 = ({ title, text, image }) => (
	<Wrapper>
		<Content>
			<Text>
				<h1>{title}</h1>
				<p>{text}</p>
			</Text>
			<ImageWrapper>
				<NotFoundImg src={image} alt='404-chuck' />
			</ImageWrapper>
		</Content>
	</Wrapper>
);

Page404.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
};

export default Page404;
