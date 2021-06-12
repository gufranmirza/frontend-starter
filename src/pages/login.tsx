import React from 'react';
import Head from 'next/head';
import Title from '@/Components/Title';
import Header from '@/Components/Common/Header';

const Home: React.FC<{}> = () => (
  <div className="container">
    <Head>
      <title>Post Jobs, Hire Best Candidate</title>
    </Head>

    <main>
      <Header />
      <Title />

      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>
    </main>
  </div>
);

export default Home;
