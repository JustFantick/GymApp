import React from 'react';
import './hour-schedule.less';
import VisitorCart from '../visitor-cart/visitor-cart.jsx';


export default function HourSchedule({ hour, visitorsList }) {
	return (
		<div className="time-section">
			<div className="time-section__top">
				<div className="time-section__time">{hour}</div>
				<img className="time-section__add-btn" src={require('../../img/add-btn.svg')} alt="svg1" />
			</div>

			<ul className="time-section__visitors-list">
				<VisitorCart name={'Сік Добрий'} subscriptionCounter={10} />
				<VisitorCart name={'Сік Злий'} subscriptionCounter={1} />
				<VisitorCart name={'Сік Злющий'} subscriptionCounter={2} />
				<VisitorCart name={'Сік Садочок'} subscriptionCounter={0} />
				<VisitorCart name={'Ранковий'} subscriptionCounter={3} />

			</ul>

		</div>
	)
}
