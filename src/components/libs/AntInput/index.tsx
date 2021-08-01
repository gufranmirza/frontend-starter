import Input from 'antd/lib/input';
import React from 'react';
import * as styles from './styles';

const AntInput: React.ElementType = (props: any) => (
  <styles.Input>
    <Input {...props} />
  </styles.Input>
);

export default AntInput;

export * from 'antd/lib/input';
