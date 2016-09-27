import React, { Component, PropTypes } from 'react';

import YouTubePlayer from './YouTubePlayer.jsx';

export default class Submission extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <li>
        <YouTubePlayer videoId={this.props.submission.id} />
      </li>
    );
  }
}
