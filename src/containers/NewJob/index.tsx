import React from 'react';
import { AppContainer } from '@/core/components/AppContainer';
import Footer from '@/components/common/Footer';
import * as vars from '@/core/theme/vars';
import Typography from 'antd/lib/typography';
import Form from './Form';

import * as styles from './styles';

const { Title, Paragraph } = Typography;
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
              <styles.Left>
                <Form />
              </styles.Left>
              <styles.Right>
                <styles.Info>
                  <Title level={5} style={{ color: vars.HeadingColor2 }}>
                    Few Guidelines
                  </Title>
                  <ul>
                    <li>
                      <Paragraph>
                        Proper formatting of the text/content of the posting
                        with clear spaces and standard bullets (-) to be used.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        No short forms/abbreviations to be used in the text.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Make sure there are no spelling mistakes in the content.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Job Description should be concise and crisp - to the
                        point.
                      </Paragraph>
                    </li>
                  </ul>
                </styles.Info>
              </styles.Right>
            </styles.Container>
          </AppContainer>
        </styles.Root>
        <Footer />
      </div>
    );
  }
}

export default Signup;
