import { useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import BiscuitClicker from "./Pages/BiscuitClicker";
import TempetureCheeker from "./Pages/TempetureCheeker";
import NotFoundPage from "./Pages/NotFoundPage";
import {
  INDEX_PATH,
  BiscuitClicker_PATH,
  TempetureCheeker_PATH,
  NotFoundPage_PATH
} from "./Constants/paths";
import NavBar from "./Pages/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path={INDEX_PATH} element={<Home />} />
          <Route path={BiscuitClicker_PATH} element={<BiscuitClicker />} />
          <Route path={TempetureCheeker_PATH} element={<TempetureCheeker />} />
          <Route path={NotFoundPage_PATH} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
