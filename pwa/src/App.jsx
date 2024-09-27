import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './sharedComp/loader';

import 'leaflet/dist/leaflet.css';
import HouseOwnerRoutes from "./HomeOwner/components/homeOwnerRoute";
import ShovellerRoutes from "./Shoveller/components/shovellerRoutes";
import AdminRoutes from './Admin/components/adminRoutes';

// Lazy load components
const Login = lazy(() => import('./sharedComp/login'));
const Question = lazy(() => import('./sharedComp/question'));
const SignupQuestion = lazy(() => import('./sharedComp/singupQuestion'));
const Communications = lazy(() => import('./Admin/components/communications/page')); // Corrected path
const PaymentManagement = lazy(() => import('./Admin/components/payment-management/page')); // Adjusted path
const QueriesManagement = lazy(() => import('./Admin/components/queries-management/page')); // Adjusted path
const ServicesRequest = lazy(() => import('./Admin/components/services-request/page')); // Adjusted path

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/question" element={<Question />} />
          <Route path="/signupQuestion" element={<SignupQuestion />} />

          {/* New routes for the pages */}
          <Route path="/communications" element={<Communications />} />
          <Route path="/payment-management" element={<PaymentManagement />} />
          <Route path="/queries-management" element={<QueriesManagement />} />
          <Route path="/services-request" element={<ServicesRequest />} />

          {/* Lazy-loaded Chat component */}
          {/* <Route path="/chat" element={<Chat />} /> */}

          {HouseOwnerRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={`/houseowner${path}`}
              element={element}
            />
          ))}
          {ShovellerRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={`/shoveller${path}`}
              element={element}
            />
          ))}
          {AdminRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={`/admin${path}`}
              element={element}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
