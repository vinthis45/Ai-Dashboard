import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './CategoryDistributionChart.scss';

interface Category {
  category: string;
  value: number;
}

interface CategoryDistributionChartProps {
  data: { [category: string]: number };
}

const CategoryDistributionChart: React.FC<CategoryDistributionChartProps> = ({ data }) => {
  const chartData: Category[] = Object.entries(data).map(([category, value]) => ({ category, value }));

  return (
    <div className="category-chart-container">
      <div className="chart">
        <h2>Category Distribution</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <XAxis dataKey="category" label={{ value: 'Categories', position: 'outsideBottom', dy: 12 }} className="category-chart-x-axis" />
            <YAxis label={{ value: 'Number of Queries', angle: -90, position: 'insideLeft' }} className="category-chart-y-axis" />
            <Tooltip />
            <Legend className='legend-text' verticalAlign="top" />
            <Bar className="bars" dataKey="value" name="Number of Queries" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-description">
        <h2>Category Distribution</h2>
        <p>
          In this Category Distribution chart, you can explore the breakdown of queries across various categories. The data showcases the distribution of queries received, ranging from small talk conversations to technical support, sales inquiries, and customer service interactions. Gain insights into the volume of queries in each category and understand the distribution trends to better strategize and optimize your AI service offerings.
        </p>
      </div>
    </div>
  );
};

export default CategoryDistributionChart;
