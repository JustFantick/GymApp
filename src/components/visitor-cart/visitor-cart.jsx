import React, { useState } from 'react';
import './visitor-cart.less';
import { NavLink } from 'react-router-dom';
import { useVisitorsStore } from '../../store/visitorStore';
import DoneIcon from '../../img/done-icon.svg';

export default function VisitorCartLink({
	name,
	visitorId,
	linkUrl,
	subscriptionCounter,
	theme = "green",
	showDoneStatus = false,
	reducePadding = false,
}) {
	const [isDone, setIsDone] = useState(false);
	const expiringStatus = subscriptionCounter <= 0 ? 'expired-subscription' : '';

	function navigationOnCLick(e) {
		if (e.target.closest('.visitor-cart__done-status') || e.target.closest('.visitor-cart__slider')) {
			e.preventDefault();
		}
	}

	const setVisitorSubscription = useVisitorsStore(state => state.setVisitorSubscription);
	function statusChangeHandler(e) {
		setIsDone(!isDone);
		e.target.closest('.visitor-cart__done-status').classList.toggle('active');
		setVisitorSubscription(visitorId, subscriptionCounter - 1);
	}

	const doneStatusBlock =
		<div className="visitor-cart__done-status" onClick={e => statusChangeHandler(e)}>
			<img src={DoneIcon} alt="done-icon.svg" />
		</div>;

	return (
		<NavLink to={linkUrl} onClick={(e) => navigationOnCLick(e)}>
			<div
				className={`visitor-cart ${expiringStatus} ${theme}`}
				onClick={() => setIsDone(!isDone)}
				data-reduce-padding={reducePadding}
			>
				<div className={`visitor-cart__name ${isDone && 'line-through'}`}>
					{name}
				</div>

				{showDoneStatus && doneStatusBlock}

			</div>

		</NavLink>
	)
}

function VisitorCart({
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