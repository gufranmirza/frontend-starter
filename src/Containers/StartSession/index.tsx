import React from 'react';
import { Ripple } from 'react-awesome-spinners';
import Typography from 'antd/lib/typography';
import * as vars from '@/core/Theme/vars';

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
            <Ripple />
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
            After submitting login details, we&apos;ll send you an email link to
            login .
          </Title>
        </styles.Info>
      </div>
    );
  }
}
export default Authenticate;
