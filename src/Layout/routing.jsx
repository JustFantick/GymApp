import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout.jsx';
import HomePage from './HomePage/home.page.jsx';

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				element: <HomePage />,
				index: true,
			},
		]
	}
]);
