import React from 'react';
import { AppContainer } from '@/core/Components/AppContainer';
import Typography from 'antd/lib/typography';
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiPhoneCall,
} from 'react-icons/fi';

import * as styles from './styles';

const { Title } = Typography;

type Props = {};
const dt = new Date();

class Hero extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(): any {
    return (
      <styles.Root1 Padding="60px 0">
        <AppContainer>
          <styles.Root>
            <styles.Container>
              <Title level={5} style={{ color: '#fff', marginBottom: '1.2em' }}>
                {' '}
                About
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
                  marginTop: '0.2em',
                }}
              >
                {' '}
                Privacy Policy
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
                Terms of Use
              </Title>
            </styles.Container>
            <styles.Container>
              <Title level={5} style={{ color: '#fff', marginBottom: '1.2em' }}>
                {' '}
                Get Involved
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
                Stay Connected
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
                <FiFacebook
                  style={{
                    marginRight: '10px',
                    fontSize: '20px',
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
                <FiTwitter
                  style={{
                    marginRight: '10px',
                    fontSize: '20px',
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
                <FiLinkedin
                  style={{
                    marginRight: '10px',
                    fontSize: '20px',
                    color: '#fff',
                    verticalAlign: 'top',
                  }}
                />
                Linkedin
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
                <FiInstagram
                  style={{
                    marginRight: '10px',
                    fontSize: '20px',
                    color: '#fff',
                    verticalAlign: 'top',
                  }}
                />
                Instagram
              </Title>
            </styles.Container>
            <styles.Container>
              <Title level={5} style={{ color: '#fff', marginBottom: '1.2em' }}>
                {' '}
                Sales Enquiries
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
                <FiPhoneCall
                  style={{
                    marginRight: '10px',
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
                <FiMail
                  style={{
                    marginRight: '10px',
                    fontSize: '20px',
                    color: '#fff',
                    verticalAlign: 'top',
                  }}
                />
                yourfriends@jobbox.ai
              </Title>
              <Title
                level={5}
                style={{
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  marginTop: '2em',
                }}
              >
                {' '}
                jobbox.ai © {dt.getFullYear()}. <br /> All rights reserved.
              </Title>
            </styles.Container>
          </styles.Root>
        </AppContainer>
      </styles.Root1>
    );
  }
}

export default Hero;
