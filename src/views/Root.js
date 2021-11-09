import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <h2>Build</h2>
  </ThemeProvider>
);

export default Root;
