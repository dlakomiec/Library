import React from 'react';
import {
  NavWrapper,
  Bottom,
  StyledLink,
  SignOutButton,
} from './Navigation.styles';
import firebase from 'util/firebase';

const LogOut = ({ history }) => {
  alert(`Wylogowano poprawnie`);
  firebase.auth().signOut();
};

const Navigation = () => (
  <>
    <Bottom>
      <div>
        <h2>Księgarnia</h2>
      </div>
      <div>
        <SignOutButton onClick={LogOut}>Wyloguj</SignOutButton>
      </div>
    </Bottom>
    <NavWrapper>
      <StyledLink to="/dashboard">Strona główna</StyledLink>
      <StyledLink to="/bookList">Lista książek</StyledLink>
    </NavWrapper>
  </>
);

export default Navigation;
