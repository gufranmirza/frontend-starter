import React from 'react';
import Head from 'next/head';
import Header from '@/Components/Common/Header';
import Login from '@/Containers/Login';
import withoutAuth from '@/core/Components/HOCS/withoutAuth';

const Home: React.FC<{}> = () => (
  <div className="container">
    <Head>
      <title>Post Jobs, Hire Best Candidate</title>
    </Head>
    <Header />
    <Login />
  </div>
);

export default withoutAuth(Home);
