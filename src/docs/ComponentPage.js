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
      : (
        <div className="props">
          This component accepts no props.
        </div>
      );
  }

  return (
    <div className="component-page">
      <h2>{name}</h2>
      <a href="#">Source</a>
      <p>{description}</p>
      {renderProps()}
      {examples && <React.Fragment>
        {renderExamples()}
      </React.Fragment>}
    </div>
  );
}

export default ComponentPage;