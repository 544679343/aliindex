import React from 'react'
import { Row, Col, Menu } from 'antd'
import '../Header/header.css'

export default () => {
  return (
    <div className="header">
      <Row>
        <Col span={2}></Col>
        <Col span={4} className="left">
          <a href="/">
            <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" height="20" alt=""/>
          </a>
          <i>|</i>
          <i>社招官网</i>
        </Col>
        <Col span={12}>
          <Menu mode="horizontal" className="menu">
            <Menu.Item key="home" className="menu-item">
              首页
            </Menu.Item>
            <Menu.Item key="shehui" className="menu-item">
              社会招聘
            </Menu.Item>
            <Menu.Item key="school" className="menu-item">
              校园招聘
            </Menu.Item>
            <Menu.Item key="liaojie" className="menu-item">
              了解阿里
            </Menu.Item>
            <Menu.Item key="geren" className="menu-item">
              个人中心
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={4} className="right">
          <span>欢迎来到阿里巴巴集团招聘</span>
          <a href="/">登录</a> |
          <a href="/">注册</a>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  )
}
