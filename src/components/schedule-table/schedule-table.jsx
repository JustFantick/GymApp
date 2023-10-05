import React, { useState } from 'react';
import './schedule-table.less';
import DateIndicator from '../date-indicator/date-indicator.jsx';
import moment from 'moment';
import VisitorCartLink from '../visitor-cart/visitor-cart.jsx';

export default function ScheduleTable() {
	const [date, setDate] = useState(moment());

	return (
		<table className="schedule-table">
			<thead>
				<tr className='schedule-table__row'>
					<th data-header-order='first'>
						<DateIndicator date={date.date()} weekday={date.day()} />
					</th>
					<th data-header-order='second'></th>
				</tr>

			</thead>

			<tbody>
				<tr className='schedule-table__row'>
					<th data-header-order='first'>12:00</th>
					<th data-header-order='second'>
						<VisitorCartLink
							visitorId={0}
							linkUrl={`/profile/${0}`}
							name={'Денні Сінс lorem Денні Сінс lorem Денні Сінс'}
							subscriptionCounter={1}
							showDoneStatus={true}
						/>
						<VisitorCartLink visitorId={2} name={'Jonny Silverhand'} subscriptionCounter={0} />
						<VisitorCartLink visitorId={3} name={'Olivia Stinks'} subscriptionCounter={1} />
					</th>

				</tr>

				<tr className='schedule-table__row'>
					<th data-header-order='first'>12:00</th>
					<th data-header-order='second'>
						Danny Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, temporibus.<br />
						Jonny <br />
						Sam <br />
						Bob <br />
					</th>
				</tr>

				<tr className='schedule-table__row'>
					<th data-header-order='first'>12:00</th>
					<th data-header-order='second'>
						Danny Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, temporibus.<br />
						Jonny <br />
						Sam <br />
						Bob <br />
					</th>
				</tr>
			</tbody>

		</table>
	)
}
