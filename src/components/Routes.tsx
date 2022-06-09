import React from 'react';
import {
    BrowserRouter,
    Routes as RouteContainer,
    Route
} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import LoginContainer from './Login/LoginContainer';

export default function Routes() {
    return (
        <RouteContainer>
            <Route path="/" element={<LoginContainer />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </RouteContainer>
    );
}
