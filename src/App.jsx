import React from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import avatar from './images/avatar.jpg';


class App extends React.Component {
  state = {
    tabs: [
      { id: 1, name: '热度', type: 'hot' },
      { id: 2, name: '时间', type: 'time' },
    ],
    active: 'hot',
    list: [
      { id: 1, author: '王大锤', comment: '王老师当年退出文坛，我是极力反对的。', time: new Date('2022-05-01 09:09:00'), attitude: 1 },
      { id: 2, author: '时琦狂三', comment: '时逝烟云散，崎路夜雨寒，狂风烛影乱，三尺流年叹', time: new Date('2022-06-20 00:03:03'), attitude: 0 },
      { id: 3, author: 'JohnSnow', comment: 'You know nothing, John Snow', time: new Date('2021-03-23 11:12:00'), attitude: -1 }
    ],
    comment: '',
  };

  formatTime = (time) => {
    return `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`;
  };

  switchTab = (type) => {
    this.setState({ active: type });
  };

  textareaChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  submitComment = () => {
    this.setState(state => ({
      list: [
        ...state.list,
        {
          id: uuid(),
          author: '刻晴',
          comment: state.comment,
          time: new Date(),
          attitude: 0,
        },
      ],
      comment: '',
    }));
  };

  delComment = (id) => {
    this.setState(state => ({
      list: state.list.filter(item => item.id !== id)
    }));
  };

  toggleLike = (curItem) => {
    const { attitude, id } = curItem;
    this.setState(state => ({
      list: state.list.map(item => {
        if (item.id === id) {
          return {
            ...item,
            attitude: attitude === 1 ? 0 : 1,
          };
        } else {
          return item;
        }
      })
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="comment-container">

          {/* 评论数 */}
          <div className="comment-head">
            <span>5 评论</span>
          </div>

          {/* 排序 */}
          <div className="tabs-order">
            <ul className="sort-container">
              {this.state.tabs.map(item => (
                <li
                  onClick={() => this.switchTab(item.type)}
                  key={item.id}
                  className={item.type === this.state.active ? 'on' : ''}
                >按{item.name}顺序排序</li>
              ))}
            </ul>
          </div>

          {/* 添加评论 */}
          <div className="comment-send">
            <div className="user-face">
              <img className="user-head" src={avatar} alt="" />
            </div>
            <div className="textarea-container">
              <textarea
                cols="80"
                rows="5"
                placeholder="发条友善的评论"
                className="ipt-txt"
                value={this.state.comment}
                onChange={this.textareaChange}
              />
              <button className="comment-submit" onClick={this.submitComment}>发表评论</button>
            </div>
            <div className="comment-emoji">
              <i className="face"></i>
              <span className="text">表情</span>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="comment-list">
            {this.state.list.map(item => (
              <div className="list-item" key={item.id}>
                <div className="user-face">
                  <img className="user-head" src={avatar} alt="" />
                </div>
                <div className="comment">
                  <div className="user">{item.author}</div>
                  <p className="text">{item.comment}</p>
                  <div className="info">
                    <span className="time">{this.formatTime(item.time)}</span>
                    <span
                      onClick={() => this.toggleLike(item)}
                      className={item.attitude === 1 ? 'like liked' : 'like'}>
                      <i className="icon" />
                    </span>
                    <span className={item.attitude === -1 ? 'hate hated' : 'hate'}>
                      <i className="icon" />
                    </span>
                    <span className="reply btn-hover" onClick={() => this.delComment(item.id)}>删除</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  }
}



export default App;
