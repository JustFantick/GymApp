import React from 'react';
import './hour-schedule.less';
import VisitorCart from '../visitor-cart/visitor-cart.jsx';
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
							<SwipeToDeleteContainer key={li.id} height={54} onDelete={() => removeVisitor(li.id)}>
								<VisitorCart
									linkUrl={`/profile/${li.id}`}
									name={li.name}
									subscriptionCounter={li.subscription}
								/>
							</SwipeToDeleteContainer>
						))
						:
						visitorsList.map((li) => (
							<VisitorCart key={li.id}
								linkUrl={`/profile/${li.id}`}
								name={li.name}
								subscriptionCounter={li.subscription}
								showSubscriptionCounter={false}
							/>
						))
				}
			</ul>

		</div>
	)
}
