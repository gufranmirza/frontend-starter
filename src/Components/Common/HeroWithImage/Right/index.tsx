import React from 'react';
import Typography from 'antd/lib/typography';
import * as vars from '@/core/Theme/vars';
import { CheckCircleFilled } from '@ant-design/icons';
import * as styles from './styles';

const { Title, Paragraph } = Typography;

type Props = {
  title: string;
  description: string;
  features: Array<string>;
};

const Right: React.FC<Props> = ({ title, description, features }) => (
  <styles.Root>
    {' '}
    <Title
      level={2}
      style={{ color: vars.Blue8, marginBottom: '0.4em', maxWidth: '450px' }}
    >
      {title}
    </Title>
    <Title
      level={4}
      style={{
        fontWeight: 'normal',
        maxWidth: '450px',
        color: vars.HeadingColor2,
        marginTop: 0,
        fontSize: '18px',
        marginBottom: '1em',
      }}
    >
      {description}
    </Title>
    {features.map(index => (
      <Paragraph style={{ marginBottom: '0.5em;' }}>
        <CheckCircleFilled
          style={{ marginRight: '5px', fontSize: '16px', color: vars.Blue8 }}
        />
        {(features[index], index)}
      </Paragraph>
    ))}
  </styles.Root>
);

export default Right;
