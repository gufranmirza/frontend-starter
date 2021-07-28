import React from 'react';

import * as vars from '@/core/theme/vars';
import Typography from 'antd/lib/typography';
import { Ripple } from 'react-awesome-spinners';
import { AppContainer } from '@/core/components/AppContainer';
import { NextRouter } from 'next/router';
import Config from '@/core/config';
import Cookies from 'universal-cookie';
import message from 'antd/lib/message';

import axios from 'axios';
import * as styles from './styles';

const { Title } = Typography;

type State = {};

type Props = {
  token: string;
  router: NextRouter;
  authenticate: any;
};

const errorNotification = (): void => {
  message.error({
    duration: 4,
    content:
      'We could not authenticate your login request. Please try again with new login link',
    style: {
      marginTop: '100px',
    },
  });
};

class Authenticate extends React.Component<Props, State> {
  componentDidMount(): void {
    const { token, router, authenticate } = this.props;
    const cookies = new Cookies();

    axios
      .post(`${Config('ServiceURI')}/authenticate`, {
        Token: token,
      })
      .then(res => {
        const { status, data } = res;
        if (data !== undefined && status === 200) {
          cookies.set('session', data.accessToken, { path: '/' });
          authenticate(true);
          router.push('/');
        } else {
          authenticate(false);
          errorNotification();
          setTimeout(() => {
            router.push('/login');
          }, 4000);
        }
      })
      .catch(() => {
        authenticate(false);
        errorNotification();
        setTimeout(() => {
          router.push('/login');
        }, 4000);
      });
  }

  render(): any {
    return (
      <div>
        <styles.Root>
          <styles.Container>
            <Ripple color={vars.Blue6} /> <br />
            <Typography.Paragraph>
              {' '}
              We are securely logging you in, please wait ...
            </Typography.Paragraph>
          </styles.Container>
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
            <AppContainer>
              You will be redirected to the requested webpage after
              authentication is completed
            </AppContainer>
          </Title>
        </styles.Info>
      </div>
    );
  }
}
export default Authenticate;
