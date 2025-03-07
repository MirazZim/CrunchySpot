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
        <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-gray-50 to-gray-300 rounded-lg"
            style={{
                boxShadow:
                    "inset 0 4px 6px -1px rgba(0, 0, 0, 0.2), inset 0 2px 4px -2px rgba(0, 0, 0, 0.2), inset 0 -4px 6px -1px rgba(0, 0, 0, 0.2), inset 0 -2px 4px -2px rgba(0, 0, 0, 0.2)"
            }}>
            <h1 className="text-2xl font-bold text-center text-black mb-6">Payment Transactions</h1>
            <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden text-black">
                    <thead>
                        <tr className="bg-gray-200 text-black font-semibold text-lg">
                            <th className="p-4">User Name</th>
                            <th className="p-4">Transaction ID</th>
                            <th className="p-4">Amount</th>
                            <th className="p-4">Payment Status</th>
                            <th className="p-4">Payment Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments?.map((payment, i) => (
                            <tr key={payment._id} className="border-b border-gray-200 hover:bg-gray-100 text-lg">
                                <td className="p-4 text-center font-semibold">{payment.name}</td>
                                <td className="p-4 text-center">{payment.transactionId}</td>
                                <td className="p-4 text-center">${payment.amount.toFixed(2)}</td>
                                <td className={`p-4 text-center font-semibold ${payment.status === 'Completed' ? 'text-green-600' : 'text-red-600'}`}>{payment.status}</td>
                                <td className="p-4 text-center">{new Date(payment.date).toLocaleString('en-US', {
                                    year: 'numeric', month: 'long', day: 'numeric',
                                    hour: '2-digit', minute: '2-digit', second: '2-digit'
                                })}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default PaymentHistory