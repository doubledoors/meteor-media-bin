import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Submissions } from '../api/submissions.js';

import Header from './Header.jsx';
import SubmitMedia from './SubmitMedia.jsx';
import Submission from './Submission.jsx';

class App extends Component {
  renderSubmissions() {
    return this.props.submissions.map((submission) => (
      <Submission key={submission._id} submission={submission} />
    ));
  }

  render() {
    return (
      <div>
        <Header />
        <SubmitMedia />
        
        <ul className="App__submission-list">
          {this.renderSubmissions()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  submissions: PropTypes.array.isRequired,
}

export default createContainer(() => {
  return {
    submissions: Submissions.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, App);