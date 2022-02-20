import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import { GetStarted, Login, Home } from "./containers/";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};
