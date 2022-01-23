import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
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
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');

        const userRef = firebase.database().ref('Użytkownicy');
        const name = event.target.elements.name.value;
        const emailAdress = event.target.elements.email.value;
        const UUID = firebase.auth().currentUser.uid;
        const user = {
          UUID,
          emailAdress,
          name,
        };
        userRef.push(user);
      } catch (error) {
        alert(error);
      }
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
            <input name="name" type="text" placeholder="Imie" />
          </label>
          <label>
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            <input name="password" type="password" placeholder="Hasło" />
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
