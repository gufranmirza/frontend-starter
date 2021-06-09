import styled from 'styled-components';
import * as vars from '@/core/Theme/vars';

const Root = styled.div`
  background: rgba(255, 255, 255, 0.98);
  box-shadow: rgba(0, 0, 0, 0.06) 0px 6px 20px;
  width: 100%;
  top: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
  z-index: 100;
  padding: 15px 0px;
`;

const Container = styled.div`
  padding: ${vars.ApplicationPadding};
  display: flex;
  align-content: center;
  justify-content: space-between;

  a:hover {
    text-decoration: none;
  }
`;

export { Root, Container };
