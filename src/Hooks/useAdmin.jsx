import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: isAdmin, isLoading, error } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      if (!user?.email) return false;
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.admin || false;
    },
    enabled: !!user?.email, // Only run the query if the user email exists
  });

  return [isAdmin, isLoading, error];
};

export default useAdmin;
