import React from 'react';
import PropTypes from 'prop-types';

const Props = ({props}) => {
  return (
    <table className="props">
      <thead>
        <tr>
          <th>Required</th>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(props).map(key => {
            return (
              <tr key={key}>
                <td>{props[key].required && 'X'}</td>
                <td>{key}</td>
                <td>{props[key].description}</td>
                <td>{props[key].type.name}</td>
                <td>
                  {
                    props[key].defaultValue
                      ? props[key].defaultValue.value
                      : '-'
                  }
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

Props.propTypes = {
  props: PropTypes.object.isRequired
};

export default Props;