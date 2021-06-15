import React from 'react';
import Head from 'next/head';
import Header from '@/Components/Common/Header';
import Signup from '@/Containers/Signup';

const Home: React.FC<{}> = () => (
  <div className="container">
    <Head>
      <title>Post Jobs, Hire Best Candidate</title>
    </Head>
    <Header />
    <Signup />
  </div>
);

export default Home;
