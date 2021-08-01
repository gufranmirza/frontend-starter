import styled from 'styled-components';
import * as vars from '@/core/theme/vars';

export const Root = styled.div`
  padding-top: 120px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: ${vars.ApplicationPadding};
`;

export const Left = styled.div`
  flex: 70%;
  @media screen and (max-width: 768px) {
    flex: 100%;
    height: auto;
  }
`;

export const Right = styled.div`
  flex: 30%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Info = styled.div`
  padding: 15px;
  margin-left: 30px;
  background: ${vars.Blue1};
`;
