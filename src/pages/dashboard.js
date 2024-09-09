// import React from 'react'
// import Navbar from '../app/Navbar/navbar'
// import { Box } from '@mui/material'
// import DataTable from '../app/component/table'

// export default function dashboard() {
//   return (
//     <Box>
//       <Navbar />
//       <Box sx={{p: 2}}>
//       <Box sx={{p: 3, backgroundColor: "#fff" , boxShadow: 3 }}>
//       <DataTable />
//       </Box>
//       </Box>
//     </Box>
//   )
// }

import React from 'react';
import Layout from '..app/components/Layout'; 
import DataTable from '../app/component/table'; 

const Dashboard = () => {
  return (
    <Layout>
      <DataTable />
    </Layout>
  );
};

export default Dashboard;
