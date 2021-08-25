import React from 'react';

import * as vars from '@/core/theme/vars';
import Typography from 'antd/lib/typography';
import { Ripple } from 'react-awesome-spinners';
import { AppContainer } from '@/core/components/AppContainer';
import { NextRouter } from 'next/router';
import Editor, { InitialStateJSON } from '@/components/libs/Editor';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import Affix from 'antd/lib/affix';
import { CaretRightOutlined, FolderOutlined } from '@ant-design/icons';
import Divider from 'antd/lib/divider';
import config from '@/core/config';
import Head from 'next/head';
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
    console.log(jobID, data);
  }

  render(): any {
    const { data } = this.props;

    const Info = () => (
      <styles.Info>
        <Title level={5} style={{ color: vars.HeadingColor2 }}>
          Locations
        </Title>
        {data.locations !== undefined && (
          <>
            {data.locations.map((k, v) => (
              <Paragraph key={k} style={{ marginBottom: '0.3em' }}>
                <CaretRightOutlined /> {k}
              </Paragraph>
            ))}
          </>
        )}
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
          <CaretRightOutlined /> {data.minExperience} - {data.maxExperience}{' '}
          Years
        </Paragraph>
      </styles.Info>
    );

    return (
      <div>
        <Head>
          <title>
            {data.title} | {config('Product.Name')}
          </title>
        </Head>
        <styles.Root>
          <AppContainer>
            <styles.Container>
              <styles.Left>
                <styles.Header>
                  <Title
                    level={3}
                    style={{ color: vars.HeadingColor2, marginBottom: '0' }}
                  >
                    {data.title}
                  </Title>
                  <Title
                    level={5}
                    style={{
                      color: vars.HeadingColor2,
                      fontWeight: 'normal',
                      marginTop: '0.4em',
                    }}
                  >
                    {data.category}
                  </Title>
                  <Divider />
                  {data.mustHaveSkills !== undefined && (
                    <>
                      <Title
                        level={5}
                        style={{
                          color: vars.HeadingColor2,
                          marginTop: '0.4em',
                        }}
                      >
                        Must Have Skills
                      </Title>
                      {data.mustHaveSkills.map((k, v) => (
                        <Paragraph
                          key={k}
                          style={{
                            margin: '0px',
                            display: 'inline-flex',
                            marginRight: '10px',
                          }}
                        >
                          <FolderOutlined
                            style={{
                              fontSize: '20px',
                              paddingRight: '4px',
                              color: vars.Blue6,
                            }}
                          />{' '}
                          {k}
                        </Paragraph>
                      ))}
                    </>
                  )}

                  {data.goodToHaveSkills !== undefined && (
                    <>
                      <Title
                        level={5}
                        style={{
                          color: vars.HeadingColor2,
                          marginTop: '1.5em',
                        }}
                      >
                        Nice to Have Skills
                      </Title>
                      {data.goodToHaveSkills.map((k, v) => (
                        <Paragraph
                          key={k}
                          style={{
                            margin: '0px',
                            display: 'inline-flex',
                            marginRight: '10px',
                          }}
                        >
                          <FolderOutlined
                            style={{
                              fontSize: '20px',
                              paddingRight: '4px',
                              color: vars.Blue6,
                            }}
                          />{' '}
                          {k}
                        </Paragraph>
                      ))}
                    </>
                  )}
                  <Divider />
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
                <Divider />
              </styles.Left>
              <styles.Right>
                <Affix offsetTop={120}>{Info()}</Affix>
              </styles.Right>
              <styles.InfoBottom>{Info()}</styles.InfoBottom>
            </styles.Container>
          </AppContainer>
        </styles.Root>
      </div>
    );
  }
}
export default ViewJob;
