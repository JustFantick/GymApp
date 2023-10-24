import React, { useEffect, useRef, useState } from 'react';
import './header.less';

import { motion } from 'framer-motion';
import { MotionMenuBurger } from '../../components/menu-burger/menu-burger.jsx';
import { MotionNavigation } from '../../components/navigation/navigation.jsx';
import { burgerAnim, headerTitleAnim, navigationAnim } from '../../motionConsts/motionConsts';
import { homePath, visitorsPath, registrationPath, calendarPath } from '../../Layout/routing.jsx';
import { useScrollLock } from '../../hooks/useScrollLock.jsx';

export default function Header() {
	const [menuStatus, setMenuStatus] = useState(false);
	const { lockScroll, unlockScroll } = useScrollLock();

	//listens "menuStatus" changes and locks scroll while it's open
	useEffect(() => {
		if (menuStatus) {
			lockScroll();
		} else {
			unlockScroll();
		}
	}, [menuStatus]);

	const headerBody = useRef(null);
	const headerContainer = useRef(null);

	useEffect(() => {
		headerContainer.current.style.height = headerBody.current.clientHeight + 'px';
	}, []);

	const [navItems, setNavItems] = useState([
		{ text: 'Головна ', isCurrent: true, linkUrl: homePath },
		{ text: 'Відвідувачі ', isCurrent: false, linkUrl: visitorsPath },
		{ text: 'Реєстрація ', isCurrent: false, linkUrl: registrationPath },
	]);

	function updateNavItems(itemId) {
		setNavItems(navItems.map((item, id) => {
			if (id === itemId) {
				item.isCurrent = true;
			} else {
				item.isCurrent = false;
			}
			return item;
		}));
	}

	return (
		<header className='header' ref={headerContainer}>
			<motion.div className="header__body header-body" ref={headerBody}
				onClick={() => setMenuStatus(!menuStatus)}
				initial="disabled"
				animate={menuStatus ? "enabled" : "disabled"}
			>
				<div className="header-body__top-section">
					<motion.h1 className="header__title main-title" variants={headerTitleAnim}>
						{navItems.filter(item => item.isCurrent === true)[0].text}
					</motion.h1>

					<MotionMenuBurger variants={burgerAnim} />
				</div>

				<MotionNavigation variants={navigationAnim} navItems={navItems} updateNavItems={updateNavItems} />

			</motion.div>

		</header>
	)
}
