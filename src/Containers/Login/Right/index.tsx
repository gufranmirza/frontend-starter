import React from 'react';
import Typography from 'antd/lib/typography';
import * as vars from '@/core/Theme/vars';
import { NextRouter } from 'next/router';
import Form from '../Form';
import * as styles from './styles';

const { Title } = Typography;

type Props = {
  router: NextRouter;
  authenticate: any;
};
const Right: React.FC<Props> = props => {
  const { router, authenticate } = props;
  return (
    <styles.Root>
      {' '}
      <Title style={{ marginBottom: '0.4em', maxWidth: '450px' }}>
        {' '}
        Login & Start Hiring
      </Title>
      <Title
        level={4}
        style={{
          fontWeight: 'normal',
          maxWidth: '450px',
          color: vars.HeadingColor2,
          marginTop: 0,
          fontSize: '18px',
        }}
      >
        Login to manage your job postings, shortlist candidates and post new
        jobs.
      </Title>
      <Form router={router} authenticate={authenticate} />
    </styles.Root>
  );
};

export default Right;
