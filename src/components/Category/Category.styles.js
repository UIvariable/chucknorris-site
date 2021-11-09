import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	background-color: var(--yellow);
	border-radius: 5px;
	box-shadow: 0px 0px 7px 3px rgb(0 0 0 / 30%);
	object-fit: cover;

	a {
		text-decoration: none;
	}
`;

export const Image = styled.img`

	transition: all 0.3s;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	animation: animateImage 0.5s;
	max-width: var(--card-maxWidth);

	:hover {
		opacity: 0.7;
	}

	@keyframes animateImage {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Text = styled.p`
	text-align: center;
	color: var(--white);
	font-size: var(--fontMed);
	font-weight: 600;
	padding: 15px;
`;
