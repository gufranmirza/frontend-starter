import * as vars from '@/core/Theme/vars';
import Typography from 'antd/lib/typography';
import React from 'react';
import { Ripple } from 'react-awesome-spinners';
import { AppContainer } from '@/core/Components/AppContainer';
import * as styles from './styles';

const { Title } = Typography;

class Authenticate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
