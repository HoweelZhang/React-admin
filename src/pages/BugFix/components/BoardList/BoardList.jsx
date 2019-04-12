import React, { Component } from 'react';
import Board from 'react-trello';
import { Router, Link } from 'react-router-dom';

export default class BoardList extends Component {
  static displayName = 'BoardList';
  state = {
    listData: {
      lanes: [
        {
          id: '1',
          label: '3/3',
          title: '待处理',
          cards: [
            {
              id: '1',
              title: '拖动排序',
              description: '任务列表也可以拖动排序，拖动一个任务列表试试看',
              label: '30 mins',
            },
            {
              id: '2',
              title: '新建任务',
              description: '点击【Add Card】，试试创建一条新的任务',
              label: '5 mins',
              metadata: { sha: 'be312a1' },
            },
            {
              id: '3',
              title: '任务时间',
              description: '设置了截止时间的任务，会在任务日历中显示',
              label: '5 mins',
              metadata: { sha: 'be312a1' },
            },
          ],
        },
        {
          id: '2',
          title: '进行中',
          label: '0/0',
          cards: [],
        },
        {
          id: '3',
          title: '已完成',
          label: '0/0',
          cards: [],
        },
        {
          id: '4',
          title: '已归档',
          label: '0/0',
          cards: [],
        },
      ],
    },
  };
  handleDragStart = (cardId, laneId) => {
    console.log('handleDragStart:', cardId, laneId);
  };

  handleDragEnd = (cardId, sourceLaneId, targetLaneId, position) => {
    // 移动cardId
    if (sourceLaneId !== targetLaneId) {
      console.log(this.state.listData.lanes[Number(sourceLaneId) - 1]);
      this.state.listData.lanes[Number(sourceLaneId) - 1].cards.map(item => {
        if (item.id === cardId) {
          return console.log(item.title);
        }
      });
      console.log(
        `handleDragEnd:cardId:${cardId},从:${sourceLaneId}移动到${targetLaneId}...排在:${position}`
      );
    }
  };

  shouldReceiveNewData = nextData => {
    console.log(nextData);
  };

  handleCardAdd = (card, laneId) => {
    console.log(`New card added to lane ${laneId}`);
  };

  render() {
    const data = this.state.listData;

    return (
      <div style={styles.boardList}>
        <Board
          style={{ background: '#fff', padding: '12px' }}
          data={data}
          draggable
          collapsibleLanes
          handleDragStart={this.handleDragStart}
          handleDragEnd={this.handleDragEnd}
          onDataChange={this.shouldReceiveNewData}
          onCardAdd={this.handleCardAdd}
        />
        <button className="width:100px;height:50px;background:blue;">
          {/* <Router path="'/dashboard/monitor'" /> */}
          <Link to="/"> 跳转</Link>
        </button>
      </div>
    );
  }
}

const styles = {
  boardList: {
    width: '100%',
  },
};
