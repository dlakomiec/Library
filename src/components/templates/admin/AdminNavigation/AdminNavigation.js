import React from 'react';
import {
  NavWrapper,
  StyledLink,
  SignOutButton,
} from './AdminNavigation.styles';
import firebase from 'util/firebase';

const LogOut = () => {
  alert(`Wylogowano poprawnie`);
  firebase.auth().signOut();
};

const AdminNavigation = () => (
  <>
    <NavWrapper>
      <h2>Panel Admina</h2>
      <StyledLink to="/adminform">Dodaj książkę </StyledLink>
      <StyledLink to="/adminbooklist">Lista książek</StyledLink>
      <StyledLink to="/upcomingform">Dodaj nowość</StyledLink>
      <SignOutButton onClick={LogOut}>Wyloguj</SignOutButton>
    </NavWrapper>
  </>
);

export default AdminNavigation;
