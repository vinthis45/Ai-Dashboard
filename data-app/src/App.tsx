import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './features/store';
import { fetchData } from './features/dataSlice';
import { Dispatch } from 'redux';
import './App.css'
import Homepage from './pages/homepage/Homepage';
import TrendsOverTimeChart from './components/charts/TrendsOverTime/TrendsOverTimeChart';
import UsageStatisticsChart from './components/charts/UsageStatistics/UsageStatistics';
import UserSatisfactionChart from './components/charts/UserSatisfaction/UserSatisfaction';
import CategoryDistributionChart from './components/charts/CategoryDistribution/CategoryDistributionChart';
import SideBarComp from './components/sidebar/SideBar';

const App: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { loading, error, data } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app-container">
        <SideBarComp />
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/trends-over-time"
              element={
                data?.response_times ? (
                  <TrendsOverTimeChart
                    dailyData={data.response_times.day_wise}
                    weeklyData={data.response_times.week_wise}
                  />
                ) : (
                  <div>Loading...</div>
                )
              }
            />
            <Route
              path="/usage-statistics"
              element={data?.usage_statistics ? (
                <UsageStatisticsChart usage_statistics={data.usage_statistics} />
              ) : (
                <div>Loading...</div>
              )}
            />
            <Route
              path="/user-satisfaction"
              element={data?.user_satisfaction.ratings ? (
                <UserSatisfactionChart ratings={data.user_satisfaction.ratings} />
              ) : (
                <div>Loading...</div>
              )}
            />
            <Route
              path="/category-distribution"
              element={
                data?.category_distribution ? (
                  <CategoryDistributionChart data={data.category_distribution} />
                ) : (
                  <div>Loading...</div>
                )
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
