import React, { Component } from 'react';

export default class SubmitMedia extends Component {
  constructor() {
    super();
  }
  
  handleSubmit(event) {
    event.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    // Insert into db ...

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
