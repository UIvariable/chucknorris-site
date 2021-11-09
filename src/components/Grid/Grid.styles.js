import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: var(--maxWidth);
	margin: 0 auto;
	padding: 10px 20px 50px;

	h2 {
		display: block;
		color: var(--dark-brown);
		text-align: center;
		padding: 20px;
		font-size: var(--fontBig);

		@media screen and (max-width: 768px) {
			
		}
	}
`;

export const Content = styled.div`
	display: grid;
	grid-gap: 3rem;
	margin: 0 auto;

    @media (min-width: 320px) {
        grid-template-columns: repeat(1, 1fr); 
        max-width: var(--card-maxWidth);
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr); 
        max-width: 640px;
    }

    @media (min-width: 1086px) {
        grid-template-columns: repeat(3, 1fr);
        max-width: 1000px;
	}
`;
