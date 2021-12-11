import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import firebase from 'util/firebase';
import { AuthContext } from 'components/Auth';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  form {
    display: flex;
    flex-direction: column;
    button {
      cursor: pointer;
    }
    input {
      height: 30px;
      width: 200px;
      margin: 5px 0 40px 0;
      background-color: ${({ theme }) => theme.colors.lightGrey};
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;

const MainPageButton = styled.button`
  width: 200px;
  margin-top: 20px;
  cursor: pointer;
`;

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
        {/* <LoginButton type="submit">Zaloguj sie</LoginButton>
            <Link to="/signup">
              <SignInButton>Zarejestruj sie</SignInButton>
            </Link> */}
        <button type="submite">Zaloguj do panelu</button>
      </form>
      <Link to="/login">
        <MainPageButton>Strona główna</MainPageButton>
      </Link>
    </Wrapper>
  );
};

export default AdminLogin;
