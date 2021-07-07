import React from 'react';
import Head from 'next/head';
import Header from '@/Components/Common/Header';
import Login from '@/Containers/Login';
import withoutAuth from '@/core/Components/HOCS/withoutAuth';
import { useAuth } from '@/core/Components/Providers/AuthProvider';
import { useRouter } from 'next/router';

const Home: React.FC<{}> = () => {
  const { setAuthenticated } = useAuth();
  const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>Post Jobs, Hire Best Candidate</title>
      </Head>
      <Header />
      <Login authenticate={setAuthenticated} router={router} />
    </div>
  );
};

export default withoutAuth(Home);
