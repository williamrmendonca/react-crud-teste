import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins|Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  @-webkit-keyframes autofill {
    to {
        color: #666;
        background: transparent;
    }
  }

  input:-webkit-autofill {
      -webkit-animation-name: autofill;
      -webkit-animation-fill-mode: both;
  }

  html, body, #root {
    height: 100%;
    overflow: auto;

  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 10px 'Poppins','Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  /* Itens dos menus */
  .MuiTypography-body1 {
    font-size: 13px !important;
  }

  /* Cabeçalho das listagens */
  .MuiTableCell-head {
    font-size: 14px !important;
  }

  /* Corpo da listagens */
  .MuiTableCell-body {
    font-size: 13px !important;
  }

  /* Titulo listagens */
  .MuiTypography-h6 {
    font-size: 16px !important;
  }

`;
