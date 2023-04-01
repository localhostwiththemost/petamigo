import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";

import "./sass/main.css";
import HomePage from "./HomePage";
import SubmitPage from "./SubmitPage";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit-pet" element={<SubmitPage />} />
      </Routes>
    </>
  );
}

export default App;
