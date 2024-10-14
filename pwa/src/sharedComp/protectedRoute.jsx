import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const location = useLocation();

  // Check if the user is authenticated
  if (!userInfo) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  // Check if the user has the correct role to access the route
  if (allowedRoles && !allowedRoles.includes(userInfo.user.role)) {
    return <Navigate to="/unauthorized" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
