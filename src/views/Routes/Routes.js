import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import LoginSite from '../../components/templates/LoginSite/LoginSite';
import SignUpSite from '../../components/organisms/SignUpSite/SignUpSite';
import AdminLogin from '../../components/templates/admin/AdminLogin/AdminLogin';
import PrivateRoute from '../../components/PrivateRoute';
import WelcomeDashboard from '../../components/organisms/WelcomeDashboard/WelcomeDashboard';
import BooksList from '../../components/organisms/BooksList/BooksList';
import AdminForm from '../../components/templates/admin/AdminForm/AdminForm';
import UpcomingForm from '../../components/templates/admin/upcomingBooks/UpcomingForm';
import AdminBookList from '../../components/templates/admin/AdminBookList/AdminBookList';
import UsersList from '../../components/templates/admin/UsersList/UsersList';
import UpcomingList from '../../components/templates/admin/upcomingBooks/UpcomingList';
import AdminDashboard from '../../components/templates/admin/AdminDashboard/AdminDashboard';
import { AuthContext } from '../../components/Auth';

const Routes = () => {
  const { userAuth, adminAuth } = useContext(AuthContext);

  return (
    <>
      <Route exact path="/" component={LoginSite} />
      <Route exact path="/signup" component={SignUpSite} />
      <Route exact path="/adminlogin" component={AdminLogin} />
      <Route path="*">
        <Redirect to="/signup" />
      </Route>
      {userAuth ? (
        <>
          <PrivateRoute exact path="/dashboard" component={WelcomeDashboard} />
          <PrivateRoute exact path="/booklist" component={BooksList} />
          <PrivateRoute exact path="/welcome" component={WelcomeDashboard} />
          <Route path="*">
            <Redirect to="/dashboard" />
          </Route>
        </>
      ) : null}

      {adminAuth ? (
        <>
          <PrivateRoute exact path="/adminform" component={AdminForm} />
          <PrivateRoute exact path="/upcomingform" component={UpcomingForm} />
          <PrivateRoute exact path="/adminbooklist" component={AdminBookList} />
          <PrivateRoute exact path="/users-list" component={UsersList} />
          <PrivateRoute exact path="/upcominglist" component={UpcomingList} />
          <PrivateRoute exact path="/admin" component={AdminDashboard} />
          <Route path="*">
            <Redirect to="/adminform" />
          </Route>
        </>
      ) : null}
    </>
  );
};

export default Routes;
