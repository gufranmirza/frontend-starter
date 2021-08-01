import React from 'react';
import Head from 'next/head';
import Header from '@/components/common/Header';
import Signup from '@/containers/Signup';
import withoutAuth from '@/core/components/HOCS/withoutAuth';
import config from '@/core/config';

const Home: React.FC<{}> = () => (
  <div className="container">
    <Head>
      <title>
        {config('Product.Name')} - Signup | Post Jobs, Hire Best Candidate
      </title>
    </Head>
    <Header />
    <Signup />
  </div>
);

export default withoutAuth(Home);
