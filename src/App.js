import React from "react";
import Navbar from "./component/layout/Navbar.js";
import Sidebar from "./component/layout/Sidebar.js";
import Welcome from "./pages/Welcome.js";
import Account from "./pages/Account.js"; 
import Transaction from "./pages/Transaction";
import Notification from "./pages/Notification";
import Login from "./pages/Login";

import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import   '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import "./assets/custome.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
            <Route  path="/" element={ <Welcome />}/> 
            <Route  path="/account" element={ <Account />}/> 
            <Route  path="/transaction" element={ <Transaction />}/> 
            <Route  path="/notification" element={ <Notification />}/> 
            <Route  path="/login" element={ <Login />}/> 
          
      </Routes>
    </Router>
    </div>
  );
}
export default App;
