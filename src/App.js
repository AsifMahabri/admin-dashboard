
import './App.css';
import React from 'react';
import Navbar from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div>
      <Navbar/>
      <div class="container-fluid" id="main">
        <div class="row row-offcanvas row-offcanvas-left">
        
        <Sidebar/> 
        <Dashboard/>
         </div>

      </div>
    </div>
  );
}

export default App;
