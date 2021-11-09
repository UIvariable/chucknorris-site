import React from 'react';

// Components
import Banner from './Banner';
import Grid from './Grid';
import Category from './Category';
import Loader from './Loader';

// Hook
import { useCategoriesFetch } from '../hooks/useCategoriesFetch';

// Images
import BannerImage from '../images/chuck-norris-laugh.jpg';
import AnimalImage from '../images/animal.png';
import ReligionImage from '../images/religion.png';
import FoodImage from '../images/food.png';

const Home = () => {
	const { state, loading, error } = useCategoriesFetch();

	if (error) return <div>Something went wrong!</div>;

	return (
		<>
			<Banner
				image={BannerImage}
				title='Chuck Norris jokes to make you laugh'
				text="but please don't tell Chuck Norris"
			/>
			<Grid header='Joke Categories'>
				{state.categoriesArray.length > 0 ? (
					state.categoriesArray
						.filter((category) =>
							['religion', 'food', 'animal'].includes(category)
						)
						.map((category) =>
							category === 'religion' ? (
								<Category
									key={Math.random()}
									image={ReligionImage}
									category={category}
								/>
							) : category === 'animal' ? (
								<Category
									key={Math.random()}
									image={AnimalImage}
									category={category}
								/>
							) : (
								<Category
									key={Math.random()}
									image={FoodImage}
									category={category}
								/>
							)
						)
				) : (
					<Loader />
				)}
			</Grid>
			{loading && <Loader />}
		</>
	);
};

export default Home;
