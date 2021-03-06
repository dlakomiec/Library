import React, { useState, useCallback, useContext } from 'react';
import {
  LoginWrapper,
  LeftDiv,
  RightDiv,
  LoginButton,
  SignInButton,
  AdminButton,
} from './LoginSite.styles';
import { Link } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';
import firebase from 'util/firebase';
import { AuthContext } from 'components/Auth';

const LoginSite = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <LoginWrapper>
        <LeftDiv />
        <RightDiv>
          <h1>ksiegarnia</h1>
          <form onSubmit={handleLogin}>
            <label>
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
              <input name="password" type="password" placeholder="Hasło" />
            </label>
            <LoginButton type="submit">Zaloguj sie</LoginButton>
            <div>
              <p>Potrzebujesz konta? </p>
              <Link to="/signup">
                <SignInButton>Zarejestruj sie</SignInButton>
              </Link>
            </div>
          </form>
          <Link to="/adminlogin">
            <AdminButton>Admin</AdminButton>
          </Link>
        </RightDiv>
      </LoginWrapper>
    </>
  );
};

export default LoginSite;
