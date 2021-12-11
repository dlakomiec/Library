import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import LoginSite from 'components/templates/LoginSite/LoginSite';
import BooksList from 'components/organisms/BooksList/BooksList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';
import styled from 'styled-components';
import { AuthProvider } from 'components/Auth';
import PrivateRoute from 'components/PrivateRoute';
import Dashboard from 'components/templates/Dashboard/Dashboard';
import SignUpSite from 'components/organisms/SignUpSite/SignUpSite';
import WelcomeDashboard from 'components/organisms/WelcomeDashboard/WelcomeDashboard';
import AdminLogin from 'components/templates/admin/AdminLogin/AdminLogin';
import AdminDashboard from 'components/templates/admin/AdminDashboard/AdminDashboard';

const Wrapper = styled.div`
  margin-left: 220px;
`;

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <div>
            {/* <Navigation /> */}
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route exact path="/login" component={LoginSite} />
            <Route exact path="/signup" component={SignUpSite} />
            <PrivateRoute exact path="/form" component={Form} />
            <PrivateRoute exact path="/booklist" component={BooksList} />
            <PrivateRoute exact path="/welcome" component={WelcomeDashboard} />
            <Route exact path="/adminlogin" component={AdminLogin} />
            <Route exact path="/admin" component={AdminDashboard} />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
