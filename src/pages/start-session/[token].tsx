import React from 'react';
import Head from 'next/head';
import Header from '@/Components/Common/Header';
import Authenticate from '@/Containers/StartSession';
import Footer from '@/Components/Common/Footer';
import { useRouter } from 'next/router';

const Load: React.FC<{}> = () => {
  const router = useRouter();
  const { token } = router.query;
  console.log(token);
  return (
    <div className="container">
      <Head>
        <title>Post Jobs, Hire Best Candidate</title>
      </Head>
      <Header />
      <Authenticate />
      <Footer />
    </div>
  );
};

export default Load;
