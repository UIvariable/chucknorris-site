import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--yellow);
    padding: 0px 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 5px 0px;
    margin: 0 auto;
    z-index: 1;
`;

export const LogoImg = styled.img`
    width: 200px;

    @media screen and (max-width: 768px) {
        width: 150px;
    }
`;

export const APILogoImg = styled.img`
    width: 100px;

    @media screen and (max-width: 768px) {
        width: 80px;
    }
`;