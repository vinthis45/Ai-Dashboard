import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import './UsageStatistics.scss'; 

interface UsageStatistics {
    by_platform: { [platform: string]: number };
    by_country: { [country: string]: number };
}

interface UsageStatisticsChartProps {
    usage_statistics: UsageStatistics;
}

const UsageStatisticsChart: React.FC<UsageStatisticsChartProps> = ({ usage_statistics }) => {
    const platformData = Object.entries(usage_statistics.by_platform).map(([platform, count]) => ({ platform, count }));
    const countryData = Object.entries(usage_statistics.by_country).map(([country, count]) => ({ country, count }));

    return (
        <div className="usage-statistics-container">
            <div className="charts-container">
                <div className="chart">
                    <h3>Platform Distribution</h3>
                    <BarChart width={400} height={300} data={platformData}>
                        <XAxis dataKey="platform" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                </div>
                <div className="chart">
                    <h3>Country Distribution</h3>
                    <PieChart width={400} height={300}>
                        <Pie
                            data={countryData}
                            dataKey="count"
                            nameKey="country"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            label
                        >
                            {countryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            </div>
            <div className="description">
                <h2>Usage Statistics</h2>
                <p>
                    Delve into the Usage Statistics chart to uncover insights into platform usage and geographical distribution. The data highlights usage patterns across different platforms, including iOS, Android, and Web, providing a comprehensive view of user engagement. Additionally, explore the distribution of usage by country, with a focus on key regions such as the USA, India, Germany, Japan, and Brazil. Gain valuable insights into user behavior and geographic preferences to tailor your strategies and optimize your services for targeted markets.
                </p>
            </div>
        </div>
    );
};

export default UsageStatisticsChart;
