import React from 'react';

import * as vars from '@/core/theme/vars';
import Typography from 'antd/lib/typography';
import { Ripple } from 'react-awesome-spinners';
import { AppContainer } from '@/core/components/AppContainer';
import { NextRouter } from 'next/router';
import Editor, { InitialStateJSON } from '@/components/libs/Editor';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import Affix from 'antd/lib/affix';
import { CaretRightOutlined } from '@ant-design/icons';
import * as styles from './styles';

const { Title, Paragraph } = Typography;

type State = {};

type Props = {
  jobID: string;
  router: NextRouter;
  data: Record<string, any>;
};

class ViewJob extends React.Component<Props, State> {
  componentDidMount(): void {
    const { jobID, router, data } = this.props;
    console.log(jobID, router);
  }

  render(): any {
    const { data } = this.props;

    return (
      <div>
        <styles.Root>
          <AppContainer>
            <styles.Container>
              <styles.Left>
                <styles.Header>
                  <Title level={3} style={{ color: vars.HeadingColor2 }}>
                    {data.title}
                  </Title>
                </styles.Header>
                <styles.Editor>
                  <Editor
                    onChange={() => undefined}
                    readOnly
                    editorState={EditorState.createWithContent(
                      convertFromRaw(data.summary),
                    )}
                  />
                </styles.Editor>
              </styles.Left>
              <styles.Right>
                <Affix offsetTop={120}>
                  <styles.Info>
                    <Title level={5} style={{ color: vars.HeadingColor2 }}>
                      Locations
                    </Title>
                    {data.locations.map((k, v) => (
                      <Paragraph key={k} style={{ marginBottom: '0.3em' }}>
                        <CaretRightOutlined /> {k}
                      </Paragraph>
                    ))}
                    <Title level={5} style={{ color: vars.HeadingColor2 }}>
                      Job Type
                    </Title>
                    {data.employmentType.map((k, v) => (
                      <Paragraph key={k} style={{ marginBottom: '0.3em' }}>
                        <CaretRightOutlined /> {k}
                      </Paragraph>
                    ))}
                    <Title level={5} style={{ color: vars.HeadingColor2 }}>
                      Experience
                    </Title>
                    <Paragraph style={{ marginBottom: '0.3em' }}>
                      <CaretRightOutlined /> {data.minExperience} -{' '}
                      {data.maxExperience} Years
                    </Paragraph>
                  </styles.Info>
                </Affix>
              </styles.Right>
            </styles.Container>
          </AppContainer>
        </styles.Root>
      </div>
    );
  }
}
export default ViewJob;
