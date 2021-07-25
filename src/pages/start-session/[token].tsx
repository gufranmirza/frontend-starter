import React from 'react';
import Head from 'next/head';
import Header from '@/components/common/Header';
import Authenticate from '@/containers/StartSession';
import Footer from '@/components/common/Footer';
import { useRouter } from 'next/router';
import { useAuth } from '@/core/components/Providers/AuthProvider';
import withoutAuth from '@/core/components/HOCS/withoutAuth';

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

export default withoutAuth(Load);
