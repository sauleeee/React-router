import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './Auth'

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {user} = useAuth();

    if (!user) {
        return <Navigate to='/login' state={{from: location}} replace />
    }

  return children;
}

export {RequireAuth};