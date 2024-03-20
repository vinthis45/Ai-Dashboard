import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import './UserSatisfaction.scss';

interface Rating {
  rating: number;
  count: number;
}

interface UserSatisfactionChartProps {
  ratings: Rating[];
}

const UserSatisfactionChart: React.FC<UserSatisfactionChartProps> = ({ ratings }) => {
  return (
    <div className='chartContainer'>
      <div className='chart-description'>
        <h2>User Satisfaction</h2>
        <p>
          Explore the User Satisfaction chart to gain insights into the ratings provided by users. The data showcases the distribution of user ratings, ranging from 1 to 5, providing valuable feedback on user experiences. Delve into the breakdown of ratings, with a detailed view of the number of users who rated their satisfaction levels across different categories. Gain a deeper understanding of user sentiment and satisfaction levels to identify areas for improvement and enhance overall user experience.
        </p>
      </div>
      <div className="chart-container">
        <div className="chart">
          <PieChart width={500} height={400}>
            <Pie
              data={ratings}
              dataKey="count"
              nameKey="rating"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {ratings.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
              ))}
            </Pie>
            <Legend />
            <Tooltip formatter={(value) => value} />
          </PieChart>
          <div className='pie-footer'>Ratings</div>
        </div>
      </div>
    </div>
  );
};

export default UserSatisfactionChart;
