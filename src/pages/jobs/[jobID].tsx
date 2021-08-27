import React from 'react';
import Header from '@/components/common/HeaderPrivate';
import ViewJob from '@/containers/ViewJob';
import Footer from '@/components/common/Footer';
import { useRouter } from 'next/router';
import withAuth from '@/core/components/HOCS/withAuth';
import axios from 'axios';
import { GetJWTHeader } from '@/core/http/requests';
import config from '@/core/config';
import Head from 'next/head';
import NotFound from '@/components/common/NotFound';
import { HasProperty } from '@/core/validations/property';

type Props = {
  data: Record<string, any>;
};

const Load: any = (props: Props) => {
  const router = useRouter();
  const { jobID } = router.query;

  return (
    <div>
      <Head>
        <title>
          {config('Product.Name')} - Home | Post Jobs, Hire Best Candidate{' '}
        </title>
      </Head>
      <Header />
      {props !== undefined && HasProperty(props, "id") ? ( // eslint-disable-line
        <ViewJob data={props} jobID={String(jobID)} router={router} />
      ) : (
        <NotFound />
      )}
      <Footer />
    </div>
  );
};

export default withAuth(Load);

Load.getInitialProps = async (appContext): Promise<Record<string, any>> => {
  const { jobID } = appContext.query;
  try {
    // fetch data from a url endpoint
    const response = await axios.get(
      `${config('ServiceURI')}/jobs/${jobID}`,
      GetJWTHeader(),
    );
    // return response
    return response.data;
  } catch (error) {
    // return empty object
    return {};
  }
};
