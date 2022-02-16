import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'

const GlobalStyles = createGlobalStyle`

  ${reset}

  :root {
    /* Typography */
    --mainFont: 'Kumbh Sans', sans-serif;

    /* Colors */
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
`

export default GlobalStyles
