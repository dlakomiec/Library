import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigtion/Navigation';
import UpcomingView from 'components/organisms/UpcomingView/UpcomingView';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 220px;
`;

const DashboardWrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const WelcomeDashboard = () => (
  <>
    <Navigation />
    <Wrapper>
      <DashboardWrapper>
        <h2>Witaj w panelu</h2>
        <p>lorem ipsum cos tam cos tam </p>
      </DashboardWrapper>
    </Wrapper>
    <UpcomingView />
  </>
);

export default WelcomeDashboard;
