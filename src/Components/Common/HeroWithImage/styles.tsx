import styled from 'styled-components';
import * as vars from '@/core/Theme/vars';

export const Root1 = styled.div`
  margin: ${(p: any) => p.Margin};
  padding: ${(p: any) => p.Padding};
  background: ${(p: any) => p.Background};
`;

export const Root = styled.div`
  padding: ${vars.ApplicationPadding};
  max-width: 1024px;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    display: block;
    max-width: 450px;
    margin: 0 auto;
  }
`;

export const Column = styled.div`
  flex: 50%;
`;

export const ColumnLeft = styled(Column)`
  display: flex;
  align-items: center;
  justify-content: left;
`;
