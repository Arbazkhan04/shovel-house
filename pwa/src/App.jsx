// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Loader from './sharedComp/loader';
import ProtectedRoute from './sharedComp/protectedRoute';
import ResetPassword from './sharedComp/resetPassword';
import HouseOwnerRoutes from './HomeOwner/components/homeOwnerRoute';
import ShovellerRoutes from './Shoveller/components/shovellerRoutes';
import AdminRoutes from './Admin/components/adminRoutes';

const Login = lazy(() => import('./sharedComp/login'));
const Question = lazy(() => import('./sharedComp/question'));
const SignupQuestion = lazy(() => import('./sharedComp/singupQuestion'));

function App() {
  const { userInfo } = useSelector((state) => state.auth);

  const renderRoutes = useMemo(() => {
    if (!userInfo) return null; // Return null if userInfo is not available

    const roleRoutes = {
      houseOwner: HouseOwnerRoutes,
      shoveller: ShovellerRoutes,
      admin: AdminRoutes,
    };

    return (
      <>
        {/* HouseOwner routes */}
        {userInfo.user.role === 'houseOwner' &&
          roleRoutes.houseOwner.map(({ path, element }) => (
            <Route
              key={path}
              path={`/houseowner${path}`}
              element={
                <ProtectedRoute allowedRoles={['houseOwner']}>
                  {element}
                </ProtectedRoute>
              }
            />
          ))}
        
        {/* Shoveller routes */}
        {userInfo.user.role === 'shoveller' &&
          roleRoutes.shoveller.map(({ path, element }) => (
            <Route
              key={path}
              path={`/shoveller${path}`}
              element={
                <ProtectedRoute allowedRoles={['shoveller']}>
                  {element}
                </ProtectedRoute>
              }
            />
          ))}
        
        {/* Admin routes */}
        {userInfo.user.role === 'admin' &&
          roleRoutes.admin.map(({ path, element }) => (
            <Route
              key={path}
              path={`/admin${path}`}
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  {element}
                </ProtectedRoute>
              }
            />
          ))}
      </>
    );
  }, [userInfo]);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/question" element={<Question />} />
          <Route path="/signupQuestion" element={<SignupQuestion />} />
          <Route path="/resetPassword/:resetToken" element={<ResetPassword />} />
          <Route path="/" element={<Login />} />
          <Route path="/unauthorized" element={<div>Unauthorized Access</div>} /> {/* Handle unauthorized access */}
          {renderRoutes}
        </Routes>
      </Suspense>
    </Router>
  );
}


// function App() {
//   const { userInfo } = useSelector((state) => state.auth);

//   const renderRoutes = useMemo(() => {
//     if (!userInfo) return null; // Return null if userInfo is not available

//     const routes = [];
//     const basePath = userInfo.user.role === 'houseOwner' ? '/houseowner' :
//                     userInfo.user.role === 'shoveller' ? '/shoveller' :
//                     userInfo.user.role === 'admin' ? '/admin' : null;

//     const roleRoutes = {
//       houseOwner: HouseOwnerRoutes,
//       shoveller: ShovellerRoutes,
//       admin: AdminRoutes,
//     };

//     if (basePath) {
//       roleRoutes[userInfo.user.role].forEach(({ path, element }) => {
//         routes.push(
//           <Route key={path} path={`${basePath}${path}`} element={<ProtectedRoute>{element}</ProtectedRoute>} />
//         );
//       });
//     }
    
//     return routes;
//   }, [userInfo]);

//   return (
//     <Router>
//       <Suspense fallback={<Loader />}>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/question" element={<Question />} />
//           <Route path="/signupQuestion" element={<SignupQuestion />} />
//           <Route path="/resetPassword/:resetToken" element={<ResetPassword />} />
//           <Route path="/" element={<Login />} />
//           {renderRoutes}
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// }

export default App;