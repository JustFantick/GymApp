import React, { useEffect, useState } from 'react';
import './schedule-table.less';
import DateIndicator from '../date-indicator/date-indicator.jsx';
import moment from 'moment';
import VisitorCartLink from '../visitor-cart/visitor-cart.jsx';
import { useVisitorsStore } from '../../store/visitorStore';

export default function ScheduleTable() {
	const [date, setDate] = useState(moment());
	const hoursArr = [
		'12:00', '12:30',
		'13:00', '13:30',
		'14:00', '14:30',
		'15:00', '15:30',
		'16:00', '16:30',
		'17:00', '17:30',
		'18:00', '18:30',
	];

	const visitorsList = useVisitorsStore(state => state.visitors);
	//const setTodaysVisitors = useVisitorsStore(state => state.setTodaysVisitors);
	const [todaysVisitors, setTodaysVisitors] = useState([]);

	useEffect(() => {
		const temp = [];
		visitorsList.forEach(visitorObj => {
			if (visitorObj.schedule.find(d => date.day() == d.date).isActive) temp.push(visitorObj);
		});
		setTodaysVisitors(temp);
	}, []);

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
				{
					hoursArr.map((hour, id) => (
						<tr className='schedule-table__row' key={id}>
							<th data-header-order='first'>{hour}</th>
							<th data-header-order='second'>
								{
									todaysVisitors.filter(v => v.schedule[0].time == hour).map(v => (
										<VisitorCartLink key={v.id}
											visitorId={v.id}
											name={v.name}
											subscriptionCounter={v.subscription}
											showDoneStatus={true}
											reducePadding={true}
										/>
									))
								}
							</th>

						</tr>
					))
				}

			</tbody>

		</table>
	)
}
