import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import {
  LoginWrapper,
  RightDiv,
  LeftDiv,
  LoginButton,
} from './LoginSite.styles';

const LoginSite = () => {
  const [formValue, setFormValue] = useState({
    login: '',
    password: '',
  });

  const handleInputCHange = (e) => {
    console.log(formValue);

    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <LoginWrapper>
      <LeftDiv />
      <RightDiv>
        <h1>ksiegarnia</h1>
        <form>
          <label htmlFor="login">
            <input
              type="text"
              name="login"
              value={formValue.name}
              onChange={handleInputCHange}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              value={formValue.name}
              onChange={handleInputCHange}
            />
          </label>
          {/* <input type="submit" value="Wyślij" /> */}
          {/* <LoginButton>Zaloguj</LoginButton> */}

          <LoginButton>
            <Link to="/dashboard">Dalej cho</Link> {/* wywlic pozniej */}
          </LoginButton>
        </form>
      </RightDiv>
    </LoginWrapper>
  );
};

export default LoginSite;
