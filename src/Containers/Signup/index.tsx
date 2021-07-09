import React from 'react';
import { AppContainer } from '@/core/Components/AppContainer';
import Footer from '@/Components/Common/Footer';
import HeroFeatures from '@/Components/Common/HeroFeatures';
import * as vars from '@/core/Theme/vars';
import Typography from 'antd/lib/typography';
import Right from './Right';
import Left from './Left';
import * as styles from './styles';

const { Title } = Typography;

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(): any {
    return (
      <div>
        <styles.Root>
          <AppContainer>
            <styles.Container>
              <styles.ColumnLeft>
                <Left />
              </styles.ColumnLeft>
              <styles.Column>
                <Right />
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
            After submitting the details, we&apos;ll send you an email you a
            link to login with.
          </Title>
        </styles.Info>
        <HeroFeatures />
        <Footer />
      </div>
    );
  }
}

export default Signup;
