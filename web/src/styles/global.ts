import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: #ebf2f5;
    color: #fff;
  }

  body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
  }
`
