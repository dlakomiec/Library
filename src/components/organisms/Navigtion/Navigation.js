import React from 'react';
import { NavWrapper, StyledLink } from './Navigation.styles';
import firebase from 'util/firebase';

const Navigation = () => (
  <>
    <NavWrapper>
      <h2>Księgarnia</h2>
      <StyledLink to="/welcomedashboard">Dashboard</StyledLink>
      <StyledLink to="/form">Dodaj książkę </StyledLink>
      <StyledLink to="/bookList">Lista książek</StyledLink>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </NavWrapper>
  </>
);

export default Navigation;
