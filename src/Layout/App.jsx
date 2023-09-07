import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routing.jsx';

export const App = () => <RouterProvider router={router} />;