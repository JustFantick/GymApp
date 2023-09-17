import React from 'react';
import SwipeToDelete from 'react-swipe-to-delete-ios';
import './swipe-to-delete-container.less';

export default function SwipeToDeleteContainer({ onDelete, height, children }) {
	return (
		<SwipeToDelete
			className='swipe-to-delete-block'
			onDelete={onDelete}
			height={height}
			deleteText='Прибрати'
		>
			{children}
		</SwipeToDelete>
	)
}
