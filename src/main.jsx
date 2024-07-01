import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Admin from "./components/Admin/Admin.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import AdminLogin from "./components/Admin/AdminLogin.jsx";
import About from "./components/Admin/About.jsx";
import NewUpdates from "./components/Admin/NewUpdates.jsx";
import Gallery from "./components/Admin/Gallery.jsx";
import Review from "./components/Admin/Review.jsx";
import Services from "./components/Admin/Services.jsx";
import Branches from "./components/Admin/Branches.jsx";
import Contact from "./components/Admin/Contact.jsx";
import PrivateRoute from "./components/Admin/PrivateRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />

        <Route path="/admin/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/admin/new-updates" element={<PrivateRoute><NewUpdates /></PrivateRoute>} />
        <Route path="/admin/gallery" element={<PrivateRoute><Gallery /></PrivateRoute>} />
        <Route path="/admin/review" element={<PrivateRoute><Review /></PrivateRoute>} />
        <Route path="/admin/services" element={<PrivateRoute><Services /></PrivateRoute>} />
        <Route path="/admin/branches" element={<PrivateRoute><Branches /></PrivateRoute>} />
        <Route path="/admin/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
