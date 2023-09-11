import React from 'react';
import { createHashRouter } from 'react-router-dom';
import { Layout } from './layout.jsx';
import HomePage from './HomePage/home.page.jsx';
import VisitorsPage from './VisitorsPage/visitors.page.jsx';
import RegistrationPage from './RegistrationPage/registration.page.jsx';
import ErrorPage from './ErrorPage/error.page.jsx';

export const homePath = "/",
	visitorsPath = "/visitors",
	registrationPath = "/registration",
	calendarPath = "/calendar";

export const router = createHashRouter([
	{
		path: homePath,
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				element: <HomePage />,
				index: true,
			},
			{
				path: visitorsPath,
				element: <VisitorsPage />,
			},
			{
				path: registrationPath,
				element: <RegistrationPage />,
			},
		]
	}
]);
