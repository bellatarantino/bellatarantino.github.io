import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Notfound from "./pages/Notfound";
import YokoteNet from "./pages/YokoteNet";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/yokote-net" element={<YokoteNet />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}