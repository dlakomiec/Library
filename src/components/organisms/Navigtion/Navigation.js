import React from 'react';
import { NavWrapper, StyledLink } from './Navigation.styles';

const Navigation = () => (
  <>
    <NavWrapper>
      {/* <Wrapper> */}
      <h2>Księgarnia</h2>
      <StyledLink to="/dashboard">Dashboard</StyledLink>
      <StyledLink to="/form">Dodaj książkę </StyledLink>
      <StyledLink to="/bookList">Lista książek</StyledLink>
      {/* </Wrapper> */}
    </NavWrapper>
  </>
);

export default Navigation;
