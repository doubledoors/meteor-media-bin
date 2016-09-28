import React, { Component, PropTypes } from 'react';

import { Submissions } from '../api/submissions.js';

import YouTubePlayer from './YouTubePlayer.jsx';

export default class Submission extends Component {
  constructor() {
    super();
  }
  
  deleteThisSubmission() {
    Submissions.remove(this.props.submission._id);
  }
  
  render() {
    return (
      <li className="Submission">
        <button className="delete" onClick={this.deleteThisSubmission.bind(this)}>
          &times;
        </button>
        <YouTubePlayer videoId={this.props.submission.yt_video_id} />
      </li>
    );
  }
}
