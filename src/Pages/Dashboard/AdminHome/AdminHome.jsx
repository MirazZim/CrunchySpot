import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaDollarSign, FaUsers } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: stats, isLoading, error } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    // Handle loading state
    if (isLoading) {
        return <div className="text-center text-xl font-bold">Loading...</div>;
    }

    // Handle error state
    if (error) {
        return <div className="text-center text-red-500">Error loading data!</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold">
                <span>Welcome The legend AKA </span>
                {user?.displayName ? user.displayName : 'Back'}
            </h2>
            <br />
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className="text-5xl" />
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">$ {stats?.totalRevenue || 0}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-5xl" />
                    </div>
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value">{stats?.users || 0}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <IoFastFood className="text-5xl" />
                    </div>
                    <div className="stat-title">Total Food Items in our Menu</div>
                    <div className="stat-value">{stats?.menuItems || 0}</div>
                    <div className="stat-desc">↗︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <IoFastFood className="text-5xl" />
                    </div>
                    <div className="stat-title">Total orders</div>
                    <div className="stat-value">{stats?.orders || 0}</div>
                    <div className="stat-desc">↗︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
