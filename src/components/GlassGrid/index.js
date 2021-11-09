import React from 'react';
import PropTypes from 'prop-types';

//Styles
import { Wrapper, Content } from './GlassGrid.styles';

const GlassGrid = ({ header, children }) => (
	<Wrapper>
		<h2>{header}</h2>
		<Content>{children}</Content>
	</Wrapper>
);

GlassGrid.propTypes = {
	header: PropTypes.string,
};

export default GlassGrid;
