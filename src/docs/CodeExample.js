import React from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';

class CodeExample extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <React.Fragment>
        <pre ref={ref => { this.element = ref }}>
          <code className="language-javascript">
            {this.props.children}
          </code>
        </pre>
      </React.Fragment>
    );
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample;