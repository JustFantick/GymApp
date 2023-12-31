import React, { useEffect, useState, lazy, Suspense } from 'react';
import './schedule-table.less';
import DateIndicator from '../date-indicator/date-indicator.jsx';
import moment from 'moment';
import VisitorCartLink from '../visitor-cart/visitor-cart.jsx';
import { useVisitorsStore } from '../../store/visitorStore';
import { shallow } from "zustand/shallow";
import { useAutoAnimate } from '@formkit/auto-animate/react';

const PopupDatePicker = lazy(() => import('../popup-date-picker/popup-date-picker.jsx'));
const FloatingAddButton = lazy(() => import('../floating-add-btn/floating-add-btn.jsx'));
const PopupAddVisitor = lazy(() => import('../popup-add-visitor/popup-add-visitor.jsx'));

export default function ScheduleTable() {
	const [date, setDate] = useState(moment());

	const [hoursArr, visitorsList, todaysVisitors, setTodaysVisitors, addTodaysVisitor] = useVisitorsStore(
		state => [state.hoursArr, state.visitors, state.todaysVisitors, state.setTodaysVisitors, state.addTodaysVisitor],
		shallow
	)

	const [isTodayDate, setIsTodayDate] = useState(true);
	const [visitorsToRender, setVisitorsToRender] = useState([]);

	useEffect(() => {
		if (date.dayOfYear() == moment().dayOfYear()) { setIsTodayDate(true); return };

		setIsTodayDate(false);
		const temp = [];
		visitorsList.forEach(visitorObj => {
			if (date.day() != 0 && visitorObj.schedule.find(d => date.day() == d.date).isActive) {
				temp.push(visitorObj);
			}
		});
		setVisitorsToRender(temp);

	}, [date]);

	useEffect(() => {
		const temp = [];
		if (todaysVisitors.length == 0) {
			visitorsList.forEach(visitorObj => {
				if (date.day() != 0 && visitorObj.schedule.find(d => date.day() == d.date).isActive) {
					temp.push({
						...visitorObj,
						time: visitorObj.schedule.find(d => date.day() == d.date).time,
						isCame: false,
					});
				}
			});
		} else {
			todaysVisitors.forEach(visitorObj => {
				const visitorFromVisitorsList = visitorsList.find(v => v.id == visitorObj.id);

				temp.push({
					...visitorObj,
					subscription: visitorFromVisitorsList.subscription,
				});
			});
		}
		setTodaysVisitors(temp);

	}, [visitorsList]);

	const [isDatePopupOpen, setIsDatePopupOpen] = useState(false);
	const [isAddVisitorPopupOpen, setIsAddVisitorPopupOpen] = useState(false);

	const [listRef] = useAutoAnimate();

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
								<th data-header-order='second' ref={listRef}>
									{
										isTodayDate ?
											todaysVisitors && todaysVisitors.filter(v => v.time == hour).map(v => (
												<VisitorCartLink key={v.id}
													visitorId={v.id}
													name={v.name}
													subscriptionCounter={v.subscription}
													showDoneStatus={true}
													reducePadding={true}
												/>
											))
											:
											date.day() !== 0 && visitorsToRender.filter(v => v.schedule.find(d => date.day() == d.date).time == hour).map(v => (
												<VisitorCartLink key={v.id}
													visitorId={v.id}
													name={v.name}
													subscriptionCounter={v.subscription}
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

			<Suspense>
				<PopupDatePicker
					isOpen={isDatePopupOpen}
					closePopup={() => setIsDatePopupOpen(false)}
					dateValue={date}
					setDate={setDate}
				/>

				{
					isTodayDate &&
					<>
						<FloatingAddButton onClick={() => setIsAddVisitorPopupOpen(true)} />

						<PopupAddVisitor
							isOpen={isAddVisitorPopupOpen}
							closePopup={() => setIsAddVisitorPopupOpen(false)}
							addVisitorFunc={addTodaysVisitor}
						/>
					</>
				}

			</Suspense>
		</>
	)
}
