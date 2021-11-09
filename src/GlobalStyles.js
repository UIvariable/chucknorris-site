import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --card-maxWidth: 300px;
        --white: #ffffff;
        --yellow: #fbdb44;
        --light-yellow: #f9eaae;
        --brown: #955d37;
        --dark-brown: #1c110a;
        --orange: #da702e;
        --light-orange: #fcac1c;
        --lightGrey: #eeeeee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontHUGE: 100px;
        --fontHuge: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --fontXSmall: 0.55rem;
        --secondaryFont: 'Helvetica Neue', 'Abel', sans-serif;
    }

    * {
        box-sizing: border-box;
        font-family: 'Calibri', 'Abel', sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        h1 {
            font-size: 2rem;
            font-weight: 600;
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
        }
    }

    .no-grid, .no-glass-grid {
        text-align: center;
        font-size: var(--fontMed);
        font-weight: 600;
    }

    .no-grid {
        color: var(---dark-brown);
    }

    .no-glass-grid {
        color: var(--white);
        height: 600px;
    }
`;
