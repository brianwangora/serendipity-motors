import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../home/Home";
import Navbar from "../navbar/Navbar";
import Inventory from "../inventory/Inventory";
import Contact from "../contact/Contact";
import VehicleDetails from "../details/VehicleDetails";
import VehicleFormDisplayed from "../form/VehicleFormDisplayed";

export default function App(){
  return(
    <Router>
      <div>
        <Navbar/>
      </div>

      <Routes>
        <Route exact path="/serendipity-motors" element={<Home/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/inventory" element={<Inventory/>}></Route>
        <Route exact path="/inventory/:vehicleId" element={<VehicleDetails/>}></Route>
        <Route exact path="/vehicleform" element={<VehicleFormDisplayed/>}></Route>
      </Routes>

    </Router>
  )
}
