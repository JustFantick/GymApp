import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './visitor-cart.less';
import QuickIncreaseButton from '../quick-increase-btn/quick-increase-btn.jsx';
import { NavLink } from 'react-router-dom';

export default function VisitorCart({
	name,
	subscriptionCounter, showSubscriptionCounter = true,
	theme = "green",
	preventNavLink = false, linkUrl = '',
	onClick,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const expiringStatus = subscriptionCounter <= 0 ? 'expired-subscription' : '';

	function navigationOnCLick(e) {
		if (e.target.closest('.visitor-cart__subscription-counter') || e.target.closest('.visitor-cart__slider')) {
			e.preventDefault();
		}
	}

	const subscriptionCounterBlock =
		<>
			{/* Motion didn't used coz it doesn't allow animate border-radius */}
			<div className="visitor-cart__subscription-counter" data-isopen={isOpen}>
				{subscriptionCounter}
			</div>

			<motion.div className="visitor-cart__slider increase-value-list"
				variants={{
					open: { x: 0 },
					closed: { x: '100%' }
				}}
				animate={isOpen ? 'open' : 'closed'}
				transition={{ ease: "backInOut", duration: 0.5 }}
			>
				{
					[1, 2, 3, 4].map((li, id) => (
						<QuickIncreaseButton key={id}
							coefficient={li}
							theme={subscriptionCounter === 0 ? 'yellow' : 'green'}
							onClick={() => console.log(`Clicked +${li}`)}
						/>
					))
				}
			</motion.div>
		</>;

	const NoLinkCart =
		<motion.div
			className={`visitor-cart ${expiringStatus} ${theme}`}
			onClick={onClick}
		>
			<div className="visitor-cart__name">{name}</div>

			{showSubscriptionCounter && subscriptionCounterBlock}

		</motion.div>;

	const LinkCart =
		<NavLink to={linkUrl} onClick={(e) => navigationOnCLick(e)}>
			<motion.div
				className={`visitor-cart ${expiringStatus} ${theme}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className="visitor-cart__name">{name}</div>

				{showSubscriptionCounter && subscriptionCounterBlock}

			</motion.div>

		</NavLink>;

	return (preventNavLink ? NoLinkCart : LinkCart);
}
