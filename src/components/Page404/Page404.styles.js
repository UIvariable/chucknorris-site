import styled from 'styled-components';

export const Wrapper = styled.div`
	animation: fadeAnimation 1s;

	@keyframes fadeAnimation {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Content = styled.div`
	max-width: var(--maxWidth);
	margin: 0px auto;
	display: flex;
	justify-content: center;
	align-items: flex-end;

	@media screen and (max-width: 786px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Text = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 50px 50px;
	color: var(--dark-brown);
	font-weight: 600;

	h1 {
		font-size: var(--fontHUGE);
		text-align: center;
	}

	p {
		font-size: var(--fontMed);
	}

	@media screen and (max-width: 786px) {
		padding: 10px 50px;
	}
`;

export const ImageWrapper = styled.div`
	position: absolute;
	bottom: 0px;
`;

export const NotFoundImg = styled.img`
	display: flex;
	width: 400px;

	@media screen and (max-width: 786px) {
		width: 300px;
	}
`;
