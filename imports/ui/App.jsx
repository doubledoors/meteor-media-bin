import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Entries } from '../api/entries.js';

import Header from './Header.jsx';
import SubmitMedia from './SubmitMedia.jsx';
import Entry from './Entry.jsx';

class App extends Component {
  renderEntries() {
    return this.props.entries.map((entry) => (
      <Entry key={entry._id} entry={entry} />
    ));
  }
  
  loadMoreEntries() {
    
  }

  render() {
    return (
      <div>
        
        <Header />
        <SubmitMedia />
        <ul>
          {this.renderEntries()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  entries: PropTypes.array.isRequired,
}

export default createContainer(() => {
  return {
    entries: Entries.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, App);