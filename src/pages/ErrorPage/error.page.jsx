import React from 'react';
import Header from '../Header/header.jsx';
import { wrap } from 'framer-motion';

export default function ErrorPage() {
	return (
		<div className='wrapper'>
			<Header></Header>

			<main style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexWrap: "wrap",
				height: '50vh',
				fontSize: '28px',
			}}>
				Дана сторінка не існує
			</main>
		</div>
	)
}
