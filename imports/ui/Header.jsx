import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>meteor media-bin</h1>
        <AccountsUIWrapper />
      </header>
    );
  }
}
