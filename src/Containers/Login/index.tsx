import React from 'react';
import { AppContainer } from '@/core/Components/AppContainer';
import HeroFeatures from '@/Components/Common/HeroFeatures';
import Footer from '@/Components/Common/Footer';
import Typography from 'antd/lib/typography';
import * as vars from '@/core/Theme/vars';
import { NextRouter } from 'next/router';

import Right from './Right';
import Left from './Left';
import * as styles from './styles';

const { Title } = Typography;

type Props = {
  router: NextRouter;
  authenticate: any;
};

const Login: React.FC<Props> = props => {
  const { router, authenticate } = props;
  return (
    <div>
      <styles.Root>
        <AppContainer>
          <styles.Container>
            <styles.ColumnLeft>
              <Left />
            </styles.ColumnLeft>
            <styles.Column>
              <Right router={router} authenticate={authenticate} />
            </styles.Column>
          </styles.Container>
        </AppContainer>
      </styles.Root>
      <styles.Info>
        <Title
          level={5}
          style={{
            fontWeight: 'normal',
            color: vars.HeadingColor1,
            margin: 0,
            textAlign: 'center',
            paddingTop: '25px',
            paddingBottom: '25px',
          }}
        >
          After submitting login details, we&apos;ll send you an email link to
          login .
        </Title>
      </styles.Info>
      <HeroFeatures />
      <Footer />
    </div>
  );
};

export default Login;
