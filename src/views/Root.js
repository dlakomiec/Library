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
// import AdminForm from 'components/templates/admin/AdminForm/AdminForm';
import AdminForm from '../components/templates/admin/AdminForm/AdminForm';
import AdminBookList from '../components/templates/admin/AdminBookList/AdminBookList';
import UpcomingForm from 'components/templates/admin/upcomingBooks/UpcomingForm';
import UpcomingList from 'components/templates/admin/upcomingBooks/UpcomingList';
import UsersList from 'components/templates/admin/UsersList/UsersList';

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
            <Route exact path="/" component={LoginSite} />
            <PrivateRoute
              exact
              path="/dashboard"
              component={WelcomeDashboard}
            />
            <Route exact path="/signup" component={SignUpSite} />
            <PrivateRoute exact path="/form" component={Form} />
            <PrivateRoute exact path="/booklist" component={BooksList} />
            <PrivateRoute exact path="/welcome" component={WelcomeDashboard} />
            <Route exact path="/adminlogin" component={AdminLogin} />
            <PrivateRoute exact path="/adminform" component={AdminForm} />
            <PrivateRoute exact path="/upcomingform" component={UpcomingForm} />
            <PrivateRoute
              exact
              path="/adminbooklist"
              component={AdminBookList}
            />
            <PrivateRoute exact path="/users-list" component={UsersList} />
            <PrivateRoute exact path="/upcominglist" component={UpcomingList} />
            <PrivateRoute exact path="/admin" component={AdminDashboard} />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
