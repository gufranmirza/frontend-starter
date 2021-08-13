import React, { Component } from 'react';
import Typography from 'antd/lib/typography';
import message from 'antd/lib/message';
import * as vars from '@/core/theme/vars';
import Select from 'antd/lib/select';
import cities from '@/core/data/cities.json';
import jobcategory from '@/core/data/job_category.json';
import jobfunction from '@/core/data/job_function.json';
import skills from '@/core/data/skills.json';
import Editor, { InitialStateJSON } from '@/components/libs/Editor';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Post } from '@/core/http/requests';

import Button from '@atlaskit/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Divider from 'antd/lib/divider';
import { NextRouter } from 'next/router';

import * as styles from './styles';

const { Title } = Typography;
const { Option } = Select;

type Props = {
  router: NextRouter;
};

type State = {
  posting: boolean;
  editorState: any;
};

const errorNotification = (m: string): void => {
  message.error({
    duration: 6,
    content: m,
    style: {
      marginTop: '80px',
    },
  });
};

const successNotification = (m): void => {
  message.success({
    duration: 6,
    content: m,
    style: {
      marginTop: '80px',
    },
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      posting: false,
      editorState: EditorState.createWithContent(
        convertFromRaw(InitialStateJSON),
      ),
    };
  }

  onChange = (e: Record<string, any>) => {
    this.setState({
      editorState: e,
    });
  };

  onFinish = (values: Record<string, any>): void => {
    const { editorState } = this.state;
    const { router } = this.props;
    values.summary = convertToRaw(editorState.getCurrentContent()); // eslint-disable-line
    this.setState({ posting: true });
    Post('/jobs', values)
      .then(res => {
        if (res.status === 200) {
          successNotification('Job has been posted successfully');
          router.push(`/jobs/${res.data.id}`);
        } else if (res.status === 400) {
          errorNotification(
            'Incomplete details provided, please provide complete details!',
          );
          this.setState({ posting: false });
        }
      })
      .catch(e => {
        errorNotification(
          'Something went wrong while posting the jon, please try again!',
        );
        this.setState({ posting: false });
      });
  };

  render(): any {
    const { editorState, posting } = this.state;
    return (
      <styles.Root>
        <Form onFinish={this.onFinish} layout="vertical" size="large">
          <Title
            level={4}
            style={{
              color: vars.HeadingColor2,
              lineHeight: '0.5em',
            }}
          >
            Basic Details
          </Title>
          <Divider />

          <Form.Item
            name="title"
            label="Job Title"
            rules={[{ required: true, message: 'Job title is required!' }]}
          >
            <Input placeholder="Write a title that appropriately describes this job" />
          </Form.Item>

          <Form.Item
            name="locations"
            label="Location"
            rules={[
              {
                required: true,
                message: 'Please select one or more job location!',
                type: 'array',
              },
            ]}
          >
            <Select mode="multiple" placeholder="Job location">
              {cities.map(item => (
                <Option value={item.name}> {item.name}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Years of experience">
            <Input.Group>
              <Form.Item
                name="minExperience"
                noStyle
                rules={[
                  {
                    required: true,
                    message: 'Minimum experience  is required!',
                  },
                ]}
              >
                <Select
                  placeholder="Select Min Experience"
                  style={{ width: 'calc(50% - 10px)', marginRight: '10px' }}
                >
                  {Array.from({ length: 31 }, (x, i) => (
                    <Option value={i}>{i}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="maxExperience"
                noStyle
                rules={[
                  {
                    required: true,
                    message: 'Maximum experience  is required!',
                  },
                ]}
              >
                <Select
                  placeholder="Select Max Experience"
                  style={{ width: '50%' }}
                >
                  {Array.from({ length: 31 }, (x, i) => (
                    <Option value={i}>{i}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Form.Item label="Job Description">
            <Form.Item>
              <Editor
                border
                placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better"
                onChange={this.onChange}
                editorState={editorState}
              />
            </Form.Item>
          </Form.Item>
          <Title
            level={4}
            style={{
              color: vars.HeadingColor2,
              lineHeight: '0.5em',
              paddingTop: '30px',
            }}
          >
            Targeting
          </Title>
          <Divider />

          <Form.Item label="Employment Type">
            <Form.Item
              noStyle
              name="employmentType"
              rules={[
                {
                  required: true,
                  message: 'Please select employment type!',
                  type: 'array',
                },
              ]}
            >
              <Select mode="multiple" placeholder="Select Employment Type">
                <Option value="Full Time"> Full Time </Option>
                <Option value="Part Time"> Part Time </Option>
                <Option value="Internship"> Internship </Option>
                <Option value="Certificate"> Certificate </Option>
              </Select>
            </Form.Item>
          </Form.Item>

          <Form.Item label="Job Category">
            <Form.Item
              name="category"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please select the job category!',
                },
              ]}
            >
              <Select placeholder="Select Job Category">
                {jobcategory.map(item => (
                  <Option value={item.name}> {item.name}</Option>
                ))}
              </Select>
            </Form.Item>
          </Form.Item>

          <Form.Item
            label="Job Function"
            name="function"
            rules={[
              {
                required: true,
                message: 'Please select the job function!',
              },
            ]}
          >
            <Select placeholder="Select Job Function">
              {jobfunction.map(item => (
                <Option value={item.name}> {item.name}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="mustHaveSkills"
            label="Must Have Skills"
            rules={[
              {
                required: true,
                message: 'Please select one or more Must Have Skills',
                type: 'array',
              },
            ]}
          >
            <Select mode="multiple" placeholder="Must Have Skills">
              {skills.map(item => (
                <Option value={item}> {item}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="goodToHaveSkills"
            label="Good to Have Skills"
            rules={[
              {
                required: false,
                message: 'Please select Good to Have Skills',
                type: 'array',
              },
            ]}
          >
            <Select mode="multiple" placeholder="Good to Have Skills">
              {skills.map(item => (
                <Option value={item}> {item}</Option>
              ))}
            </Select>
          </Form.Item>

          <Input.Group>
            <Form.Item noStyle>
              <Button
                style={{ height: '40px', marginTop: '20px' }}
                type="submit"
                shouldFitContainer
                appearance="primary"
                isLoading={posting}
              >
                Post the Job
              </Button>
            </Form.Item>
            <Form.Item noStyle>
              <Button
                href="/"
                style={{
                  height: '40px',
                  marginTop: '20px',
                  marginBottom: '100px',
                }}
                shouldFitContainer
                appearance="default"
              >
                Cancel
              </Button>
            </Form.Item>
          </Input.Group>
        </Form>
      </styles.Root>
    );
  }
}
