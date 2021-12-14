import styled from 'styled-components';

export const WrapperBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 300px;
  margin: 15px 0 0 0;

  p {
    span {
      font-weight: bold;
    }
  }
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  border-radius: 20px;
  color: white;
  padding: 4px;
  width: 150px;
  margin: 5px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CompleteButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  border-radius: 20px;
  color: white;
  width: 150px;
  margin: 5px;

  padding: 4px;
  font-weight: bold;
  text-transform: uppercase;
`;
