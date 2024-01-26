import React from "react";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from "./page/home";
import Women from "./page/women";
import Men from "./page/men";
import Kids from "./page/kids";


export default function App()
{
    return <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/women" element={<Women />}></Route>
            <Route path="/kids" element={<Kids />}></Route>
            <Route path="/men" element={<Men />}></Route>
        </Routes>
    </Router>
}