import React from 'react';
import Button from '@atlaskit/button';
import Link from 'next/link';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import { MenuFoldOutlined } from '@ant-design/icons';
import Divider from 'antd/lib/divider';

import { AppContainer } from '@/core/Components/Containers';
import ShortcutIcon from '@atlaskit/icon/glyph/shortcut';
import * as styles from './styles';

const menu = (
  <Menu>
    <Menu.Item key="1">
      <styles.MenuButton>
        <Link href="/signup">
          <a href="/signup">
            <Button
              shouldFitContainer
              style={{ width: '200px', margin: '10px 0 10px 0' }}
              appearance="primary"
            >
              {' '}
              Employers Sign up
            </Button>
          </a>
        </Link>
        <Link href="/login">
          <a href="/login">
            <Button
              style={{ width: '200px' }}
              shouldFitContainer
              appearance="subtle"
            >
              {' '}
              Employers Login{' '}
            </Button>
          </a>
        </Link>
        <Divider />
        <Link href="/signup">
          <a href="/signup">
            <Button
              appearance="subtle"
              shouldFitContainer
              style={{ width: '200px', margin: '0 0 10px 0' }}
              iconAfter={<ShortcutIcon label="" size="small" />}
            >
              {' '}
              For Job Seekers{' '}
            </Button>
          </a>
        </Link>
      </styles.MenuButton>
    </Menu.Item>
  </Menu>
);

const Title: React.FC<{}> = () => (
  <styles.Root>
    <AppContainer>
      <styles.Container>
        <div> JOBX </div>
        <div>
          <styles.ButtonsLeft>
            <Link href="/signup">
              <a href="/signup">
                <Button
                  appearance="subtle"
                  iconAfter={<ShortcutIcon label="" size="small" />}
                >
                  {' '}
                  For Job Seekers{' '}
                </Button>
              </a>
            </Link>
            <Link href="/signup">
              <a href="/signup">
                <Button
                  style={{ margin: '0 10px 0 35px' }}
                  appearance="primary"
                >
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
          </styles.ButtonsLeft>
          <styles.MenuLeft>
            <Dropdown
              placement="bottomRight"
              overlay={menu}
              trigger={['click']}
            >
              <MenuFoldOutlined style={{ fontSize: '21px' }} />
            </Dropdown>
          </styles.MenuLeft>
        </div>
      </styles.Container>
    </AppContainer>
  </styles.Root>
);

export default Title;
