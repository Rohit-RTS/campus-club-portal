import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Clubs from "../pages/Clubs";
import Events from "../pages/Events";
import Announcements from "../pages/Announcements";
import Gallery from "../pages/Gallery";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/announcements" element={<Announcements />} />
         <Route path="/gallery" element={<Gallery />} />

         <Route path="/dashboard" element={<Dashboard/>}/>
        
      </Route>
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
    </Routes>
    
  );
}

export default AppRoutes;