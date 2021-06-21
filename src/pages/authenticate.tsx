import React from 'react';
import Head from 'next/head';
import Header from '@/Components/Common/Header';
import Authenticate from '@/Containers/Authenticate';
import Footer from '@/Components/Common/Footer';

const Load: React.FC<{}> = () => (
  <div className="container">
    <Head>
      <title>Post Jobs, Hire Best Candidate</title>
    </Head>
    <Header />
    <Authenticate />
    <Footer />
  </div>
);

export default Load;
