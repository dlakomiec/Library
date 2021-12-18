import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import firebase from 'util/firebase';
import { AuthContext } from 'components/Auth';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Wrapper, MainPageButton } from '../AdminForm/AdminForm.styles';
import Example from './Example';

const AdminLogin = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/admin');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/admin" />;
  }
  return (
    <Wrapper>
      <h2>Admin</h2>
      <form onSubmit={handleLogin}>
        <label>
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submite">Zaloguj do panelu</button>
      </form>
      <Link to="/">
        <MainPageButton>Strona główna</MainPageButton>
      </Link>
    </Wrapper>
  );
};

export default AdminLogin;
