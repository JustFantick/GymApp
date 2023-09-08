import React, { forwardRef, ref } from 'react';
import { motion } from 'framer-motion';
import './navigation.less';

import { navigationItemAnim } from '../../motionConsts/motionConsts';
import { NavLink } from 'react-router-dom';

export const Navigation = forwardRef(({ navItems, updateNavItems }, ref) => {
	return (
		<nav className="header-body__nav nav" ref={ref}>
			{
				navItems.map((item, id) => (
					<NavLink to={item.linkUrl} key={id}>
						<motion.div className="nav__item"
							data-iscurrent={item.isCurrent}
							variants={navigationItemAnim}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.90 }}
							onClick={() => updateNavItems(id)}
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
