import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TrendsOverTime.scss';

interface DailyDataPoint {
  date: string;
  average_time: number;
}

interface WeeklyDataPoint {
  week: string;
  average_time: number;
}

interface Props {
  dailyData: DailyDataPoint[];
  weeklyData: WeeklyDataPoint[];
}

const TrendsOverTimeChart: React.FC<Props> = ({ dailyData, weeklyData }) => {
  const data = dailyData.length ? dailyData : weeklyData; // Use dailyData if available, otherwise use weeklyData

  return (
    <div className="chart-container">
      <div className="chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={dailyData.length ? 'date' : 'week'} />
            <YAxis label={{ value: 'Average Time (ms)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="average_time"
              name={dailyData.length ? 'Daily Average Time' : 'Weekly Average Time'}
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-description">
        <h2>Trends Over Time</h2>
        <p>
          The line-graph provides detailed information on average response times recorded on a daily and weekly basis. Delve into the day-wise records to track fluctuations in response times over specific dates, allowing you to identify trends and potential performance issues on individual days. Additionally, analyze response times on a weekly basis to understand broader trends and patterns in the AI service's responsiveness. Gain valuable insights into the overall performance of your AI service and utilize this data to optimize response times and enhance user satisfaction.
        </p>
      </div>
    </div>
  );
};

export default TrendsOverTimeChart;
