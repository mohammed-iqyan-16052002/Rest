import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Carouse from './Components/Carousel';
import Nav from './Nav';
import Func from './Components/Func';
import Wishlist from './Components/Wishlist';
import Authn from "./Auth/Authn";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Carouse />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/auth" element={<Authn />} />
      </Routes>
    </>
  );
}

export default App;
