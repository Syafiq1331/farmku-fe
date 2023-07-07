import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../auth/Auth';

const PublicRoutes = () => {
  const auth = useAuth();
  console.log(auth);

  if (auth) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default PublicRoutes;