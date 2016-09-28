import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Submissions } from '../api/submissions.js';

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
        Submissions.insert({
          yt_video_id, // YouTube video id
          createdAt: new Date(), // current time
        })
        // Invalid link
      : alert('invalid link my son');
    }
    
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  
  render() {
    return (
      <div className="SubmitMedia">
        <form className="SubmitMedia__form" onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            ref="textInput"
            placeholder="Add a link ..."
          />
        </form>
      </div>
    );
  }
}
