import React from 'react';
import { AppContainer } from '@/core/Components/Containers';
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';
import Typography from 'antd/lib/typography';

import * as styles from './styles';

const { Title } = Typography;

type Props = {};
const dt = new Date();

class Hero extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <styles.Root1 Padding="60px 0">
        <AppContainer>
          <styles.Root>
            <styles.Container>
              <Title level={5} style={{ color: '#fff', marginBottom: '1.2em' }}>
                {' '}
                ABOUT
              </Title>
              <Title
                level={5}
                style={{
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  marginTop: '0.2em',
                }}
              >
                {' '}
                Home
              </Title>
              <Title
                level={5}
                style={{
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  marginTop: '0.2em',
                }}
              >
                {' '}
                About Us
              </Title>
              <Title
                level={5}
                style={{
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  marginTop: '0.2em',
                }}
              >
                {' '}
                Contact
              </Title>
              <Title
                level={5}
                style={{
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  marginTop: '1em',
                }}
              >
                {' '}
                jobbox.ai © {dt.getFullYear()}. <br /> All rights reserved.
              </Title>
            </styles.Container>
            <styles.Container>
              <Title level={5} style={{ color: '#fff', marginBottom: '1.2em' }}>
                {' '}
                GET INVOLVED
              </Title>
              <Title
                level={5}
                style={{
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  marginTop: '0.2em',
                }}
              >
                {' '}
                For Job Seekers
              </Title>{' '}
              <Title
                level={5}
                style={{
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  marginTop: '0.2em',
                }}
              >
                {' '}
                Employers Login
              </Title>
              <Title
                level={5}
                style={{
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  marginTop: '0.2em',
                }}
              >
                {' '}
                Employers Sign up
              </Title>
            </styles.Container>
            <styles.Container>
              <Title level={5} style={{ color: '#fff', marginBottom: '1.2em' }}>
                {' '}
                STAY CONNECTED
              </Title>
              <Title
                level={5}
                style={{
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  marginTop: '0.2em',
                }}
              >
                <FacebookFilled
                  style={{
                    marginRight: '5px',
                    fontSize: '22px',
                    color: '#fff',
                    verticalAlign: 'top',
                  }}
                />
                Facebook
              </Title>
              <Title
                level={5}
                style={{
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  marginTop: '0.2em',
                }}
              >
                <TwitterSquareFilled
                  style={{
                    marginRight: '5px',
                    fontSize: '22px',
                    color: '#fff',
                    verticalAlign: 'top',
                  }}
                />
                Twitter
              </Title>
              <Title
                level={5}
                style={{
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  marginTop: '0.2em',
                }}
              >
                <LinkedinFilled
                  style={{
                    marginRight: '5px',
                    fontSize: '22px',
                    color: '#fff',
                    verticalAlign: 'top',
                  }}
                />
                Linkedin
              </Title>
            </styles.Container>
            <styles.Container>
              <Title level={5} style={{ color: '#fff', marginBottom: '1.2em' }}>
                {' '}
                SALES ENQUIRIES
              </Title>
              <Title
                level={5}
                style={{
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  marginTop: '0.2em',
                }}
              >
                <PhoneOutlined
                  style={{
                    marginRight: '5px',
                    fontSize: '20px',
                    color: '#fff',
                    verticalAlign: 'top',
                  }}
                />
                +91-1234567890
              </Title>
              <Title
                level={5}
                style={{
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  marginTop: '0.2em',
                }}
              >
                <MailOutlined
                  style={{
                    marginRight: '5px',
                    fontSize: '20px',
                    color: '#fff',
                    verticalAlign: 'top',
                  }}
                />
                yourfriends@jobbox.ai
              </Title>
            </styles.Container>
          </styles.Root>
        </AppContainer>
      </styles.Root1>
    );
  }
}

export default Hero;
