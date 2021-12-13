import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
// import app from './base';
import firebase from 'util/firebase';
import {
  LeftDiv,
  LoginWrapper,
  RightDiv,
  SignupButton,
  ComeBackButton,
} from '../../templates/LoginSite/LoginSite.styles';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, password2 } = event.target.elements;
      // if (event.target.elements.password == event.target.elements.password2) {
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
      // alert('hasla sa inne');
      // }
    },
    [history]
  );

  return (
    <LoginWrapper>
      <LeftDiv />
      <RightDiv>
        <h1>Zarejestruj sie</h1>
        <form onSubmit={handleSignUp}>
          <label>
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            <input name="password" type="password" placeholder="Password" />
          </label>
          <label>
            <input name="password2" type="password" placeholder="Password" />
          </label>
          <SignupButton type="submit">Zarejestruj się</SignupButton>
        </form>
        <Link to="/">
          <ComeBackButton>Powrót do strony głownej</ComeBackButton>
        </Link>
      </RightDiv>
    </LoginWrapper>
  );
};

export default withRouter(SignUp);
