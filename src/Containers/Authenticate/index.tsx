import React from 'react';
import { Ripple } from 'react-awesome-spinners';

class Authenticate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useState: true
    };
  }
  render(): any {
    return (
    <Ripple />
    );
  }
}
export default Authenticate;
