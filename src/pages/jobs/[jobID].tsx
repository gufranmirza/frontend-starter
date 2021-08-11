import React from 'react';
import Header from '@/components/common/HeaderPrivate';
import ViewJob from '@/containers/ViewJob';
import Footer from '@/components/common/Footer';
import { useRouter } from 'next/router';
import withAuth from '@/core/components/HOCS/withAuth';
import axios from 'axios';
import { GetJWTHeader } from '@/core/http/requests';
import config from '@/core/config';

type Props = {
  data: Record<string, any>;
};

const Load: any = (props: Props) => {
  const router = useRouter();
  const { jobID } = router.query;

  return (
    <div>
      <Header />
      <ViewJob data={props} jobID={String(jobID)} router={router} />
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
