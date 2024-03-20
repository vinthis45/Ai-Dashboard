import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-heading">
        Insightful Horizons: Unveiling AI's Brilliance - Your Interactive Dashboard Experience
      </h1>
      <div className="grid">
        <div className="dashboard-card">
          <Link className='dashboard-link' to="/usage-statistics">
            <Tooltip title="View Usage Statistics">
              <div>
                <img src="/assets/usage.jpg" alt="Usage Statistics" className="dashboard-image" />
                <p>Unlock insights into how your AI service is utilized. Dive into Usage Statistics to discover usage patterns and trends.</p>
              </div>
            </Tooltip>
          </Link>
        </div>
        <div className="dashboard-card">
          <Link className='dashboard-link' to="/user-satisfaction">
            <Tooltip title="View User Satisfaction">
              <div>
                <img src="/assets/user.jpg" alt="User Satisfaction" className="dashboard-image" />
                <p>Understand user sentiments and gauge satisfaction levels. Explore User Satisfaction to ensure optimal user experience.</p>
              </div>
            </Tooltip>
          </Link>
        </div>
        <div className="dashboard-card">
          <Link className='dashboard-link' to="/category-distribution">
            <Tooltip title="View Category Distribution">
              <div>
                <img src="/assets/category.jpeg" alt="Category Distribution" className="dashboard-image" />
                <p>Get insights into query categories. Explore Category Distribution to understand user needs and preferences.</p>
              </div>
            </Tooltip>
          </Link>
        </div>
        <div className="dashboard-card">
          <Link className='dashboard-link' to="/trends-over-time">
            <Tooltip title="View Trends Over Time">
              <div>
                <img src="/assets/trends.jpg" alt="Trends Over Time" className="dashboard-image" />
                <p>Track changes and identify patterns. Dive into Trends Over Time to stay ahead of evolving trends and behaviors.</p>
              </div>
            </Tooltip>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
