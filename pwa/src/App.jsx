import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
// const Chat = lazy(() => import('./sharedComp/chat'));


function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/question" element={<Question />} />
          <Route path="/signupQuestion" element={<SignupQuestion />} />
          {/* Use lazy-loaded Chat component */}
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
