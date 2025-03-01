import React from 'react';
import { FaTrash, FaUsers } from 'react-icons/fa';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users',{
        headers: {
          authorization: `Bearer ${localStorage.getItem('access-token')}`
        }
      });
      return res.data;
    }
  })

  const handleDelete = user => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`)
          .then(() => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
      }
    })
  }

  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount > 0){
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-gray-50 to-gray-300 rounded-lg"
      style={{
        boxShadow: "inset 0 4px 6px -1px rgba(0, 0, 0, 0.2), inset 0 2px 4px -2px rgba(0, 0, 0, 0.2), inset 0 -4px 6px -1px rgba(0, 0, 0, 0.2), inset 0 -2px 4px -2px rgba(0, 0, 0, 0.2)"
      }}>
      <SectionTitle heading="All Users" subHeading="List of Registered Users" />
      <div className="flex justify-between items-center p-8 rounded-lg bg-white shadow-md text-black">
        <h1 className="text-xl font-bold">Total Users: {users.length} </h1>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden text-black">
          <thead>
            <tr className="bg-gray-200 text-black font-semibold text-lg">
              <th className="p-4">#</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-100 text-lg">
                <td className="p-4 text-center">{index + 1}</td>
                <td className="p-4 font-semibold text-center">{user.name}</td>
                <td className="p-4 text-center">{user.email}</td>
                <td className="p-4 text-center">


                  {user.role === 'admin' ? 'Admin'
                  : <button onClick={() => handleMakeAdmin(user)} className="flex items-center justify-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-all duration-300">
                    <FaUsers />
                  </button>}
                </td>
                <td className="p-4 text-center">
                  <button onClick={() => handleDelete(user)} className="flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-all duration-300">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
