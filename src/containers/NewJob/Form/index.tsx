import React, { Component } from 'react';
import Typography from 'antd/lib/typography';
import axios from 'axios';
import Config from '@/core/config';
import message from 'antd/lib/message';
import * as vars from '@/core/theme/vars';
import Select from 'antd/lib/select';
import cities from '@/core/data/cities.json';
import jobcategory from '@/core/data/job_category.json';
import jobfunction from '@/core/data/job_function.json';
import { EditorState } from 'draft-js';

import Button from '@atlaskit/button';
import { ValidateEmail } from '@/core/validations/email';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Divider from 'antd/lib/divider';
// import Editor from '@/components/libs/Editor';

import * as styles from './styles';

const { Title } = Typography;
const { Option } = Select;

type Props = {};

type State = {
  name: string;
  email: string;
  company: string;
  designation: string;
  editorState: Record<string, any>;
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
      email: '',
      company: '',
      designation: '',
      name: '',
      editorState: EditorState.createEmpty(),
    };
  }

  onChange = (e: Record<string, any>) => {
    this.setState({
      editorState: e,
    });
  };

  handleSubmit = (): void => {
    const { name, email, designation, company } = this.state;

    axios
      .post(`${Config('ServiceURI')}/signup`, {
        Email: email,
        FirstName: name,
        CompanyName: company,
        Designation: designation,
      })
      .then(res => {
        const { status, data } = res;
        if (data !== undefined && status === 200) {
          successNotification(
            `Your account has been created successfully and an confirmation link has been sent on email ${email}. Please click on the link to proceed. `,
          );
          this.setState({ email: '' });
        } else {
          errorNotification(data.error);
        }
      })
      .catch(error => {
        const { response } = error;
        if (response !== undefined && response.data !== undefined) {
          errorNotification(response.data.error);
        } else {
          errorNotification('Something went wrong, please try again');
        }
      });
  };

  validateCompany = (value: string): string => {
    if (value === '') {
      return 'INCORRECT';
    }
    this.setState({ company: value });
    return undefined;
  };

  validateName = (value: string): string => {
    if (value === '') {
      return 'INCORRECT';
    }
    this.setState({ name: value });
    return undefined;
  };

  validateEmail = (value: string): string => {
    if (!ValidateEmail(value)) {
      return 'INCORRECT';
    }
    this.setState({ email: value });
    return undefined;
  };

  validateDesignation = (value: string): string => {
    if (value === '') {
      return 'INCORRECT';
    }
    this.setState({ designation: value });
    return undefined;
  };

  render(): any {
    const { editorState } = this.state;
    console.log(editorState);
    return (
      <styles.Root>
        <Form layout="vertical" size="large">
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
            name={['user', 'name']}
            label="Job Title"
            rules={[{ required: true }]}
          >
            <Input placeholder="Write a title that appropriately describes this job" />
          </Form.Item>
          <Form.Item
            name="select-multiple"
            label="Location"
            rules={[
              {
                required: true,
                message: 'Please select the jnb location!',
                type: 'array',
              },
            ]}
          >
            <Select mode="multiple" placeholder="Job location">
              {cities.map(item => (
                <Option value={item.id}> {item.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="select-multiple"
            label="Years of experience"
            rules={[
              {
                required: true,
                message: 'Please select the jnb location!',
                // type: 'array',
              },
            ]}
          >
            <Input.Group>
              <Form.Item
                name={['address', 'province']}
                noStyle
                rules={[{ required: true, message: 'Province is required' }]}
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
                name={['address', 'province']}
                noStyle
                rules={[{ required: true, message: 'Province is required' }]}
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
          <Form.Item
            name="select-multiple"
            label="Job Description"
            rules={[
              {
                required: true,
              },
            ]}
          >
            {/* <Editor onChange={this.onChange} editorState={editorState} /> */}
            <Input placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better" />
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

          <Form.Item
            name="select-multiple"
            label="Job Category"
            rules={[
              {
                required: true,
                message: 'Please select the job category!',
                // type: 'array',
              },
            ]}
          >
            <Form.Item
              name={['address', 'province']}
              noStyle
              rules={[{ required: true, message: 'Province is required' }]}
            >
              <Select placeholder="Select Job Category">
                {jobcategory.map(item => (
                  <Option value={item.id}> {item.name}</Option>
                ))}
              </Select>
            </Form.Item>
          </Form.Item>

          <Form.Item
            name="select-multiple"
            label="Job Function"
            rules={[
              {
                required: true,
                message: 'Please select the jnb location!',
                // type: 'array',
              },
            ]}
          >
            <Form.Item
              name={['address', 'province']}
              noStyle
              rules={[{ required: true, message: 'Province is required' }]}
            >
              <Select placeholder="Select Job Function">
                {jobfunction.map(item => (
                  <Option value={item.id}> {item.name}</Option>
                ))}
              </Select>
            </Form.Item>
          </Form.Item>

          <Form.Item
            name="select-multiple"
            label="Employment Type"
            rules={[
              {
                required: true,
                message: 'Please select the jnb location!',
                // type: 'array',
              },
            ]}
          >
            <Form.Item
              name={['address', 'province']}
              noStyle
              rules={[{ required: true, message: 'Province is required' }]}
            >
              <Select placeholder="Select Employment Type">
                <Option value="1"> Full Time </Option>
                <Option value="2"> Part Time </Option>
                <Option value="3"> Internship </Option>
                <Option value="4"> Certificate </Option>
              </Select>
            </Form.Item>
          </Form.Item>

          <Input.Group>
            <Form.Item
              name={['address', 'province']}
              noStyle
              rules={[{ required: true, message: 'Province is required' }]}
            >
              <Button
                style={{ height: '40px', marginTop: '20px' }}
                type="submit"
                shouldFitContainer
                appearance="primary"
              >
                Post the Job
              </Button>
            </Form.Item>
            <Form.Item
              name={['address', 'province']}
              noStyle
              rules={[{ required: true, message: 'Province is required' }]}
            >
              <Button
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
