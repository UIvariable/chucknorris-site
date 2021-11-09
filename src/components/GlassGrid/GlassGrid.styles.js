import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 10px 20px 50px;
	background-color: var(--dark-brown);
	position: relative;
	z-index: 0;

	::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(#740707, #ffbd43);
		-webkit-clip-path: circle(35% at right 60%);
		clip-path: circle(35% at right 60%);
	}

	::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(#fff200, #175e00);
		-webkit-clip-path: circle(20% at left 30%);
		clip-path: circle(20% at left 30%);
		z-index: -1;
	}

	h2 {
		display: block;
		color: var(--light-yellow);
		text-align: center;
		padding: 20px;
		font-size: var(--fontBig);

		@media screen and (max-width: 768px) {
		
		}
	}

	@media screen and (max-width: 786px) {
		::before {
			-webkit-clip-path: circle(15% at right 60%);
			clip-path: circle(15% at right 60%);
		}

		::after {
			-webkit-clip-path: circle(13% at left 30%);
			clip-path: circle(13% at left 30%);
		}
	}
`;

export const Content = styled.div`
	max-width: var(--maxWidth);
	margin: 0 auto;
	display: grid;
	grid-gap: 1rem;
	margin: 0 auto;
	z-index: 1;

	@media (min-width: 320px) {
		grid-template-columns: repeat(1, 1fr);
		max-width: var(--card-maxWidth);
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		max-width: 768px;
	}

	@media (min-width: 1086px) {
		grid-template-columns: repeat(3, 1fr);
		max-width: 1086px;
	}
`;
