// routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import UserLogin from '../pages/User/UserLogin';
import AdminLogin from '../pages/Admin/AdminLogin';
import FrontDeskLogin from '../pages/FrontDesk/FrontDeskLogin';
import NotFound from '../pages/NotFound/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="user-login" element={<UserLogin />} />
        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="frontdesk-login" element={<FrontDeskLogin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
