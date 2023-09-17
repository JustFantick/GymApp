import React from 'react';
import { createHashRouter } from 'react-router-dom';
import { Layout } from './layout.jsx';
import HomePage from './HomePage/home.page.jsx';
import VisitorsPage from './VisitorsPage/visitors.page.jsx';
import RegistrationPage from './RegistrationPage/registration.page.jsx';
import ErrorPage from './ErrorPage/error.page.jsx';
import CalendarPage from './CalendarPage/calendar.page.jsx';
import ProfilePage from './ProfilePage/profile.page.jsx';

export const homePath = "/",
	visitorsPath = "/visitors",
	registrationPath = "/registration",
	calendarPath = "/calendar";

const fetchProfile = ({ params }) => {
	return { id: params.userId }
};

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
			{
				path: calendarPath,
				element: <CalendarPage />
			},
			{
				path: '/profile/:userId',
				element: <ProfilePage />,
				loader: fetchProfile,
			}
		]
	}
]);
