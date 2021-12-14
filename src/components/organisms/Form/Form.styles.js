import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  label {
    margin: 10px 0;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-item: center; */
`;

export const AddBookButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 20px;
  color: white;
  padding: 4px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const ChecboxForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
