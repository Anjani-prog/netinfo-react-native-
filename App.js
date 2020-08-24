import React from 'react';

import { NetworkProvider } from './NetworkProvider';
import { NetworkState } from './NetworkState';

export default class App extends React.PureComponent {
  render() {
    return (
      <NetworkProvider>
        <NetworkState />
      </NetworkProvider>
    );
  }
}


