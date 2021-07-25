import React, { Component } from 'react';
import Typography from 'antd/lib/typography';
import Link from 'next/link';
import { NextRouter } from 'next/router';
import { ValidateEmail } from '@/core/validations/email';
import axios from 'axios';
import config from '@/core/config';
import message from 'antd/lib/message';

import Button from '@atlaskit/button';
import Form, { ErrorMessage, Field, FormFooter } from '@atlaskit/form';

import Textfield from '@atlaskit/textfield';
import * as styles from './styles';

const { Title } = Typography;

type Props = {
  router: NextRouter;
  authenticate: any;
};

type State = {
  email: string;
  valid: boolean;
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
      valid: true,
    };
  }

  handleSubmit = (): void => {
    const { email } = this.state;
    if (!ValidateEmail(email)) {
      this.setState({ valid: false });
      return;
    }

    axios
      .post(`${config('ServiceURI')}/login`, {
        Email: email,
      })
      .then(res => {
        const { status, data } = res;
        if (data !== undefined && status === 200) {
          successNotification(
            `A login link has been successfully sent on the email address ${email}. Please click on the link to proceed. `,
          );
          this.setState({ email: '' });
        } else {
          errorNotification(data.Error);
        }
      })
      .catch(error => {
        const { response } = error;
        if (response !== undefined && response.data !== undefined) {
          errorNotification(response.data.Error);
        } else {
          errorNotification('Something went wrong, please try again');
        }
      });
  };

  onChange = (e: { target: HTMLInputElement }): void => {
    const { value } = e.target;
    if (!ValidateEmail(value)) {
      this.setState({ valid: false });
    } else {
      this.setState({ valid: true });
    }

    this.setState({
      email: value,
    });
  };

  render(): any {
    const { email, valid } = this.state;
    return (
      <styles.Root>
        <Form onSubmit={this.handleSubmit}>
          {({ formProps }) => (
            <form {...formProps} name="validation-example">
              <Field
                label="Work Email"
                isRequired
                name="work-email"
                defaultValue=""
              >
                {({ fieldProps }: any) => (
                  <>
                    <Textfield
                      {...fieldProps}
                      value={email}
                      onChange={this.onChange}
                    />
                    {!valid && (
                      <ErrorMessage>Incorrect email address</ErrorMessage>
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
                  Login
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
          Don&apos;t have an account?{' '}
          <Link href="/signup">
            <a href="/signup">Register</a>
          </Link>
        </Title>
      </styles.Root>
    );
  }
}
