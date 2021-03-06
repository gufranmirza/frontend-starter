import React from 'react';
import Head from 'next/head';
import HeaderPrivate from '@/components/common/HeaderPrivate';
import withAuth from '@/core/components/HOCS/withAuth';
import config from '@/core/config';

const Home: React.FC<{}> = () => (
  <div className="container">
    <Head>
      <title>
        {config('Product.Name')} - Home | Post Jobs, Hire Best Candidate{' '}
      </title>
    </Head>

    <div>
      <HeaderPrivate />
      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>
    </div>
  </div>
);

export default withAuth(Home);
