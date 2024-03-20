import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../features/dataSlice';
import { RootState } from '../../features/store';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { Home, BarChart, Person, Public, Schedule, Dashboard } from '@mui/icons-material';
import { Dispatch } from 'redux';
import './SideBar.scss'

const drawerWidth = 240;

const SideBarComp: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { loading, error} = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <div className='sidebar-title'>
            <ListItemIcon className='sidebar-title-icon'>
              <Dashboard fontSize="large" />
            </ListItemIcon>
            <span className='sidebar-title-text'>Ai-Data Hub</span>
          </div>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItem>

            <ListItem button component={Link} to="/usage-statistics">
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText primary="Usage Statistics" />
            </ListItem>
            <ListItem button component={Link} to="/user-satisfaction">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="User Satisfaction" />
            </ListItem>
            <ListItem button component={Link} to="/category-distribution">
              <ListItemIcon>
                <Public />
              </ListItemIcon>
              <ListItemText primary="Category Distribution" />
            </ListItem>
            <ListItem button component={Link} to="/trends-over-time">
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText primary="Trends Over Time" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        <Outlet />
      </Box>
    </Box>
  );
};

export default SideBarComp;
