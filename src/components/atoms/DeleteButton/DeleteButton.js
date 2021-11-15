import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  background-color: black;
  color: white;
  text-transform: uppercase;
`;

const DeleteButton = (props) => (
  <StyledButton {...props}>usuń książkę</StyledButton>
);

export default DeleteButton;
