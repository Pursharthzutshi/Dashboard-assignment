import './App.css';
import LeftSidebar from './components/LeftSidebar/leftSidebar';
import CentralPage from './components/MainDashboardPage/HomePage';
import { Router,Routes,Route,Link } from "react-router-dom";
import Home from './components/LeftSidebar/Home';
import HomePage from '../src/components/MainDashboardPage/HomePage';
import { useState } from 'react';

function App() {
  const [homePageClass,setHomePageClass] = useState(true);
  const [likelihoodCurveImageClass,setLikelihoodCurveImageClass] = useState(true);

  return (
    <div className="App">
      <div className='dashboard'>
      <LeftSidebar likelihoodCurveImageClass={likelihoodCurveImageClass} setLikelihoodCurveImageClass={setLikelihoodCurveImageClass} homePageClass={homePageClass} setHomePageClass={setHomePageClass}/> 

<Routes>

<Route path="/" element={<HomePage likelihoodCurveImageClass={likelihoodCurveImageClass}
 setLikelihoodCurveImageClass={setLikelihoodCurveImageClass}
 homePageClass={homePageClass} setHomePageClass={setHomePageClass}/>}/>

</Routes>

      
      </div>
    </div>
  );
}

export default App;
