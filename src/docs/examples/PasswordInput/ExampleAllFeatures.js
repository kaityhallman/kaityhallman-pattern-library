import React from 'react';
import PasswordInput from 'patterns/PasswordInput';

/** All features enabled */
class ExampleAllFeatures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
    };
  }

  getQuality() {
    const length = this.state.password.length;
    return length > 10 ? 100 : length * 10;
  }

  onChange = event => {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <PasswordInput
          htmlId="password-input-example-all-features"
          name="password"
          onChange={this.onChange}
          value={this.state.password}
          minLength={8}
          placeholder="Enter password"
          showVisibilityToggle
          quality={this.getQuality()}
          {...this.props}
        />
      </React.Fragment>
    );
  }
}

export default ExampleAllFeatures;