import React from 'react';
import EyeIcon from 'patterns/EyeIcon';

export default class EyeIconExample extends React.Component {
  state = {
    toggled: false,
  };

  toggleEyeColor = () => {
    this.setState({
      toggled: !this.state.toggled,
    });
  }

  render() {
    const { toggled } = this.state;
    return (
      <div onClick={this.toggleEyeColor}>
        <EyeIcon toggled={toggled} />
      </div>
    );
  }
}