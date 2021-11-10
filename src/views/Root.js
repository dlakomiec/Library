import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import LoginSite from 'components/templates/LoginSite/LoginSite';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <LoginSite />
  </ThemeProvider>
);

export default Root;
