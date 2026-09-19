import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Clubs from "../pages/Clubs";
import Events from "../pages/Events";
import Announcements from "../pages/Announcements";
import Gallery from "../pages/Gallery";
import Login from "../pages/Login";
function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/announcements" element={<Announcements />} />
         <Route path="/gallery" element={<Gallery />} />
        
      </Route>
        <Route path="/login" element={<Login />} />
    </Routes>
    
  );
}

export default AppRoutes;