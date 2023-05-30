import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, HashRouter, Switch, } from 'react-router-dom';
import AddScenario from './Component/AddScenario';
import { AllScenario } from './Component/AllScenario';
import { AddVehicles } from './Component/AddVehicles';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Navigation } from './Component/Navigation/Navigation';
import Home from './Component/Home';
import SideBar from './Component/SideBar';
function App() {
  // "deded"
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='AddScenario' element={<AddScenario />}></Route>
        <Route path='AllScenario' element={<AllScenario />}></Route>
        <Route path='AddVehicles' element={<AddVehicles />}></Route>
      </Routes>
    </BrowserRouter>
  );


}

export default App;
