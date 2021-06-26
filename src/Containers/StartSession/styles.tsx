import styled from 'styled-components';
import * as vars from '@/core/Theme/vars';

export const Root = styled.div`
  padding: ${vars.ApplicationPadding};
  padding-top: 100px;
  height: calc(100vh - 70px);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 300px);
`;

export const Info = styled.div`
  background: ${vars.Grey4};
  padding: ${vars.ApplicationPadding};
`;

export const Ripple = styled.div`
  color: ${vars.Blue6};
  `;