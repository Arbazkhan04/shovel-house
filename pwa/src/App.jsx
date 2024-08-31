import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import HouseOwnerRoutes from "./HomeOwner/components/homeOwnerRoute";
import ShovellerRoutes from "./Shoveller/components/shovellerRoutes";

import Login from "./sharedComp/login";
import Question from "./sharedComp/question";


import Loader from './sharedComp/loader';

function App() {
  return (

    <Router>
      <Suspense fallback={<Loader />}>

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/question" element={<Question />} />
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
