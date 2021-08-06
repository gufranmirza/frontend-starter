/* eslint-disable */

import styled from 'styled-components';
import * as vars from '@/core/theme/vars';

export const Root = styled.div`
  border-radius: ${props => (props.border ? '3px' : '0px')};
  border: ${props => (props.border ? `2px solid ${vars.Grey5}` : '0px')};

  &:hover,
  &:focus,
  &:active {
    border: ${props => (props.border ? `2px solid ${vars.Blue6}` : '0px')};
  }
`;

export const Controls = styled.div`
  display: inline-block;

  svg {
    font-size: 22px;
  }
`;

export const Toolbar = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
