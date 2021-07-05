import React from 'react';
import Head from 'next/head';
import Header from '@/Components/Common/Header';
import Authenticate from '@/Containers/StartSession';
import Footer from '@/Components/Common/Footer';
import { useRouter } from 'next/router';
import { useAuth } from '@/core/Components/Providers/AuthProvider';

const Load: React.FC<{}> = () => {
  const router = useRouter();
  const { token } = router.query;
  const { setAuthenticated } = useAuth();
  return (
    <div className="container">
      <Head>
        <title>Post Jobs, Hire Best Candidate</title>
      </Head>
      <Header />
      <Authenticate
        token={String(token)}
        router={router}
        authenticate={setAuthenticated}
      />
      <Footer />
    </div>
  );
};

export default Load;
