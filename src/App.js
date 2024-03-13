import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';
import Signin from './Signin';
import Registration from "./Registration.js";

function App() {
  return (
    <div className="App">

    <Routes>
    <Route>
        <Route path="/" element={<Signin/> }/>
        <Route path="/registration" element={<Registration/> }/>


      </Route>
    </Routes>

    </div>
  );
}

export default App;
