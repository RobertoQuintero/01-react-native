import React from 'react';
import ErrorBoundary from './ErrorBoundary'
import Index from './src/index'

export default class App extends React.Component {

  state = {
    fontLoaded: false,
    data: [],
    isVisible: false,
    text: ''
  }

  render() {
    const { data } = this.state
    return (
      <ErrorBoundary>
        <Index />
      </ErrorBoundary>
    );
  }
}


