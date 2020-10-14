import React from 'react'
import '../Header/header.css'

export default () => {
  return (
    <div className="head">
      <div className="head-main">
        <div className="head-menu">
          <a href="javascript:;" className="logo">
            <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" height="20" alt="" />
          </a>
          <i className="first-i">|</i>
          <i className="second-i">社招官网</i>
          <ul className="" id="menu">
            <li className="current current-cat" value="1">
              <a href="javascript:;">首 &nbsp;&nbsp;页</a>
            </li>
            <li>
              <a href="javascript:;">社会招聘</a>
            </li>
            <li>
              <a href="javascript:;" target="blank">校园招聘</a>
            </li>
            <li>
              <a href="javascript:;">了解阿里</a>
            </li>
            <li>
              <a href="javascript:;">个人中心</a>
            </li>
            <div className="login">
              欢迎来到阿里巴巴集团招聘！
					    <a href="javascript:;">登录</a>
              &nbsp;| <a href="javascript:;">注册</a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
