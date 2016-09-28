import React, { Component, PropTypes } from 'react';

import { Entries } from '../api/entries.js';

import YouTubePlayer from './YouTubePlayer.jsx';

export default class Entry extends Component {
  constructor() {
    super();
  }
  
  deleteThisEntry() {
    Entries.remove(this.props.entries._id);
  }
  
  render() {
    return (
      <li className="Entry">
        <button className="delete" onClick={this.deleteThisEntry.bind(this)}>
          &times;
        </button>
        <YouTubePlayer videoId={this.props.entry.yt_video_id} />
      </li>
    );
  }
}
