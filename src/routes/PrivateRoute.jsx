import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return (
          <div className="flex h-screen items-center justify-center">
            <span className="loading loading-spinner text-success"></span>
          </div>
        );
    }

    if(user && user.email){
        return children
    }
    else{
         return <Navigate state={location.pathname} to="/login"></Navigate>
    }
};

export default PrivateRoute;