import React from 'react';

const isServer = () => !(typeof window !== 'undefined' && window.document);

// getComponent is a function that returns a promise for a component
// It will not be called until the first mount
// use with () => System.import('path').then(module => module.default)

export default function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {

    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then((Component) => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }

    render() {
      const spinner = null;
      if (isServer()) {
        return spinner;
      }
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return spinner;
    }
  };
}
