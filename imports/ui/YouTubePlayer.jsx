import React, { Component } from 'react';
import YouTube from 'react-youtube';


export default class YouTubePlayer extends Component {
  render() {

    const opts = {
      height: '360',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return(
      <div className="Video">
        <YouTube
          videoId={this.props.videoId}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // For example:
    // event.target.pauseVideo();
  }
}
