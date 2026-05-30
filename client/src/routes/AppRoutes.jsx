import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Event from "../pages/Event";
import Clubs from "../pages/Clubs";
import About from "../pages/About";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}