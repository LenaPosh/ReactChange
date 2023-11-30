// ThemeProvider.js
import React from 'react';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from './themes';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
  }
`;

const ThemeProvider = ({ children }) => {
    return (
        <StyledThemeProvider theme={lightTheme}>
            <GlobalStyle />
            {children}
        </StyledThemeProvider>
    );
};

export default ThemeProvider;

