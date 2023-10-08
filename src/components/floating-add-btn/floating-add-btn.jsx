import React, { useEffect } from 'react';
import FloatingAddBtnIcon from '../../img/floating-add-btn.svg';
import { motion, useAnimate } from 'framer-motion';

export default function FloatingAddButton({ onClick }) {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		const animateApperance = () => animate(scope.current, { x: 0 });
		setTimeout(animateApperance, 1000);
	}, []);

	return (
		<motion.img
			src={FloatingAddBtnIcon}
			alt="floating-add-btn"
			onClick={onClick}

			style={{
				position: 'fixed',
				bottom: '3.9%',
				right: '3.3%',
				height: '47px',
				width: '47px',
			}}

			ref={scope}
			initial={{ x: '200%' }}
			whileTap={{ scale: 0.9 }}
		/>
	)
}
