import React from 'react';
import Navbar from '../app/Navbar/navbar'; // Adjust the import path as needed
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ p: 2 }}>
        <Box sx={{ p: 3, backgroundColor: "#fff", boxShadow: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;