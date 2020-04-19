import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import { colors } from './colors'
import background from '../assets/images/background.svg'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: ${colors.background} url(${background}) no-repeat center top;
    min-width: 420px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Lato, sans-serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }

  #root {
    margin: 0 auto;
    max-width: 1024px;
    padding: 0 20px 50px;
  }
`
