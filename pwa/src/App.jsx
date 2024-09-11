import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import HouseOwnerRoutes from "./HomeOwner/components/homeOwnerRoute";
import ShovellerRoutes from "./Shoveller/components/shovellerRoutes";
import Chat from "./sharedComp/chat";
// In your main index.js or App.js
import 'leaflet/dist/leaflet.css';

import Login from "./sharedComp/login";
import Question from "./sharedComp/question";
import SignupQuestion from "./sharedComp/singupQuestion";


import Loader from './sharedComp/loader';

function App() {
  const jobId = '66e03afed4e709de47f51ce3'; // Example jobId
  const userId = '66d82f725178d979882cc3de'; // Example userId
  const clientId = "66d82f725178d979882cc3de";
  const providerId = "66d82ca10001748cce7ccb1b"
  return (

    <Router>
      <Suspense fallback={<Loader />}>

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/question" element={<Question />} />
          <Route path ="signupQuestion" element={<SignupQuestion />} />
          <Route path="/chat" element={<Chat jobId={jobId} userId={userId} clientId={clientId} providerId={providerId} />} />
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
      </Routes>
      </Suspense>

    </Router>
  );
}

export default App;
