import React from 'react';

import '@/core/Theme/base.scss';

export default function App({ Component, pageProps }): any {
  return <Component {...pageProps} />;
}
