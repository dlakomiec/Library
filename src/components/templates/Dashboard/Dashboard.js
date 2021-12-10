// import React from 'react';
// import { Wrapper, DashboardWrapper } from './Dashboard.styles';

// const Dashboard = () => (
//   <Wrapper>
//     <DashboardWrapper>
//       <h2>Witaj w panelu</h2>
//       <p>lorem ipsum cos tam cos tam </p>
//     </DashboardWrapper>
//   </Wrapper>
// );

// export default Dashboard;

import BooksList from 'components/organisms/BooksList/BooksList';
import Form from 'components/organisms/Form/Form';
import Navigation from 'components/organisms/Navigtion/Navigation';
import WelcomeDashboard from 'components/organisms/WelcomeDashboard/WelcomeDashboard';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 220px;

  div {
    margin: 0;
    padding: 0;
  }
`;

const Dashboard = () => (
  <>
    <Navigation />
    <Wrapper>
      <Switch>
        <PrivateRoute path="/bookList">
          <BooksList />
        </PrivateRoute>
        <PrivateRoute path="/form">
          <Form />
        </PrivateRoute>
        <PrivateRoute path="/welcomedashboard">
          <WelcomeDashboard />
        </PrivateRoute>
      </Switch>
    </Wrapper>
  </>
);

export default Dashboard;
