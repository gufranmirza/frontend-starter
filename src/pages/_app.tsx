import React from 'react';
import '@/core/Theme/antd.less';
import '@/core/Theme/base';

export default function App({ Component, pageProps }): any {
  return <Component {...pageProps} />;
}
