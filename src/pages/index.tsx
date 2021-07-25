import React from 'react';
import Head from 'next/head';
import Header from '@/components/common/Header';
import withAuth from '@/core/components/HOCS/withAuth';

const Home: React.FC<{}> = () => (
  <div className="container">
    <Head>
      <title>Post Jobs, Hire Best Candidate</title>
    </Head>

    <main>
      <Header />
      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>
    </main>
  </div>
);

export default withAuth(Home);
