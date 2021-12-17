import React from 'react';
import { NavWrapper, StyledLink, SignOutButton } from './Navigation.styles';
import firebase from 'util/firebase';

const LogOut = ({ history }) => {
  alert(`Wylogowano poprawnie`);
  firebase.auth().signOut();
};

const Navigation = () => (
  <>
    <NavWrapper>
      <h2>Księgarnia</h2>
      {/*//zmien nazwe*/}
      <StyledLink to="/dashboard">NAZWA STRONY</StyledLink>
      <StyledLink to="/form">Dodaj książkę </StyledLink>
      <StyledLink to="/bookList">Lista książek</StyledLink>
      <SignOutButton onClick={LogOut}>Wyloguj</SignOutButton>
    </NavWrapper>
  </>
);

export default Navigation;
