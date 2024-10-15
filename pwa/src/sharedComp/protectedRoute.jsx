// import React, { useEffect } from 'react';
// import { Navigate, useLocation, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { ROUTES } from '../sharedComp/route';

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const { userInfo } = useSelector((state) => state.auth);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // If user is not logged in, navigate to home page
//     if (!userInfo) {
//       navigate('/', { state: { from: location } });
//     } else {
//       // Redirect logic based on role and statuses
//       switch (userInfo.user.role) {
//         case 'houseOwner':
//           if (userInfo.user.paymentStatus === 'pending') {
//             navigate(ROUTES.HOUSEOWNER_CHECKOUT, { state: { from: location } });
//           } else if (userInfo.user.jobStatus === 'in-progress') {
//             navigate(ROUTES.HOUSEOWNER_SERVICE_PROGRESS, { state: { from: location } });
//           }
//           break;

//         case 'shoveller':
//           navigate(userInfo.user.chargesEnabled ? ROUTES.SHOVELLER_SEARCH : ROUTES.SHOVELLER_ONBOARD, { state: { from: location } });
//           break;

//         case 'admin':
//           navigate(ROUTES.ADMIN_DASHBOARD, { state: { from: location } });
//           break;

//         default:
//           break; // Handle unrecognized roles
//       }

//       // Check if the user has the correct role to access the route
//       if (allowedRoles && !allowedRoles.includes(userInfo.user.role)) {
//         navigate('/unauthorized', { state: { from: location } });
//       }
//     }
//   }, [userInfo, navigate, location, allowedRoles]);

//   // Prevent component from rendering if the user is being redirected
//   if (!userInfo || (allowedRoles && !allowedRoles.includes(userInfo.user.role))) {
//     return null; // No rendering until navigation is complete
//   }

//   // Render the child component
//   return children;
// };

// export default ProtectedRoute;


import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from '../sharedComp/route';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    if (!userInfo) {
      // Redirect to login if no user info
      console.log('No user info, redirecting to login...');
      if (location.pathname !== '/') {
        navigate('/', { state: { from: location } });
      }
    } else {
      // Check the user role and decide navigation
      console.log('User role:', userInfo.user.role);

      // Define allowed routes based on job status hashmaps
      const allowedRoutesByJobStatus = {
        'open': [
          ROUTES.HOUSEOWNER_LISTOFSHOVELLERAPPLIED,
          ROUTES.HOUSEOWNER_ISMATCHSHOVELLER, // You can add more allowed routes for "open" status
          ROUTES.HOUSEOWNER_ISMATCHSHOVELLER,
        ],
        'in-progress': [
          ROUTES.HOUSEOWNER_SERVICE_PROGRESS, // Define allowed routes for "in-progress"
        ],
        'completed': [
          ROUTES.HOUSEOWNER_SERVICE_FINISHED,
          ROUTES.HOUSEOWNER_TRANSACTION, 
        ],
      };


      // Add the shoveller role
      const isAllowedRoutesForShovellerWhenChargesAreEnabled = {
        enabled: [
          ROUTES.SHVOELLER_MAP,
          ROUTES.SHOVELLER_LIST,
          ROUTES.SHOVELLER_ISMATCHHOUSEOWNER,
          ROUTES.SHOVELLER_APPLIEDJOBS,
          ROUTES.SHOVELLER_SERVICE_PROGRESS,
        ],
      };




      switch (userInfo.user.role) {
        case 'houseOwner':
          if (userInfo.user.paymentStatus === 'pending') {
            console.log('Redirecting to HouseOwner Checkout...');
            if (location.pathname !== ROUTES.HOUSEOWNER_CHECKOUT) {
              navigate(ROUTES.HOUSEOWNER_CHECKOUT, { state: { from: location } });
            }
          } else if (userInfo.user.jobStatus === 'in-progress') {
            console.log('Redirecting to Service Progress...');
            if (location.pathname !== ROUTES.HOUSEOWNER_SERVICE_PROGRESS) {
              navigate(ROUTES.HOUSEOWNER_SERVICE_PROGRESS, { state: { from: location } });
            }
          }
          else if (userInfo.user.jobStatus === 'open') {
            if (!allowedRoutesByJobStatus['open'].includes(location.pathname)) {
              if (location.pathname !== '/') {
                navigate('/', { state: { from: location } });
              }
            }
          }
          else if (userInfo.user.jobStatus === 'completed') {
            if (!allowedRoutesByJobStatus['completed'].includes(location.pathname)) {
              if (location.pathname !== '/') {
                navigate('/', { state: { from: location } });
              }
            }
          }
          break;



          case 'shoveller':
            if (userInfo.user.chargesEnabled) {
              // If charges are enabled, check if the current route is allowed
              const isAllowedRoute = isAllowedRoutesForShovellerWhenChargesAreEnabled.enabled.some(route => {
                if (typeof route === 'string') {
                  return route === location.pathname;
                } else if (route instanceof RegExp) {
                  return route.test(location.pathname);  // Match dynamic routes like appliedJobs
                }
                return false;
              });
          
              // Redirect to home page if the route is not allowed
              if (!isAllowedRoute) {
                console.log('Not allowed route for shoveller, redirecting to home...');
                if (location.pathname !== '/') {
                  navigate('/', { state: { from: location } });
                }
              }
            } else {
              console.log('Redirecting to onboarding for shoveller with disabled charges...');
              if (location.pathname !== ROUTES.SHOVELLER_ONBOARD) {
                navigate(ROUTES.SHOVELLER_ONBOARD, { state: { from: location } });
              }
            }
            break;
  
        case 'admin':
          console.log('Redirecting to Admin Dashboard...');
          if (location.pathname !== ROUTES.ADMIN_DASHBOARD) {
            navigate(ROUTES.ADMIN_DASHBOARD, { state: { from: location } });
          }
          break;

        default:
          console.log('Unrecognized role');
          break;
      }
    }
  }, [userInfo, navigate, location]);


  // Block rendering if user info is not available or navigation is in process
  if (!userInfo) return null;

  return children;
};

export default ProtectedRoute;

