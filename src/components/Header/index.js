import React from 'react';

import { Container } from './styles';

function Header({ isBlack }) {
  return (
    <Container isBlack={isBlack}>
      <a href="/" className="logo">
        <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix"/>
      </a>
      <a href="/" className="user">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eaOLhoxB7QzTreXeq-uuobB5AODiIuqXWSKUspx_epXnpRmmreE56lU3g9asxyon8zM&usqp=CAU" alt="Usuario"/>
      </a>
    </Container>
  );
}

export default Header;