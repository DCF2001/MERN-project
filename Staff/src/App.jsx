import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllStaffMembers from './pages/AllStaffMembers';
import AddStaffMember from './pages/AddStaffMember';
import StaffSalaryReport from './pages/StaffSalaryReport';
import UpdateStaffMember from './pages/UpdateStaffMember';
import ViewStaffRequest from './pages/ViewStaffRequest';

export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/AllStaffMembers" element={<AllStaffMembers/>}/>
        <Route path="/AddStaffMember" element={<AddStaffMember/>}/>
        <Route path="/StaffSalaryReport" element={<StaffSalaryReport />} />
        <Route path="/UpdateStaffMember" element={<UpdateStaffMember />} /> {/* Updated path */}
        <Route path="/ViewStaffRequest" element={<ViewStaffRequest />} /> {/* Updated path */}
        
      </Routes>
    </BrowserRouter>
  );
}

