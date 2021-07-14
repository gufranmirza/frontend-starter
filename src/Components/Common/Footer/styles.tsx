import styled from 'styled-components';
import * as vars from '@/core/Theme/vars';

export const Root1 = styled.div`
  margin: ${(p: any) => p.Margin};
  padding: ${(p: any) => p.Padding};
  background: ${vars.Blue9};
`;

export const Root = styled.div`
  padding: ${vars.ApplicationPadding};
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Container = styled.div`
  flex: 25%;
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;
    color: ${vars.Grey1};

    &:hover {
      text-decoration: underline;
      color: ${vars.Grey1};
    }
  }
`;
