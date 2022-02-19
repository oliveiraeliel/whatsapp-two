import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import { GetStarted, Login } from "./components/";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
};
