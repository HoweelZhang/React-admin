import React, { Component } from 'react';
import BoardList from './components/BoardList';
import BoardList1 from './components/BoardList1';

export default class BugFix extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bug-fix-page">
        <BoardList />
        <BoardList1 />
      </div>
    );
  }
}
