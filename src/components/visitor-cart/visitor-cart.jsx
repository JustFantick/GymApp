import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './visitor-cart.less';
import QuickIncreaseButton from '../quick-increase-btn/quick-increase-btn.jsx';

export default function VisitorCart({ name, subscriptionCounter, theme = "green", minimized = false }) {
	const [isOpen, setIsOpen] = useState(false);

	const cartCounter = !minimized &&
		//Motion didn't used coz it doesn't allow animate border-radius
		<div className="visitor-cart__subscription-counter" data-isopen={isOpen}>
			{subscriptionCounter}
		</div>;
	const cartSlider = !minimized &&
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
		</motion.div>;

	const expiringStatus = subscriptionCounter === 0 ? 'expired-subscription' : '';

	return (
		<motion.div
			className={`visitor-cart ${expiringStatus} ${theme}`}
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className="visitor-cart__name">{name}</div>

			{cartCounter}

			{cartSlider}

		</motion.div>
	)
}
