import React, { Component } from 'react';
import { Input, List, Button } from 'antd';
import './Page16.scss';
import store from './store';

export default class Page16 extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }

  // eslint-disable-next-line class-methods-use-this
  handleInputValueChange(e) {
    const action = {
      type: 'inputValue_change',
      value: e.target.value,
    };
    store.dispatch(action);
  }
  handleBtnClick(e) {
    store.dispatch({
      type: 'add_item',
      value: store.getState().inputValue,
    });
  }
  storeChange() {
    this.setState(store.getState());
  }
  render() {
    return (
      <div className="page16-page">
        <Input
          placeholder="todo info"
          className="input"
          onChange={this.handleInputValueChange}
        />
        <Button type="primary" onClick={this.handleBtnClick}>
          确定
        </Button>
        <List
          className="list"
          size="small"
          header={<div>TodoList</div>}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}
