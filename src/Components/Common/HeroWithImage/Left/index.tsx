import React from 'react';
import * as styles from './styles';

const Left: React.FC<{ image: string; imagePosition: string }> = ({
  image,
  imagePosition,
}) => (
  <styles.Image
    top={imagePosition === 'right' ? '40px' : '0px'}
    bottom={imagePosition === 'left' ? '40px' : '00px'}
  >
    <img alt="" src={image} />
  </styles.Image>
);

export default Left;
