import React, { Component } from 'react';
import Typography from 'antd/lib/typography';
import Link from 'next/link';

import Button from '@atlaskit/button';
import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  ValidMessage,
} from '@atlaskit/form';

import Textfield from '@atlaskit/textfield';
import * as styles from './styles';

const { Title } = Typography;

function validate(value: unknown): string {
  if (value !== 'open sesame') {
    return 'INCORRECT_PHRASE';
  }
  return undefined;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component<{}> {
  handleSubmit = (): void => {
    // you can now do stuff with the form.
  };

  render(): any {
    return (
      <styles.Root>
        <Form onSubmit={this.handleSubmit}>
          {({ formProps }) => (
            <form {...formProps} name="validation-example">
              <Field
                label="Work Email"
                isRequired
                name="work-email"
                validate={validate}
                defaultValue=""
              >
                {({ fieldProps, error, meta: { valid } }: any) => (
                  <>
                    <Textfield {...fieldProps} />
                    {valid && <ValidMessage>Your wish granted</ValidMessage>}
                    {error === 'INCORRECT_PHRASE' && (
                      <ErrorMessage>
                        Incorrect, try &lsquo;open sesame&rsquo;
                      </ErrorMessage>
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