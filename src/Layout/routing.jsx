import React, { lazy, Suspense } from 'react';
import { createHashRouter, Outlet } from 'react-router-dom';
import Header from './header/header.jsx';
import "../styles/styles.less";
import Spinner from '../components/spinner/spinner.jsx';

const HomePage = lazy(() => import('./HomePage/home.page.jsx'));
const VisitorsPage = lazy(() => import('./VisitorsPage/visitors.page.jsx'));
const RegistrationPage = lazy(() => import('./RegistrationPage/registration.page.jsx'));
const ProfilePage = lazy(() => import('./ProfilePage/profile.page.jsx'));
const ErrorPage = lazy(() => import('./ErrorPage/error.page.jsx'));

export const homePath = "/",
	visitorsPath = "/visitors",
	registrationPath = "/registration";

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
				path: '/profile/:userId',
				element: <ProfilePage />,
				loader: fetchProfile,
			}
		]
	}
]);

function Layout() {
	const Loader =
		<div style={{
			height: '70vh',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<Spinner />
		</div>;

	return (
		<div className='wrapper'>
			<Header></Header>

			<Suspense fallback={Loader}>
				<Outlet />
			</Suspense>

		</div>
	);
};