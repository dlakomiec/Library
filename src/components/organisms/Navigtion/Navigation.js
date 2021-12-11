import React from 'react';
import { NavWrapper, StyledLink, SignOutButton } from './Navigation.styles';
import firebase from 'util/firebase';

const LogOut = () => {
  alert(`Wylogowano poprawnie`);
  firebase.auth().signOut();
};

const Navigation = () => (
  <>
    <NavWrapper>
      <h2>Księgarnia</h2>
      <StyledLink to="/welcome">Dashboard</StyledLink>
      <StyledLink to="/form">Dodaj książkę </StyledLink>
      <StyledLink to="/bookList">Lista książek</StyledLink>

      {/* <SignOutButton onClick={() => firebase.auth().signOut()}>
        Wyloguj
      </SignOutButton> */}
      <SignOutButton onClick={LogOut}>Wyloguj</SignOutButton>
    </NavWrapper>
  </>
);

export default Navigation;
