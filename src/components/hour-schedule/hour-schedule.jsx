import React from 'react';
import './hour-schedule.less';
import VisitorCart from '../visitor-cart/visitor-cart.jsx';

export default function HourSchedule({ hour, visitorsList, addBtnOnClick }) {
	return (
		<div className="time-section">
			<div className="time-section__top">
				<div className="time-section__time">{hour}</div>
				<img className="time-section__add-btn"
					onClick={addBtnOnClick}
					src={require('../../img/add-btn.svg')} alt="svg1" />
			</div>

			<ul className="time-section__visitors-list">
				{visitorsList.map((li, id) => (
					<VisitorCart key={id} name={li.name} subscriptionCounter={li.subscription} />
				))}
			</ul>

		</div>
	)
}
