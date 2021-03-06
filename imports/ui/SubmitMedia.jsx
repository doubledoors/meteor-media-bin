import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Meteor } from 'meteor/meteor';

import { Entries } from '../api/entries.js';

export default class SubmitMedia extends Component {
  constructor() {
    super();
  }
  
  validateYouTubeURL(url) {
    // Praise be to this man for this YouTube REGEX http://stackoverflow.com/questions/2964678/jquery-youtube-url-validation-with-regex/10315969#10315969
    const p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (url.match(p)) ? RegExp.$1 : false;
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    // Pass the text input value into the validateYouTubeURL method, if it is a valid YouTube url, assign yt_video_id the extracted video id. If it's not, assign it 'false'.
    const yt_video_id = this.validateYouTubeURL(ReactDOM.findDOMNode(this.refs.textInput).value.trim());
    
    // If we have a valid id
    { yt_video_id 
      ?
        // Insert into db ...
        Meteor.call('entries.insert', yt_video_id)
        // Invalid link
      : alert('invalid link my son');
    }
    
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  
  render() {
    return (
      <div>
        { this.props.currentUser ?
          <div className="SubmitMedia">
            <form onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Paste a YouTube link e.g. https://www.youtube.com/watch?v=blpe_sGnnP4"
              />
            </form>
          </div> : ''
        }
      </div>
    );
  }
}
