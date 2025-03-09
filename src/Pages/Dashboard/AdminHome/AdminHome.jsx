import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaDollarSign, FaUsers } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    });

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData?.map(data => ({
        name: data.category,
        value: data.quantity
    }));

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6">
                Welcome, {user?.displayName || 'Back'}!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    icon={<FaDollarSign className="text-4xl text-green-500" />}
                    title="Revenue"
                    value={`$${stats?.totalRevenue || 0}`}
                    description="Jan 1st - Feb 1st"
                />
                <StatCard
                    icon={<FaUsers className="text-4xl text-blue-500" />}
                    title="Total Users"
                    value={stats?.users || 0}
                    description="↗︎ 400 (22%)"
                />
                <StatCard
                    icon={<IoFastFood className="text-4xl text-yellow-500" />}
                    title="Food Items"
                    value={stats?.menuItems || 0}
                    description="↗︎ 90 (14%)"
                />
                <StatCard
                    icon={<IoFastFood className="text-4xl text-red-500" />}
                    title="Total Orders"
                    value={stats?.orders || 0}
                    description="↗︎ 90 (14%)"
                />
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-between items-center mt-10">
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <BarChart width={500} height={300} data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" label={{ position: 'top' }}>
                            {chartData?.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4">
                    <PieChart width={400} height={300}>
                        <Pie data={pieChartData} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={80} dataKey="value">
                            {pieChartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon, title, value, description }) => (
    <div className="bg-white shadow-lg rounded-xl p-5 flex items-center gap-4">
        {icon}
        <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
            <p className="text-xs text-green-600">{description}</p>
        </div>
    </div>
);

export default AdminHome;