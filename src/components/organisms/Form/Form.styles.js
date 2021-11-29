import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  label {
    margin: 10px 0;
  }
`;
export const Input = styled.input`
  padding: 5px 8px;
  border: 1px solid black;
  border-radius: 20px;
  width: 250px;
  &:focus {
    outline: none;
    box-shadow: -1px 2px 8px rgba(115, 124, 142, 0.3);
  }
`;
