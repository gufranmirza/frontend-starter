import React, { Component } from 'react';
import Typography from 'antd/lib/typography';
import Link from 'next/link';
import axios from 'axios';
import Config from '@/core/config';
import message from 'antd/lib/message';

import Button from '@atlaskit/button';
import Form, { ErrorMessage, Field, FormFooter } from '@atlaskit/form';
import { ValidateEmail } from '@/core/validations/email';

import Textfield from '@atlaskit/textfield';
import * as styles from './styles';

const { Title } = Typography;

type Props = {};

type State = {
  name: string;
  email: string;
  company: string;
  designation: string;
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
    };
  }

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
    return (
      <styles.Root>
        <Form onSubmit={this.handleSubmit}>
          {({ formProps }) => (
            <form {...formProps} name="validation-example">
              <Field
                label="Company Name"
                isRequired
                name="company-name"
                validate={this.validateCompany}
                defaultValue=""
              >
                {({ fieldProps, error }: any) => (
                  <>
                    <Textfield {...fieldProps} />
                    {error === 'INCORRECT' && (
                      <ErrorMessage>
                        Please select a company you work for
                      </ErrorMessage>
                    )}
                  </>
                )}
              </Field>
              <Field
                label="Work Email"
                isRequired
                name="work-email"
                validate={this.validateEmail}
                defaultValue=""
              >
                {({ fieldProps, error }: any) => (
                  <>
                    <Textfield {...fieldProps} />
                    {error === 'INCORRECT' && (
                      <ErrorMessage>Incorrect email address</ErrorMessage>
                    )}
                  </>
                )}
              </Field>
              <Field
                label="Your Name"
                isRequired
                name="your-name"
                validate={this.validateName}
                defaultValue=""
              >
                {({ fieldProps, error }: any) => (
                  <>
                    <Textfield {...fieldProps} />
                    {error === 'INCORRECT' && (
                      <ErrorMessage>Name can not be blank</ErrorMessage>
                    )}
                  </>
                )}
              </Field>
              <Field
                label="Designation"
                isRequired
                name="your-designation"
                validate={this.validateDesignation}
                defaultValue=""
              >
                {({ fieldProps, error }: any) => (
                  <>
                    <Textfield {...fieldProps} />
                    {error === 'INCORRECT' && (
                      <ErrorMessage>Designation can not be blank</ErrorMessage>
                    )}
                  </>
                )}
              </Field>
              <FormFooter>
                <Button
                  style={{ height: '40px' }}
                  shouldFitContainer
                  type="submit"
                  appearance="primary"
                >
                  Sign Up & Post A Job
                </Button>
              </FormFooter>
            </form>
          )}
        </Form>
        <Title
          level={5}
          style={{
            marginTop: '20px',
            fontWeight: 500,
            textAlign: 'center',
          }}
        >
          Already have an account?{' '}
          <Link href="/login">
            <a href="/login">Log in</a>
          </Link>
        </Title>
      </styles.Root>
    );
  }
}
