import React, { Component, PropTypes } from 'react';

import YouTubePlayer from './YouTubePlayer.jsx';

export default class Submission extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <li className="Submission">
        <YouTubePlayer videoId={this.props.submission.ytv_id} />
      </li>
    );
  }
}
