import React from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';

export default class Doc extends React.Component {
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
      : componentData[0];
  }

  renderComponents = () => {
    console.log(componentData);
    return componentData.map(component => component.name);
  }

  render() {
    const { route } = this.state;
    const component = this.renderRoute(route);

    return (
      <div>
        <Navigation components={this.renderComponents()} />
        <ComponentPage component={component} />
      </div>
    );
  }
}