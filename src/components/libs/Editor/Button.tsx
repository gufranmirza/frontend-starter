import React from 'react';

type Props = {
  onToggle: Function;
  label: string;
  style: string;
  active: boolean;
  key: string;
};

class StyleButton extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle = e => {
    e.preventDefault();
    const { style, onToggle } = this.props;
    onToggle(style);
  };

  render() {
    let className = 'RichEditor-styleButton';
    const { label, active, key } = this.props;
    if (active) {
      className += ' RichEditor-activeButton';
    }
    return (
      // eslint-disable-next-line
      <span
        key={key}
        className={className}
        role="button"
        onMouseDown={this.onToggle}
      >
        {label}
      </span>
    );
  }
}

export default StyleButton;
