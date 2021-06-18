import React from 'react';
import '@/core/Theme/antd.less';
import '@/core/Theme/base';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle``;
const theme = {};

export default function App({ Component, pageProps }): JSX.Element {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
