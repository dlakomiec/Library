import styled from 'styled-components';
import { cms } from 'assets/cms';

export const LoginWrapper = styled.div`
  display: flex;
`;

export const LeftDiv = styled.div`
  background: center center url(${cms.images.books});
  background-size: cover;
  width: 50%;
  height: 100vh;
`;
export const RightDiv = styled.div`
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

export const LoginButton = styled.button`
  width: 400px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.l};
  color: white;
  margin-top: 30px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;

export const SignInButton = styled.button`
  cursor: pointer;
  width: 400px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: white;
  margin-top: 30px;
  text-transform: uppercase;
  margin-top: 10px;
`;

export const AdminButton = styled.button`
  width: 200px;
  height: 60px;
  background-color: #5c6784;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: white;
  margin-top: 30px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
`;
