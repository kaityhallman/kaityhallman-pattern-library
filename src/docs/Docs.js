import React from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import Homepage from './Homepage';
import componentData from '../../config/componentData';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1),
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: window.location.hash.substr(1) });
    });
  }

  renderRoute = (route) => {
    return route
      ? componentData.filter(component => component.name === route)[0]
      : {};
  }

  renderComponents = () => {
    return componentData.map(component => component.name);
  }

  render() {
    const { route } = this.state;
    const component = this.renderRoute(route);

    return (
      <div className="page-grid">
        <div className="page-head">
          <h1>Pattern Library</h1>
        </div>
        <Navigation components={this.renderComponents()} />
        <div className="component-page">
          {route
            ? <ComponentPage component={component} />
            : <Homepage />
          }
        </div>
      </div>
    );
  }
}