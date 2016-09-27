import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Submissions } from '../api/submissions.js';

import Header from './Header.jsx';
import MediaSubmission from './MediaSubmission.jsx';

class App extends Component {
  renderSubmissions() {
    return this.props.submissions.map((submission) => (
      <Submission key={task._id} submission={submission} />
    ));
  }

  render() {
    return (
      <div>
        <Header />
        <MediaSubmission />
      </div>
    );
  }
}

App.propTypes = {
  submissions: PropTypes.array.isRequired,
}

export default createContainer(() => {
  return {
    submissions: Submissions.find({}).fetch(),
  };
}, App);