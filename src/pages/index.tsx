import React from 'react';
import Head from 'next/head';
import Title from '@/Components/Title';
import Header from '@/Components/Common/Header';

const Home: React.FC<{}> = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
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
