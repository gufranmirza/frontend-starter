import styled from 'styled-components';
import * as vars from '@/core/theme/vars';
import { AppContainer } from '@/core/components/AppContainer';

export const Root = styled.div`
  padding: ${vars.ApplicationPadding};
  padding-top: 70px;
  height: calc(100vh - 70px);
`;

export const Container = styled(AppContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 300px);
  flex-direction: column;
`;

export const Info = styled.div`
  background: ${vars.Grey4};
  padding: ${vars.ApplicationPadding};
`;
