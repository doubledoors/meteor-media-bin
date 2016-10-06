import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Meteor } from 'meteor/meteor';

import { Entries } from '../api/entries.js';

import YouTubePlayer from './YouTubePlayer.jsx';

export default class Entry extends Component {
  constructor() {
    super();
  }
  
  deleteThisEntry() {
    Meteor.call('entries.remove', this.props.entry._id);
  }
  
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.entryLi).className += " fade-in";
  }
  
  render() {
    return (
      <li ref="entryLi" className="Entry">
        <button className="delete" onClick={this.deleteThisEntry.bind(this)}>
          &times;
        </button>
        <YouTubePlayer videoId={this.props.entry.yt_video_id} />
        <p>posted by: <strong>{this.props.entry.username}</strong></p>
      </li>
    );
  }
}
