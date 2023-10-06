import React from 'react';
import './hour-schedule.less';
import VisitorCartLink from '../visitor-cart/visitor-cart.jsx';
import SwipeToDeleteContainer from '../swipe-to-delete-container/swipe-to-delete-container.jsx';

export default function HourSchedule(
	{ hour, visitorsList, removeVisitor, addBtnOnClick = null, showSubscriptionCounter = true }
) {
	return (
		<div className="time-section">
			<div className="time-section__top">
				<div className="time-section__time">{hour}</div>
				{
					addBtnOnClick &&
					<img className="time-section__add-btn"
						onClick={addBtnOnClick}
						src={require('../../img/add-btn.svg')} alt="svg1"
					/>
				}
			</div>

			<ul className="time-section__visitors-list" >
				{
					showSubscriptionCounter ?
						visitorsList.map((li) => (
							<SwipeToDeleteContainer key={li.id} height={51} onDelete={() => removeVisitor(li.id)}>
								<VisitorCartLink
									visitorId={li.id}
									name={li.name}
									subscriptionCounter={li.subscription}
								/>
							</SwipeToDeleteContainer>
						))
						:
						visitorsList.map((li) => (
							<VisitorCartLink key={li.id}
								visitorId={li.id}
								name={li.name}
								subscriptionCounter={li.subscription}
							/>
						))
				}
			</ul>

		</div>
	)
}
