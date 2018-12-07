import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Navigation = ({ components }) => {
  const mapNavItems = (navItems) => {
    return navItems.map(name => {
      const linkClass = classnames('navigation-link', {
        active: window.location.href.includes(name)
      });

      return (
        <li key={name}>
          <a className={linkClass} href={`#${name}`}>{name}</a>
        </li>
      );
    });
  };
  return (
    <ul className="navigation">
      {mapNavItems(components)}
    </ul>
  );
};

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;