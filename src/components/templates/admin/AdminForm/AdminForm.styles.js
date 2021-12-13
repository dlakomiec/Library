import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const MainPageButton = styled.button`
  width: 200px;
  margin-top: 20px;
  cursor: pointer;
`;
