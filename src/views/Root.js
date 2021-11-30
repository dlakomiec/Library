import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import LoginSite from 'components/templates/LoginSite/LoginSite';
import BooksList from 'components/organisms/BooksList/BooksList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';
import Navigation from 'components/organisms/Navigtion/Navigation';
import Dashboard from 'components/templates/Dashboard/Dashboard';
import styled from 'styled-components';
import Form1 from 'components/organisms/Form1/Form1';

const Wrapper = styled.div`
  margin-left: 220px;
`;

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Route path="/" exact>
          <LoginSite />
        </Route>
        <Navigation />
        <Wrapper>
          <Switch>
            <Route path="/bookList">
              <BooksList />
            </Route>

            <Route path="/form">
              <Form1 />
            </Route>

            <Route>
              <Dashboard path="/dashboard" />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
