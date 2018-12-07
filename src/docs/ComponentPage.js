import React from 'react';
import Example from './Example';
import Props from './Props';

const ComponentPage = ({ component }) => {
  const { name, description, props, examples } = component;

  const renderExamples = () => {
    return examples && examples.length > 0
      ? examples.map(
        example =>
        <Example key={example.code} example={example} componentName={name} />
      )
      : 'No examples exist.';
  }

  const renderProps = () => {
    return props
      ? <Props props={props} />
      : 'This component accepts no props.';
  }

  return (
    <div className="component-page">
      <h2>{name}</h2>
      <p>{description}</p>

      {examples && <React.Fragment>
        <h3>Example {examples.length > 1 && 's'}</h3>
        {renderExamples()}
        {renderProps()}
      </React.Fragment>}
    </div>
  );
}

export default ComponentPage;