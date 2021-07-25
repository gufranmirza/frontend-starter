import styled from 'styled-components';

export const Image = styled.div`
  img {
    max-width: 400px;
  }
  @media screen and (max-width: 768px) {
    img {
      max-width: 100%;
      margin-top: ${(p: any) => p.top};
      margin-bottom: ${(p: any) => p.bottom};
    }
  }
`;
