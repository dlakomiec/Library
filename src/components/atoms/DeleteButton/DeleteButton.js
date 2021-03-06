import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  border-radius: 20px;
  color: white;
  padding: 4px;
  font-weight: bold;
  text-transform: uppercase;
`;

const DeleteButton = (props) => (
  <StyledButton {...props}>usuń książkę</StyledButton>
);

export default DeleteButton;
