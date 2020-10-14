import React from 'react'
import '../Position/position.css'

let list = [
	{ content: '创新事业群智能营销平台-资深前端研发工程师-北京', date: '1小时前', add: '杭州' },
	{ content: '创新事业群智能营销平台-资深前端研发工程师-北京', date: '1小时前', add: '杭州' },
	{ content: '创新事业群智能营销平台-资深前端研发工程师-北京', date: '1小时前', add: '杭州' },
	{ content: '创新事业群智能营销平台-资深前端研发工程师-北京', date: '1小时前', add: '杭州' },
	{ content: '创新事业群智能营销平台-资深前端研发工程师-北京', date: '1小时前', add: '杭州' },
	{ content: '创新事业群智能营销平台-资深前端研发工程师-北京', date: '1小时前', add: '杭州' },
	{ content: '创新事业群智能营销平台-资深前端研发工程师-北京', date: '1小时前', add: '杭州' },
]

export default () => {
	return (
		<div className="newPosition-list">
			<div className="more-positon">
				最新职位
				<a href="javascript:;" className="clickMorePosition">更多</a>
			</div>
			{/* <ul className="position-list">
				<li>
					<a href="javascript:;" className="position">创新事业群智能营销平台-资深前端研发工程师-北京</a>
					<em className="time">1小时前</em>
					<em className="city" title="杭州">杭州</em>
				</li>
				<li>
					<a href="javascript:;" className="position">创新事业群智能营销平台-资深前端研发工程师-北京</a>
					<em className="time">1小时前</em>
					<em className="city" title="杭州">杭州</em>
				</li>
				<li>
					<a href="javascript:;" className="position">创新事业群智能营销平台-资深前端研发工程师-北京</a>
					<em className="time">1小时前</em>
					<em className="city" title="杭州">杭州</em>
				</li>
				<li>
					<a href="javascript:;" className="position">创新事业群智能营销平台-资深前端研发工程师-北京</a>
					<em className="time">1小时前</em>
					<em className="city" title="杭州">杭州</em>
				</li>
				<li>
					<a href="javascript:;" className="position">创新事业群智能营销平台-资深前端研发工程师-北京</a>
					<em className="time">1小时前</em>
					<em className="city" title="杭州">杭州</em>
				</li>
			</ul>
		 */}
			<ul className="position-list">
				{list.map((item, index) =>
					<li key={index}>
						<a href="javascript:;" className="position">{item.content}</a>
						<em className="time">{item.date}</em>
						<em className="city" title="杭州">{item.add}</em>
					</li>
				)}
			</ul >

		</div>
	)
}