import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//Styles
import {Wrapper, Image, Text } from './Category.styles';

const Category = ({ image, category}) => (
    <Wrapper>
        <Link to={`/${category}`}>
            <Image src={image} alt="category-thumbnail"/>
            <Text>{category}</Text>
        </Link>
       
    </Wrapper>
);

Category.propTypes = {
    image: PropTypes.string,
    category: PropTypes.string,
}

export default Category;