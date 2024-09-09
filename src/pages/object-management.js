import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/material'
import DataTable from '../app/component/table'; 
import Navbar from '../app/Navbar/navbar'; 

const ObjectManagement = () => {
  console.log('WorkspaceManagement component is rendering');
  return (
    <Box>
      <Navbar />
      <Box sx={{p: 2}}>
      <Box sx={{p: 3, backgroundColor: "#fff" , boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom>
        Object Management
      </Typography>
      <DataTable datatypeProps={'objectMgmt'} />
      </Box>
      </Box>
    </Box>
  );
};

export default ObjectManagement;