import React, { useContext } from 'react'
import { AuthContext } from '../../../Providers/AuthProvider'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: payments } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data
        }
    })
    return (
        <div className="overflow-x-auto shadow-md rounded-lg p-4 text-black">
            <table className="table w-full text-black">
                <thead>
                    <tr>
                        <th className="bg-gray-100 text-black">Users Name</th>
                        <th className="bg-gray-100 text-black">Transaction ID</th>
                        <th className="bg-gray-100 text-black">Amount</th>
                        <th className="bg-gray-100 text-black">Payment Method</th>
                        <th className="bg-gray-100 text-black">Payment Status</th>
                        <th className="bg-gray-100 text-black">Payment Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payments?.map((payment, i) => <tr key={payment._id} className="text-black">
                            <td className="text-black">{payment.name}</td>
                            <td className="text-black">{payment.transactionId}</td>
                            <td className="text-black">${payment.amount}</td>
                            <td className="text-black">{payment.method}</td>
                            <td className="text-black">{payment.status}</td>
                            <td className="text-black">{new Date(payment.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PaymentHistory