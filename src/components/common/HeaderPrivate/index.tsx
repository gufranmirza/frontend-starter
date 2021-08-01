import React from 'react';
import Button from '@atlaskit/button';
import Link from 'next/link';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import Divider from 'antd/lib/divider';
import AddIcon from '@atlaskit/icon/glyph/add';
import { AppContainer } from '@/core/components/AppContainer';
import ShortcutIcon from '@atlaskit/icon/glyph/shortcut';
import config from '@/core/config';
import Avatar from 'antd/lib/avatar';
import {
  FiExternalLink,
  FiArchive,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';
import * as styles from './styles';

const menu = (
  <Menu>
    <Menu.Item key="1">
      <styles.MenuItem>
        <FiExternalLink fontSize="18px" style={{ marginRight: '10px' }} />
        View Public Profile
      </styles.MenuItem>
    </Menu.Item>
    <Menu.Item key="2">
      <styles.MenuItem>
        <FiSettings fontSize="18px" style={{ marginRight: '10px' }} />
        Account Settings
      </styles.MenuItem>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <styles.MenuItem>
        <FiArchive fontSize="18px" style={{ marginRight: '10px' }} />
        Company Profile
      </styles.MenuItem>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="4">
      <styles.MenuItem>
        <FiLogOut fontSize="18px" style={{ marginRight: '10px' }} />
        Log out
      </styles.MenuItem>
    </Menu.Item>
  </Menu>
);

const Title: React.FC<{}> = () => (
  <styles.Root>
    <AppContainer>
      <styles.Container>
        <div>
          <Link href="/">
            <a href="/">
              <styles.Image>
                <img alt="" src="/logo.png" />
              </styles.Image>
            </a>
          </Link>
        </div>
        <div>
          <styles.ButtonsLeft>
            <Link href="/jobs/post-job">
              <Button
                iconBefore={<AddIcon label="Post a Job" size="small" />}
                href="/jobs/post-job"
                style={{ margin: '0 10px 0 35px' }}
                appearance="primary"
              >
                Post a Job
              </Button>
            </Link>
            <styles.MenuLeft>
              <Dropdown
                placement="bottomRight"
                overlay={menu}
                trigger={['click']}
              >
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.pg">
                  {' '}
                  U{' '}
                </Avatar>
              </Dropdown>
            </styles.MenuLeft>
          </styles.ButtonsLeft>
        </div>
      </styles.Container>
    </AppContainer>
  </styles.Root>
);

export default Title;
