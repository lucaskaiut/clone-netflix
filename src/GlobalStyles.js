import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
  box-sizing: border-box;
 }

 body {
   background-color: #111;
   margin: 0;
   color: #fff;
   font-family: 'Roboto', sans-serif;
 }

 .lists {
   margin-top: -150px;
 }

 .loading {
   position: fixed;

   top: 0;
   right: 0;
   bottom: 0;
   left: 0;

   z-index: 99;

   background-color: #000;

   display: flex;
   align-items: center;
   justify-content: center;
 }
`;