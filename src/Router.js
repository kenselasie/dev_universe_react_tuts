
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TodoPage from './Views/TodoPage.js'
import React from 'react'
import Dashboard from './Views/Dashboard.js'
import Homepage from './Views/Homepage.js'
import ErrorPage from './Views/404Page.js'
function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/todo" element={<TodoPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
