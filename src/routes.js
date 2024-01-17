import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Users from "./containers/users";

function MyRoutes() {
    return (
        <Router>
            <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/cadastro" element={<Users/>} />
            </Routes>
        </Router>
    )
}

export default MyRoutes