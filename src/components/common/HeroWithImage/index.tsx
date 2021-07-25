import React from 'react';
import Right from './Right';
import Left from './Left';

import * as styles from './styles';

type Props = {
  title: string;
  description: string;
  features: Array<string>;
  image: string;
  imagePosition: string;

  background: string;
  margin: string;
  padding: string;
};

class Hero extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(): any {
    const {
      margin,
      padding,
      image,
      imagePosition,
      title,
      description,
      features,
      background,
    } = this.props;
    return (
      <styles.Root1 Margin={margin} Padding={padding} Background={background}>
        <styles.Root>
          <styles.Container>
            {imagePosition === 'left' && (
              <styles.ColumnLeft>
                <Left image={image} imagePosition={imagePosition} />
              </styles.ColumnLeft>
            )}
            <styles.Column>
              <Right
                title={title}
                description={description}
                features={features}
              />
            </styles.Column>
            {imagePosition === 'right' && (
              <styles.ColumnLeft>
                <Left image={image} imagePosition={imagePosition} />
              </styles.ColumnLeft>
            )}
          </styles.Container>
        </styles.Root>
      </styles.Root1>
    );
  }
}

export default Hero;
