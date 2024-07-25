// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPaga from './pages/form';
import User from './pages/User';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FormPaga />} />
                <Route path="/user" element={<User />} />
            </Routes>
        </Router>
    );
};

export default App;
