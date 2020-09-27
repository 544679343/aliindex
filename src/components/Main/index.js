import React from 'react'
import { Input } from 'antd'
import '../Main/main.css'

const { Search } = Input

export default () => {
  return (
    <>
    <div className="main">
      <div className="main-middle">
        <h2>If not now, when?</h2>
        <h2>If not me, who?</h2>
        <h2>此时此刻，非我莫属</h2>
        <div className="search">
          <Search
            placeholder="请输入职位关键词"
            enterButton="搜索"
            style={{ width: 400 }}
            onSearch={value => console.log(value)}
          />
        </div>
        <div className="hot-text">
          热门搜索：
          <a href="/">Java</a>
          <a href="/">IOS</a>
          <a href="/">数据</a>
          <a href="/">安全</a>
          <a href="/">算法</a>
          <a href="/">运营</a>
          <a href="/">前端</a>
        </div>
      </div>
    </div>
    <div className="newPosition">
      <div className="newPosition-content">
        <div className="content-list">
          <div className="list-header">
            最新职位
            <a href="/">更多</a>
          </div>
          <ul className="list-main">
            <li>
              <a href="/" className="list">CFO产品技术部-技术专家/高级java工程师-杭州</a>
              <em className="time">7分钟前</em>
              <em className="city">杭州</em>
            </li>
            <li>
              <a href="/" className="list">CFO产品技术部-技术专家/高级java工程师-杭州</a>
              <em className="time">7分钟前</em>
              <em className="city">杭州</em>
            </li>
            <li>
              <a href="/" className="list">CFO产品技术部-技术专家/高级java工程师-杭州</a>
              <em className="time">7分钟前</em>
              <em className="city">杭州</em>
            </li>
            <li>
              <a href="/" className="list">CFO产品技术部-技术专家/高级java工程师-杭州</a>
              <em className="time">7分钟前</em>
              <em className="city">杭州</em>
            </li>
            <li>
              <a href="/" className="list">CFO产品技术部-技术专家/高级java工程师-杭州</a>
              <em className="time">7分钟前</em>
              <em className="city">杭州</em>
            </li>
          </ul>
        </div>
        <div className="content-logo">
          <a className="show-pic pic-1" href="/">
            <img src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt=""/>
          </a>
          <a className="show-pic pic-2" href="/">
            <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt=""/>
          </a>
        </div>
      </div>
    </div>
    </>
  )
} 