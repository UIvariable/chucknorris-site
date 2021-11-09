import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	max-width: var(--card-maxWidth);
	min-height: 250px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--lightGrey);
	overflow: hidden;
	border-radius: 20px;
	box-shadow: 0px 0px 7px 3px rgb(0 0 0 / 30%);

	:hover {
		::before {
			animation-play-state: running;
			animation-iteration-count: infinite;
		}
	}

	::before {
		content: '';
		position: absolute;
		width: 150px;
		height: 300%;
		background: linear-gradient(green, var(--orange));
		animation: borderAnimation 4s linear;
		animation-play-state: paused;
	}

	::after {
		content: '';
		position: absolute;
		inset: 4px;
		background: var(--white);
		border-radius: 20px;
	}

	@keyframes borderAnimation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

export const Card = styled.div`
	width: 100%;
	height: 100%;
`;

export const Text = styled.div`
	position: absolute;
	top: 20%;
	left: 0;
	z-index: 1;
	margin: 10px 5px 30px;
	padding: 10px;
	color: var(--dark-brown);
	font-size: var(--fontSmall);
	font-weight: 600;
	font-family: var(--secondaryFont);
`;

export const Time = styled.div`
	position: absolute;
	top: 20px;
	left: 4px;
	z-index: 1;
	color: var(--white);
	font-weight: 600;
	background-color: var(--yellow);
	padding: 5px 30px 5px 10px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
`;

export const Rating = styled.div`
	position: absolute;
	top: 24px;
	right: 20px;
	z-index: 1;
	display: flex;
	align-items: center;
	color: var(--dark-brown);
	font-weight: 600;

	img {
		width: 20px;
		height: auto;
		margin-left: 5px;
	}
`;
