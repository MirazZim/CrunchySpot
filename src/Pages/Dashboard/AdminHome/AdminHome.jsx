import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaDollarSign, FaUsers } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, ResponsiveContainer, DefaultLegendContent } from 'recharts'
import { Legend } from '@headlessui/react';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = [] } = useQuery({
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

    

    // Custom bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };


    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;

    };


    // Custom pie Chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData =  chartData?.map(data => {
      return  { name: data.category,
        value: data.quantity}
    })

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-center">
                <h2 className="text-3xl font-bold">
                    <span>Welcome The legend AKA </span>
                    {user?.displayName ? user.displayName : 'Back'}
                </h2>
            </div>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white shadow-lg p-4 rounded-lg">
                    <div className="flex justify-between">
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <FaDollarSign className="text-5xl" />
                            </div>
                            <div className="stat-title">Revenue</div>
                            <div className="stat-value text-3xl font-bold">$ {stats?.totalRevenue || 0}</div>
                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <FaUsers className="text-5xl" />
                            </div>
                            <div className="stat-title">Total Users</div>
                            <div className="stat-value text-3xl font-bold">{stats?.users || 0}</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-lg p-4 rounded-lg">
                    <div className="flex justify-between">
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <IoFastFood className="text-5xl" />
                            </div>
                            <div className="stat-title">Total Food Items in our Menu</div>
                            <div className="stat-value text-3xl font-bold">{stats?.menuItems || 0}</div>
                            <div className="stat-desc">↗︎ 90 (14%)</div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <IoFastFood className="text-5xl" />
                            </div>
                            <div className="stat-title">Total orders</div>
                            <div className="stat-value text-3xl font-bold">{stats?.orders || 0}</div>
                            <div className="stat-desc">↗︎ 90 (14%)</div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className='flex'>
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData?.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <DefaultLegendContent />
                    </PieChart>

                </div>
            </div>


        </div>
    );
};

export default AdminHome;
