import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-left: 120px; */
`;

const DashboardWrapper = styled.div`
  height: 100vh;
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const WelcomeDashboard = () => (
  <Wrapper>
    <DashboardWrapper>
      <h2>Witaj w panelu</h2>
      <p>lorem ipsum cos tam cos tam </p>
    </DashboardWrapper>
  </Wrapper>
);

export default WelcomeDashboard;
