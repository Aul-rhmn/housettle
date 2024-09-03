import React from "react";
import "assets/scss/style.scss";
import {  Route, Routes } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Example from "pages/Example";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/properties/:id" element={<DetailsPage />} />
          <Route path="/example" element={<Example />} />
          <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
