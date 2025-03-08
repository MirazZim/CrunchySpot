import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const UserHome = () => {
    const { user } = useContext(AuthContext);
  return (
    <div>
        <h2 className="text-2xl font-bold">
            <span>Hi, Welcome </span>
            {
                user?.displayName ? user.displayName : 'Back'
            }
        </h2>
    </div>
  )
}

export default UserHome