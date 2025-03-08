import React, { useContext } from 'react'
import { AuthContext } from '../../../Providers/AuthProvider';

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2 className="text-2xl font-bold">
                <span>Welcome The legend AKA </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    )
}

export default AdminHome