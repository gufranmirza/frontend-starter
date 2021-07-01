import React, { ReactElement } from 'react';
import App, { AppInitialProps } from 'next/app';
import cookie from 'cookie';
import '@/core/Theme/antd.less';
import '@/core/Theme/base';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { CookieMessage } from '@/core/types/index.d';
import { AuthProvider } from '@/core/Components/Providers/AuthProvider';

const GlobalStyle = createGlobalStyle``;
const theme = {};

type AppProps = {
  authenticated: boolean;
};

class MyApp extends App<AppProps> {
  render(): ReactElement {
    const { Component, pageProps, authenticated } = this.props;
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <AuthProvider authenticated={authenticated}>
            <Component {...pageProps} />
          </AuthProvider>
        </ThemeProvider>
      </div>
    );
  }
}

MyApp.getInitialProps = async (
  appContext,
): Promise<AppInitialProps & AppProps> => {
  let authenticated = false;
  const request = appContext.ctx.req as CookieMessage;
  if (request) {
    request.cookies = cookie.parse(request.headers.cookie || '');
    authenticated = !!request.cookies.session;
  }

  // TODO  Do the Cookie Validation here via API call

  // Call the page's `getInitialProps` and fill `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  console.log(appProps, authenticated);

  return { ...appProps, authenticated };
};

export default MyApp;
