import React from 'react';
import {
  NavWrapper,
  StyledLink,
  SignOutButton,
  Bottom,
} from './AdminNavigation.styles';
import firebase from 'util/firebase';

const LogOut = () => {
  alert(`Wylogowano poprawnie`);
  firebase.auth().signOut();
};

const AdminNavigation = () => (
  <>
    <Bottom>
      <div>
        <h2>Panel Admina</h2>
      </div>
      <div>
        <SignOutButton onClick={LogOut}>Wyloguj</SignOutButton>
      </div>
    </Bottom>

    <NavWrapper>
      <p>Użytkownicy</p>
      <StyledLink to="/adminform">Dodaj książkę </StyledLink>
      <StyledLink to="/adminbooklist">Lista książek</StyledLink>
      <StyledLink to="/upcomingform">Dodaj nowość</StyledLink>
      <StyledLink to="/upcominglist">Nadchodzące</StyledLink>
      {/*<SignOutButton onClick={LogOut}>Wyloguj</SignOutButton>*/}
    </NavWrapper>
  </>
);

export default AdminNavigation;
