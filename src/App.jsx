import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import RiderRequest from './pages/RiderRequest';
import RiderDashboard from './pages/RiderDashboard';
import DriverBrowse from './pages/DriverBrowse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/rider/request" element={<RiderRequest />} />
        <Route path="/rider/dashboard" element={<RiderDashboard />} />
        <Route path="/driver/browse" element={<DriverBrowse />} />
      </Routes>
    </Router>
  );
}

export default App;
