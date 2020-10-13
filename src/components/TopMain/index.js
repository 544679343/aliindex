import React from 'react'
import '../TopMain/topmain.css'

export default () => {
  return (
    <div className="index-main" id="J-index-main" >
      <img className="index-image" src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt="" />
      <div className="index-blank"></div>
      <div className="index-mid-box">
        <div className="float-mid">
          <p className="en-world">If not now, when?</p>
          <p className="en-world">If not me, who?</p>
          <p className="cn-world">此时此刻，非我莫属！</p>
          <div className="search-box">
            <span className="search-topic">请输入职位关键词</span>
            <div className="search-bg"></div>
            <input type="text" className="search-text" maxLength="30" topic="请输入职位关键词" />
            <input type="submit" className="search-btn" value="搜索" />
          </div>
          <div className="hot-text">
            热门搜索：
						<a className="search-key" href="/" >JAVA</a>
            <a className="search-key" href="/" >IOS</a>
            <a className="search-key" href="/" >数据</a>
            <a className="search-key" href="/" >安全</a>
            <a className="search-key" href="/" >搜索</a>
            <a className="search-key" href="/" >算法</a>
            <a className="search-key" href="/" >运营</a>
            <a className="search-key" href="/" >视觉</a>
            <a className="search-key" href="/" >交互</a>
            <a className="search-key" href="/" >前端</a>
          </div>
        </div>
      </div>
    </div>
  )
} 