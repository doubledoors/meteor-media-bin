import React, { Component } from 'react';

import Header from './Header.jsx';
import MediaSubmission from './MediaSubmission.jsx';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <MediaSubmission />
      </div>
    );
  }
}
