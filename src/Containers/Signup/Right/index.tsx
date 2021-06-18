import React from 'react';
import Typography from 'antd/lib/typography';
import * as vars from '@/core/Theme/vars';
import Form from '../Form';
import * as styles from './styles';

const { Title } = Typography;

const Right: React.FC<{}> = () => (
  <styles.Root>
    {' '}
    <Title style={{ marginBottom: '0.4em', maxWidth: '450px' }}>
      {' '}
      Start Hiring With Us
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
      {' '}
      Hire anywhere in the world for free with smart-filtering and
      standardization of applications.{' '}
    </Title>
    <Form />
  </styles.Root>
);

export default Right;
