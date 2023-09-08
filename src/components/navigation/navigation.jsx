import React, { forwardRef, ref } from 'react';
import { motion } from 'framer-motion';
import './navigation.less';

import { navigationItemAnim } from '../../motionConsts/motionConsts';
import { homePath, visitorsPath, registrationPath, calendarPath } from '../../Layout/routing.jsx';
import { NavLink } from 'react-router-dom';

export const Navigation = forwardRef((props, ref) => {
	const navItems = [
		{ text: 'Головна ', isCurrent: true, linkUrl: homePath },
		{ text: 'Відвідувачі ', isCurrent: false, linkUrl: visitorsPath },
		{ text: 'Реєстрація ', isCurrent: false, linkUrl: registrationPath },
		{ text: 'Календар ', isCurrent: false, linkUrl: calendarPath }
	];

	return (
		<nav className="header-body__nav nav" ref={ref}>
			{
				navItems.map((item, id) => (
					<NavLink to={item.linkUrl} key={id}>
						<motion.div className="nav__item"
							data-iscurrent={item.isCurrent}
							variants={navigationItemAnim}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							{item.text}
						</motion.div>
					</NavLink>
				))
			}
		</nav >
	)
});

export const MotionNavigation = motion(Navigation);
