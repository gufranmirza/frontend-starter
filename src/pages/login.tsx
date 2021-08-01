import React from 'react';
import Head from 'next/head';
import Header from '@/components/common/Header';
import Login from '@/containers/Login';
import withoutAuth from '@/core/components/HOCS/withoutAuth';
import { useAuth } from '@/core/components/Providers/AuthProvider';
import { useRouter } from 'next/router';
import config from '@/core/config';

const Home: React.FC<{}> = () => {
  const { setAuthenticated } = useAuth();
  const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>
          {config('Product.Name')} - Login | Post Jobs, Hire Best Candidate
        </title>
      </Head>
      <Header />
      <Login authenticate={setAuthenticated} router={router} />
    </div>
  );
};

export default withoutAuth(Home);
