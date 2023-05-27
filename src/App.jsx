import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SectionTwo from './Components/Homepage/SectionTwo';
import SectionTree from './Components/Homepage/SectionTree';
import HomePage from './Pages/HomePage';
import FixedComponents from './Router/FixedComponents';
import './tailwind.css'
import TestPage from './Pages/TestPage';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FixedComponents/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<SectionTwo/>}/>
        <Route path="/homes" element={<SectionTree/>}/>
        <Route path="/test" element={<TestPage/>}/>
        </Route>

      </Routes>
    
    </div>
  );
}

export default App;
