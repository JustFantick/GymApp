import React, { useEffect, useState } from 'react';
import './schedule-table.less';
import DateIndicator from '../date-indicator/date-indicator.jsx';
import moment from 'moment';
import VisitorCartLink from '../visitor-cart/visitor-cart.jsx';
import { useVisitorsStore } from '../../store/visitorStore';
import PopupDatePicker from '../popup-date-picker/popup-date-picker.jsx';
import FloatingAddButton from '../floating-add-btn/floating-add-btn.jsx';

import PopupAddVisitor from '../popup-add-visitor/popup-add-visitor.jsx';

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

	const todaysVisitors = useVisitorsStore(state => state.todaysVisitors);
	const setTodaysVisitors = useVisitorsStore(state => state.setTodaysVisitors);
	const addTodaysVisitor = useVisitorsStore(state => state.addTodaysVisitor);

	useEffect(() => {
		if (todaysVisitors.length == 0) {
			const temp = [];
			visitorsList.forEach(visitorObj => {
				if (date.day() != 0 && visitorObj.schedule.find(d => date.day() == d.date).isActive) {
					temp.push({
						...visitorObj,
						time: visitorObj.schedule.find(d => date.day() == d.date).time,
						isCame: false,
					});
				}
			});
			setTodaysVisitors(temp);
		} else {
			const temp = [];
			todaysVisitors.forEach(visitorObj => {
				const visitorFromVisitorsList = visitorsList.find(v => v.id == visitorObj.id);

				temp.push({
					...visitorObj,
					subscription: visitorFromVisitorsList.subscription,
				});
			});
			setTodaysVisitors(temp);
		}
	}, [visitorsList]);

	const [isDatePopupOpen, setIsDatePopupOpen] = useState(false);
	const [isAddVisitorPopupOpen, setIsAddVisitorPopupOpen] = useState(false);

	return (
		<>
			<table className="schedule-table">
				<thead>
					<tr className='schedule-table__row'>
						<th data-header-order='first' onClick={() => setIsDatePopupOpen(true)}>
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
										todaysVisitors.filter(v => v.time == hour).map(v => (
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

			<PopupDatePicker
				isOpen={isDatePopupOpen}
				closePopup={() => setIsDatePopupOpen(false)}
				dateValue={date}
				setDate={setDate}
			/>

			<FloatingAddButton onClick={() => setIsAddVisitorPopupOpen(true)} />

			<PopupAddVisitor
				isOpen={isAddVisitorPopupOpen}
				closePopup={() => setIsAddVisitorPopupOpen(false)}
				addVisitorFunc={addTodaysVisitor}
			/>
		</>
	)
}
