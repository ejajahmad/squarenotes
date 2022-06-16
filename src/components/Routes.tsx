import React from 'react';
import {
    BrowserRouter,
    Routes as RouteContainer,
    Route
} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import NotesContainer from './Notes/NotesContainer';
import ProfileContainer from './Profile/ProfileContainer';
import SettingsContainer from './Settings/SettingsContainer';
import StarredContainer from './Notes/StarredContainer';
import TrashContainer from './Notes/TrashContainer';
import LoginContainer from './Login/LoginContainer';

export default function Routes() {
    return (
        <RouteContainer>
            <Route path="/" element={<LoginContainer />} />
            <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard/notes" element={<NotesContainer />} />
                <Route
                    path="/dashboard/starred"
                    element={<StarredContainer />}
                />
                <Route path="/dashboard/trash" element={<TrashContainer />} />
                <Route
                    path="/dashboard/settings"
                    element={<SettingsContainer />}
                />
                <Route
                    path="/dashboard/profile"
                    element={<ProfileContainer />}
                />
            </Route>
        </RouteContainer>
    );
}
