import React from 'react';
import PropTypes from 'prop-types';
// we import down to what we need from highlight because otherwise, it adds
// 170K gzipped to bundle since all languages are included
import highlight from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

class CodeExample extends React.Component {
  componentDidMount() {
    highlight.registerLanguage('javascript', javascript);
    highlight.highlightBlock(this.element);
  }

  render() {
    return (
      <pre ref={ref => { this.element = ref; }}>
        <code>
          {this.props.children}
        </code>
      </pre>
    );
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
};

export default CodeExample;