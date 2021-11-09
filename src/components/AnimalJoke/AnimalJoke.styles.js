import styled from 'styled-components';

export const Wrapper = styled.div`
	animation: fadeContent;

	@keyframes fadeContent {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Card = styled.div`
	position: relative;
	max-width: var(--card-maxWidth);
	height: 400px;
	margin: 30px;
	text-align: center;
	transition: all 0.6s ease-out;
	perspective: 1000px;

	:hover {
		transition: all 0.3s linear;
		transform: scale(1.1);
	}

	.tilt-card {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		border-radius: 15px;
		border-top: 1px solid rgba(255, 255, 255, 0.5);
		border-left: 1px solid rgba(255, 255, 255, 0.5);
		box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(5px);
		padding: 20px 10px;
		text-align: center;
		transition: all 0.6s ease-out;
		transform: rotateX(0deg) rotateY(0deg);
		transform-style: preserve-3d;
	}

	.tilt-text {
		width: 100%;
		height: 100%;
		position: relative;
		transform: translateY(0px);
		transition: 0.5s;
		opacity: 0;
	}

	.tilt {
		width: 25%;
		height: 25%;
		position: absolute;
		z-index: 1;

		// row 1
		:nth-child(1) {
			left: 0;
			top: 0;

			:hover ~ .tilt-card {
				transform: rotateX(-20deg) rotateY(20deg);
			}
		}
		:nth-child(2) {
			left: 25%;
			top: 0;
			:hover ~ .tilt-card {
				transform: rotateX(-20deg) rotateY(0deg);
			}
		}
		:nth-child(3) {
			left: 50%;
			top: 0;
			:hover ~ .tilt-card {
				transform: rotateX(-20deg) rotateY(0deg);
			}
		}

		:nth-child(4) {
			left: 75%;
			top: 0;
			:hover ~ .tilt-card {
				transform: rotateX(-20deg) rotateY(-20deg);
			}
		}

		// row 2
		:nth-child(5) {
			left: 0;
			top: 25%;
			:hover ~ .tilt-card {
				transform: rotateX(0deg) rotateY(20deg);
			}
		}

		:nth-child(6) {
			left: 25%;
			top: 25%;
			:hover ~ .tilt-card .tilt-text {
				transform: translateY(0px);
				opacity: 1;
			}
		}

		:nth-child(7) {
			left: 50%;
			top: 25%;
			:hover ~ .tilt-card .tilt-text {
				transform: translateY(0px);
				opacity: 1;
			}
		}

		:nth-child(8) {
			left: 75%;
			top: 25%;
			:hover ~ .tilt-card {
				transform: rotateX(0deg) rotateY(20deg);
			}
		}

		// row 3
		:nth-child(9) {
			left: 0;
			top: 50%;
			:hover ~ .tilt-card {
				transform: rotateX(0deg) rotateY(20deg);
			}
		}

		:nth-child(10) {
			left: 25%;
			top: 50%;
			:hover ~ .tilt-card .tilt-text {
				transform: translateY(0px);
				opacity: 1;
			}
		}

		:nth-child(11) {
			left: 50%;
			top: 50%;
			:hover ~ .tilt-card .tilt-text {
				transform: translateY(0px);
				opacity: 1;
			}
		}

		:nth-child(12) {
			left: 75%;
			top: 50%;
			:hover ~ .tilt-card {
				transform: rotateX(0deg) rotateY(20deg);
			}
		}

		// row 4
		:nth-child(13) {
			left: 0;
			top: 75%;
			:hover ~ .tilt-card {
				transform: rotateX(20deg) rotateY(20deg);
			}
		}
		:nth-child(14) {
			left: 25%;
			top: 75%;
			:hover ~ .tilt-card {
				transform: rotateX(20deg) rotateY(0deg);
			}
		}
		:nth-child(15) {
			left: 50%;
			top: 75%;
			:hover ~ .tilt-card {
				transform: rotateX(20deg) rotateY(0deg);
			}
		}

		:nth-child(15) {
			left: 75%;
			top: 75%;
			:hover ~ .tilt-card {
				transform: rotateX(20deg) rotateY(-20deg);
			}
		}
	}

	@media screen and (max-width: 768px) {
		margin: 10px;
	}
`;

export const Text = styled.div`
	transform: translateZ(40px);

	h3 {
		font-size: var(--fontHUGE);
		color: var(--white);
		opacity: 0.15;
		pointer-events: none;
		text-align: right;
		margin: -10px 10px 30px 0px;
	}

	p {
		color: var(--light-yellow);
		font-weight: 500;
		font-size: var(--fontMed);
	}
`;
