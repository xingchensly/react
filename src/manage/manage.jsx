import React, { Component } from 'react';
import './manage.css'

export default class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: 'sly' }
      ],
      isShowNew: false,
      input: ''
    }
  }
  inputChange = (event) => {
    this.setState(
      {
        input: event.target.value
      }
    )
  }
  showAddInput () {
    this.setState({
      isShowNew: false
    })
  }
  add () {
    let list = this.state.list; //获取当前list的值
    list.push({ //添加一条数据
      name: this.state.input
    });
    this.setState({ //重新赋一下值
      list: list
    })
  }
  delete (deleteIndex) {
    Array.prototype.delete = function (deleteIndex = 0) {
      let temArray = [];
      for (let i = 0; i < this.length; i++) {
        if (i !== deleteIndex) {
          temArray.push(this[i]);
        }
      }
      return temArray;
    };
    let list = this.state.list.delete(deleteIndex);
    // delete list[deleteIndex];
    this.setState({
      list: list
    })
  }
  render () {
    let list = [];

    let isShowNew;

    if (this.state.isShowNew) {
      isShowNew =
        <a className="manager__add" onClick={() => this.showAddInput()}>
          <span>新增</span>
        </a>
    } else {
      isShowNew =
        <div className="manager__input">
          <input type="text" onChange={this.inputChange} />
          <a onClick={() => { this.add() }}>添加</a>
        </div>
    }

    if (this.state.list.length > 0) {
      this.state.list.map((data, index) => {
        list.push(
          <div className="manager__tab__list__item" key={index}>
            <span className="manager__tab__list__item__name">
              {data.name}
            </span>
            <span className="manager__tab__list__item__tools">
              <span className="item__tools__delete" onClick={() => this.delete(index)}>删除</span>
            </span>
          </div>
        )
      });
    } else {
      list =
        <span>暂无数据</span>
    }

    return (
      <div className="manager">
        {isShowNew}
        <div className="manager__tab">
          <div className="manager__tab__header">
            <span>姓名</span>
            <span>操作</span>
          </div>
          <div className="manager__tab__list">
            {list}
          </div>
        </div>
      </div>
    )
  }
}