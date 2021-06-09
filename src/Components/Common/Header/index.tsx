import React from 'react';
import Button from '@atlaskit/button';
import Link from 'next/link';

import { AppContainer } from '@/core/Components/Containers';
import ShortcutIcon from '@atlaskit/icon/glyph/shortcut';
import * as styles from './styles';

const Title: React.FC<{}> = () => (
  <styles.Root>
    <AppContainer>
      <styles.Container>
        <div />
        <div>
          <Button
            appearance="subtle"
            iconAfter={<ShortcutIcon label="" size="small" />}
          >
            {' '}
            For Job Seekers{' '}
          </Button>
          <Link href="/signup">
            <a href="/signup">
              <Button style={{ margin: '0 10px 0 35px' }} appearance="primary">
                {' '}
                Employers Sign up
              </Button>
            </a>
          </Link>
          <Link href="/login">
            <a href="/login">
              <Button appearance="subtle"> Employers Login </Button>
            </a>
          </Link>
        </div>
      </styles.Container>
    </AppContainer>
  </styles.Root>
);

export default Title;
