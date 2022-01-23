import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 150px;
  width: 200px;
  background-color: green;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StyledComponentExample = () => (
  <>
    <StyledDiv>
      <p>Paragraph</p>
    </StyledDiv>
  </>
);
export default StyledComponentExample;
