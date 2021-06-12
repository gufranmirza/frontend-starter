import styled from 'styled-components';
import * as vars from '@/core/Theme/vars';

export const Root = styled.div`
  padding: ${vars.ApplicationPadding};
  padding-top: 100px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Column = styled.div`
  flex: 50%;
  @media screen and (max-width: 768px) {
    flex: 100%;
  }
`;

export const ColumnLeft = styled(Column)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
