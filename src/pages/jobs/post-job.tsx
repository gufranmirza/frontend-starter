import React from 'react';
import Head from 'next/head';
import HeaderPrivate from '@/components/common/HeaderPrivate';
import withAuth from '@/core/components/HOCS/withAuth';
import config from '@/core/config';
import NewJob from '@/containers/NewJob';

const Home: React.FC<{}> = () => (
  <div className="container">
    <Head>
      <title>
        {config('Product.Name')} - Post a new job | Post Jobs, Hire Best
        Candidate{' '}
      </title>
    </Head>

    <div>
      <HeaderPrivate />
      <NewJob />
    </div>
  </div>
);

export default withAuth(Home);
