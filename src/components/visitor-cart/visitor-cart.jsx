import React from 'react';
import './visitor-cart.less';
import { NavLink } from 'react-router-dom';
import { useVisitorsStore } from '../../store/visitorStore';
import DoneIcon from '../../img/done-icon.svg';

export default function VisitorCartLink({
	name,
	visitorId,
	subscriptionCounter,
	theme = "green",
	showDoneStatus = false,
	reducePadding = false,
}) {
	const isDone = useVisitorsStore(state => state.todaysVisitors.find(v => v.id == visitorId).isCame);
	const switchTodaysVisitorAttendance = useVisitorsStore(state => state.switchTodaysVisitorAttendance);
	const expiringStatus = subscriptionCounter <= 0 ? 'expired-subscription' : '';

	function navigationOnCLick(e) {
		if (e.target.closest('.visitor-cart__done-status') || e.target.closest('.visitor-cart__slider')) {
			e.preventDefault();
		}
	}

	const setVisitorSubscription = useVisitorsStore(state => state.setVisitorSubscription);
	function statusChangeHandler() {
		if (isDone) {
			switchTodaysVisitorAttendance(visitorId);
			setVisitorSubscription(visitorId, subscriptionCounter + 1);
		} else {
			switchTodaysVisitorAttendance(visitorId);
			setVisitorSubscription(visitorId, subscriptionCounter - 1);
		}
	}

	const doneStatusBlock =
		<div className={`visitor-cart__done-status ${isDone && 'active'}`} onClick={statusChangeHandler}>
			<img src={DoneIcon} alt="done-icon.svg" />
		</div>;

	return (
		<NavLink to={`/profile/${visitorId}`} onClick={(e) => navigationOnCLick(e)}>
			<div
				className={`visitor-cart ${expiringStatus} ${theme}`}
				data-reduce-padding={reducePadding}
			>
				<div className={`visitor-cart__name ${showDoneStatus && isDone && 'line-through'}`}>
					{name}
				</div>

				{showDoneStatus && doneStatusBlock}

			</div>

		</NavLink>
	)
}

export function VisitorCart({
	name,
	subscriptionCounter,
	onClick,
	theme = "green",
	reducePadding = false,
}) {
	const expiringStatus = subscriptionCounter <= 0 ? 'expired-subscription' : '';

	return (
		<div
			className={`visitor-cart ${expiringStatus} ${theme}`}
			onClick={onClick}
			data-reduce-padding={reducePadding}
		>
			<div className="visitor-cart__name">{name}</div>

		</div>
	);
}