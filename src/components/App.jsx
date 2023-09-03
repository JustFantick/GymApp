import React from 'react';

import Header from './header/header.jsx';
import { useStore } from '../store/store.js';

export default function App() {
	return (
		<div className='wrapper'>
			<Header></Header>
		</div>
	)
}