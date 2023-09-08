import React from 'react';
import './schedule-day.less';
import { motion } from 'framer-motion';

export default function ScheduleDay({ status, setStatus, day, time }) {
	return (
		<motion.div
			className='schedule-day'
			onClick={() => setStatus(!status)}
			layout data-isactive={status}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.9 }}
			transition={{
				duration: 0.5,
				type: "spring",
			}}
		>
			<div className="schedule-day__label">{day}</div>
			<motion.div className="schedule-day__time"
				variants={{
					inActive: {
						y: '15px',
						opacity: 0,
						transition: {
							duration: 0.5,
							type: "spring",
						}
					},
					active: {
						y: 0,
						opacity: 1,
						transition: {
							duration: 0.5,
							type: "spring",
						}
					},
				}}
				animate={status ? "active" : "inActive"}
			>
				{time}
			</motion.div>
		</motion.div>
	)
}
