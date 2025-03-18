import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home.jsx';
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
import DelhiHome from './components/delhi/DelhiHome.jsx';
import NoidaHome from './components/noida/NoidaHome.jsx';
import GurugramHome from './components/gurugram/GurugramHome.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import TermsConditionsPage from './components/TermsConditionsPage.jsx';
import PrivacyPolicyPage from './components/PrivacyPolicyPage.jsx';
import MaidInDelhi from './components/Admin/MaidInDelhi.jsx';
import MaidInNoida from './components/Admin/MaidInNoida.jsx';
import MaidInGurugram from './components/Admin/MaidInGurugram.jsx';



import { useDispatch, useSelector } from 'react-redux';
import { getAboutAction } from './store/Action/actionAbout.jsx';
import { getAllBranchesAction } from './store/Action/actionBranch.jsx';
import { getAllGalleriesAction } from './store/Action/galleryAction.jsx';
import { getAllNewUpdatesAction } from './store/Action/newUpdateAction.jsx';
import { getAllRatingsAction } from './store/Action/ratingActions.jsx';
import { getAllServicesAction } from './store/Action/serviceActions.jsx';

function App() {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAboutAction());
    dispatch(getAllBranchesAction());
    dispatch(getAllGalleriesAction());
    dispatch(getAllNewUpdatesAction());
    dispatch(getAllRatingsAction());
    dispatch(getAllServicesAction());
  }, [dispatch]);




  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
    
      <Route path="/" element={<Home />} />
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
      <Route path="/admin/maid-in-delhi" element={<PrivateRoute><MaidInDelhi /></PrivateRoute>} />
      <Route path="/admin/maid-in-noida" element={<PrivateRoute><MaidInNoida /></PrivateRoute>} />
      <Route path="/admin/maid-in-gurugram" element={<PrivateRoute><MaidInGurugram /></PrivateRoute>} />

      <Route path="/maid-in-delhi" element={<DelhiHome />} />
      <Route path="/maid-in-noida" element={<NoidaHome />} />
      <Route path="/maid-in-gurugram" element={<GurugramHome />} />

      <Route path="/select-maid-terms-conditions" element={<TermsConditionsPage />} />
      <Route path="/select-maid-privacy-policy" element={<PrivacyPolicyPage />} />
      
    </Routes>
  </BrowserRouter>
    
    </>
  )
}

export default App