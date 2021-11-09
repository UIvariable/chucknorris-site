import React from 'react';

// Images
import NotFoundImage from '../images/not-found.png';

// Components
import Page404 from './Page404';

const NotFound = () => {
	return (
		<>
			<Page404
				title='404'
				text='Chuck Norris is never lost. Everyone else is.'
				image={NotFoundImage}
			/>
		</>
	);
};

export default NotFound;
