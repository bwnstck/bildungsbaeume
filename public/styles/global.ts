import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

/* VARIABLES */

:root {
    --color-black: #001B2C;
    --color-white: #ffffff;
    --color-text: var(----color-black);
    --color-background: #14609B;
    --color-cta: #FFC14A;
    --primary-color: #f171a2;
    --secondary-color: #FCAF45;
    --background-color: grey;

    --fontSize-small: 0.625rem
  }

/* STYLE RESET */

  * {
    box-sizing: border-box;
    /* transition: all 300ms ease-in-out; */
    margin: 0;
    padding: 0;
  }

  /* General Styles */

  html{
    background-color: var(--color-background);
    scroll-behavior: smooth;
    }

  body {
    margin:0;
    padding:0;

    font-family: 'urbane', sans-serif;
    font-weight: 500;
    font-style: normal;

    color: #222;

    height: 100%;

    /* Links */

    a {
      color: var(---secondary-color);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:active,
    a:hover {
      color: var(--primary-color);
    }

    /* Headings */

    h1,h2,h3,h4,h5,h6{
      /* color: var(--primary-color); */
      color: var(--color-white);
      margin: 1rem 0 .5rem;
      font-weight: 500;
      text-align: left;
    }

    h1{
      font-weight: 700;
      font-size: clamp(2.5rem, 5vw, 4rem);
    }
    h2{
      font-size: clamp(2rem, 5vw, 3.5rem);
    }
    h3{
      font-size: clamp(1.5rem, 5vw, 3rem);
    }
    h4{
      font-size: clamp(1rem, 5vw, 2.5rem);
    }

    /* Text */

    p {
      font-size: clamp(1rem, 5vw, 1.5rem);
      font-weight: 400;
      color: var(--color-text)
    }

    span {
      color: var(--color-text)
    }

  }
`
export default GlobalStyle
