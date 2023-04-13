import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";

import "./sass/main.css";
import HomePage from "./HomePage";
import SubmitPage from "./SubmitPage";
import { Auth } from "./Auth";
import { auth, googleProvider } from "./firebase";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.providerData[0].providerId === googleProvider.providerId) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Nav loggedIn={loggedIn}  />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/submit-pet"
          element={<SubmitPage loggedIn={loggedIn} />}
        />
        <Route path="/login" element={<Auth setLoggedIn={setLoggedIn} />} />
      </Routes>
    </>
  );
}

export default App;
