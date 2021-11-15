import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import LoginSite from 'components/templates/LoginSite/LoginSite';
import BooksList from 'components/organisms/BooksList/BooksList';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {/* <LoginSite /> */}
    <BooksList />
  </ThemeProvider>
);

export default Root;
