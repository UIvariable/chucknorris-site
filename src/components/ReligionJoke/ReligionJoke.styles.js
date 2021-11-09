import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	height: 350px;
	width: 250px;
	z-index: 1;
	margin: 10px 5px 30px;
	animation: fadeContent;

	@keyframes fadeContent {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	:hover > div {
		transform: rotateY(180deg);
	}
`;

export const Card = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
	transition: all 0.5s ease;
`;

export const FrontText = styled.div`
	box-shadow: 0px 0px 7px 3px rgb(0 0 0 / 30%);
	background: #000;
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	border-radius: 10px;
	margin: 10px 5px 30px;
	padding: 10px;
	color: var(--white);
	font-weight: 600;
	font-family: var(--secondaryFont);
`;

export const BackText = styled.div`
	box-shadow: 0px 0px 7px 3px rgb(0 0 0 / 30%);
	background: var(--lightGrey);
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	transform: rotateY(180deg);
	border-radius: 10px;
	margin: 10px 5px;
	padding: 10px;
	color: #000;
	font-weight: 600;
	font-family: var(--secondaryFont);
`;

export const IconImg = styled.img`
	width: 30px;
`;

export const TopText = styled.p`
	position: absolute;
	top: 10px;
	left: 10px;
	font-size: var(--fontMed);
`;

export const BottomContent = styled.div`
	position: absolute;
	bottom: 10px;
	left: 10px;
	font-size: var(--fontXSmall);
	display: flex;
	align-items: center;
`;

export const BottomText = styled.div`
	font-size: var(--fontXSmall);
	padding: 0px 2px;
`;

export const ActionText = styled.div`
	text-transform: uppercase;
	font-size: var(--fontMed);
	padding: 0px 3px 0px 5px;
	animation: pulseShadow linear 2s infinite;

	@keyframes pulseShadow {
		0% {
			text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.3);
		}
		50% {
			text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.95);
		}
		100% {
			text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.3);
		}
	}
`;

export const Number = styled.p`
	font-size: var(--fontMed);
	text-transform: uppercase;
	color: #000;
	background-color: var(--white);
	border-radius: 50%;
	width: 20px;
	height: 20px;
	text-align: center;
	line-height: 20px;
	padding: 0px 3px 0px 2px;
`;
