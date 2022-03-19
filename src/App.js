import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Components/Header";
import "./Components/Content";
import "./Components/Product";
import React from "react";
import Header from "./Components/Header";
import {Content} from "./Components/Content";
import {Checkout} from "./Components/Checkout";

function App(){
        
    return(
        <>
        <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Content/>} />
        <Route path="/checkout/:id/:name" element={<Checkout/>} />
        </Routes>
        </Router>
        </>
    )
}
       
export default App;
