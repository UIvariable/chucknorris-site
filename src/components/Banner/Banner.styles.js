import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom,
        rgba(0,0,0,0) 40%,
        rgba(0,0,0,0.85) 100%
    ),
    url(${({ image }) => image }), var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    position: relative;
    min-height: 380px;
    animation: fadeBanner 1s;

    @keyframes fadeBanner {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media screen and (min-width: 1200px) {
        min-height: 480px;
    }
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Text = styled.div`
    z-index: 1;
    position: absolute;
    bottom: 25px;
    color: var(--white);
    margin-left: 25px;

    h1 {
        font-size: var(--fontHuge);

        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }

    p {
        font-size: var(--fontMed);
    
        @media screen and (max-width: 768px) {
            font-size: var(--fontSmall);
        }
    }
`;