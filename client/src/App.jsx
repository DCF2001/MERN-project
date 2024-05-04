import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReportGeneration from './pages/ReportGeneration';

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import ResidentialGarbage from './pages/ResidentialGarbage';
import RecyclingPrograms from './pages/RecyclingPrograms';
import OrganicWasteCompost from './pages/OrganicWasteComposting';



export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportGeneration />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/residential-garbage" element={<ResidentialGarbage />} />
        <Route path="/recycling-programs" element={<RecyclingPrograms />} />
        <Route path="/organic-waste-compost" element={<OrganicWasteCompost />} />


        </Route>
      </Routes>
    </Router>
  );
}



