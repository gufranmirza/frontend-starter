import styled from 'styled-components';
import * as vars from '@/core/theme/vars';

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

const ButtonsLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuLeft = styled.div`
  cursor: pointer;
  padding-left: 10px;
`;

const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  max-width: 118px;
  img {
    max-width: 118px;
  }
`;

export const MenuItem = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
`;

export { Root, Container, ButtonsLeft, MenuLeft, MenuButton };
