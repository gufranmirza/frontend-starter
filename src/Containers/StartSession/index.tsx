import React from 'react';

import * as vars from '@/core/Theme/vars';
import Typography from 'antd/lib/typography';
import { Ripple } from 'react-awesome-spinners';
import { AppContainer } from '@/core/Components/AppContainer';
import { NextRouter } from 'next/router';
import { Config } from '@/core/config';
import cookie from 'cookie-cutter';
import message from 'antd/lib/message';

import axios from 'axios';
import * as styles from './styles';

const { Title } = Typography;

type State = {
  loading: boolean;
};

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
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount(): void {
    const { token, router, authenticate } = this.props;
    axios
      .post(`${Config().ServiceURI}authenticate`, {
        Token: token,
      })
      .then(res => {
        const { status, data } = res;
        if (data !== undefined && status === 200) {
          cookie.set('session', data.AccessToken);
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
    const { loading } = this.state;
    return (
      <div>
        <styles.Root>
          {loading && (
            <styles.Container>
              <Ripple color={vars.Blue6} /> <br />
              <Typography.Paragraph>
                {' '}
                We are securely logging you in, please wait ...
              </Typography.Paragraph>
            </styles.Container>
          )}
        </styles.Root>
        <styles.Info>
          <Title
            level={4}
            style={{
              fontWeight: 'normal',
              color: vars.HeadingColor1,
              margin: 0,
              fontSize: '18px',
              textAlign: 'center',
              paddingTop: '25px',
              paddingBottom: '25px',
            }}
          >
            <AppContainer>
              After submitting login details, we&apos;ll send you an email link
              to login .
            </AppContainer>
          </Title>
        </styles.Info>
      </div>
    );
  }
}
export default Authenticate;
