import React from 'react'
import '../Position/position.css'

export default () => {
  return (
    <div className="newPosition-list">
      <div className="more-positon">
				最新职位
				<a href="/" className="clickMorePosition">更多</a>
			</div>
      <ul className="position-list">
        <li>
					<a href="/" className="position">创新事业群智能营销平台-资深前端研发工程师-北京</a>
					<em className="time">1小时前</em>
					<em className="city" title="杭州">杭州</em>
				</li>
        <li>
					<a href="/" className="position">创新事业群智能营销平台-资深前端研发工程师-北京</a>
					<em className="time">1小时前</em>
					<em className="city" title="杭州">杭州</em>
				</li>
        <li>
					<a href="/" className="position">创新事业群智能营销平台-资深前端研发工程师-北京</a>
					<em className="time">1小时前</em>
					<em className="city" title="杭州">杭州</em>
				</li>
        <li>
					<a href="/" className="position">创新事业群智能营销平台-资深前端研发工程师-北京</a>
					<em className="time">1小时前</em>
					<em className="city" title="杭州">杭州</em>
				</li>
        <li>
					<a href="/" className="position">创新事业群智能营销平台-资深前端研发工程师-北京</a>
					<em className="time">1小时前</em>
					<em className="city" title="杭州">杭州</em>
				</li>
      </ul>
    </div>
  )
}