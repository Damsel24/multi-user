// components/Layout/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../../src/index.css';


const MainLayout = () => {
  return (
    <div>
      <header>
      </header>
      <main>
        <Outlet /> {/* Renders matched routes */}
      </main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

export default MainLayout;
