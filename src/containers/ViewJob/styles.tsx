import styled from 'styled-components';
import * as vars from '@/core/theme/vars';

export const Root = styled.div`
  padding-top: 120px;
  padding-bottom: 60px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: ${vars.ApplicationPadding};

  @media screen and (max-width: 768px) {
    display: block;
    height: auto;
  }
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

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const InfoBottom = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Editor = styled.div`
  background: ${vars.Grey3};
  border-radius: 3px;
  padding: 5px;
`;

export const Header = styled.div``;
