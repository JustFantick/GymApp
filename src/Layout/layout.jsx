import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/header.jsx';
import "../styles/styles.less";

export const Layout = () => {
	return (
		<div className='wrapper'>
			<Header></Header>

			<Outlet></Outlet>
		</div>
	);
};
