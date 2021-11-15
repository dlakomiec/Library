import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 20px;
  color: white;
  padding: 4px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 10px;
`;

const AddBookButton = () => <StyledButton>dodaj</StyledButton>;

export default AddBookButton;
