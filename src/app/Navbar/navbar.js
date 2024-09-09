import React from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Tab, Tabs } from '@mui/material';

const Navbar = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      // case 0:
      //   router.push('/user-management');
      //   break;
      case 0:
        router.push('/workspace-management');
        break;
      case 1:
        router.push('/object-management');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#0b3e6f" }}>
        <Toolbar>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
            <img src="https://1000logos.net/wp-content/uploads/2017/05/Walmart-Logo.png" alt="logo" width={100} height={60} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ width: '80%', textAlign: 'right' }}>
            <Button color="inherit" onClick={() => router.push('/')}>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ backgroundColor: 'white', p: 2 }}>
        <Tabs value={value} onChange={handleChange}>
          {/* <Tab label="User Management" /> */}
          <Tab label="Workspace Management" />
          <Tab label="Object Management" />
        </Tabs>
      </Box>
    </>
  );
};

export default Navbar;