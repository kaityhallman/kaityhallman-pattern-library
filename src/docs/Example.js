import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';
import ReactDOMServer from 'react-dom/server';

export default function Example(props) {
  const { code, description, name } = props.example;
  // We have to use CommonJS require to dynamically require because ES Modules must be statically analyzable.
  const ExampleComponent = require(`./examples/${props.componentName}/${name}`).default;
  const html = ReactDOMServer.renderToStaticMarkup(<ExampleComponent />);
  return (
    <div className="example">
      {description && <h4>Example: {description}</h4>}
      <ExampleComponent />
      <CodeExample html={html}>{code}</CodeExample>
    </div>
  );
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
};