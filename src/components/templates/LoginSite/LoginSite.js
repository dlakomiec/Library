import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { cms } from 'assets/cms';
import { Link } from 'react-router-dom';

const LoginWrapper = styled.div`
  display: flex;
`;

const LeftDiv = styled.div`
  background: center center url(${cms.images.books});
  background-size: cover;
  width: 50%;
  height: 100vh;
`;
const RightDiv = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-transform: uppercase;
    margin-bottom: 45px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      height: 60px;
      width: 400px;
      margin: 5px 0 40px 0;
      background-color: ${({ theme }) => theme.colors.lightGrey};
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;

const LoginButton = styled.button`
  width: 400px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.l};
  color: white;
  margin-top: 30px;
  text-transform: uppercase;
`;

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
    <>
      <LoginWrapper>
        <LeftDiv />
        <RightDiv>
          <h1>ksiegarnia</h1>
          <form>
            <label>
              <input
                type="text"
                name="login"
                value={formValue.name}
                onChange={handleInputCHange}
              />
            </label>
            <label>
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
    </>
  );
};

export default LoginSite;
