import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'

const GlobalStyles = createGlobalStyle`

  ${reset}

  :root {
    /* Typography */
    --mainFont: 'Kumbh Sans', sans-serif;

    /* Colors */
    --black: #1d2026;
    --gray: #69707d;
    --light-gray: #e4e9f2;
    --orange: #ff7e1b;
    --orange-2: #ffab6a;
    --orange-3: #ffeee2;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    font-family: var(--mainFont);
  }

  img {
    display: block;
    max-width: 100%;
  }
`

export default GlobalStyles
