import { BrowserRouter, Routes, Route } from "react-router-dom";
import Taskmanagement from "./pages/Taskmanagement";
import Routerequests from "./pages/Routerequests";
import Vehiclerequests from "./pages/Vehiclerequests";
import Createtask from "./pages/Createtask"; 
import TaskHeader from "./components/Headertaskmanagement";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/taskheader" element={<TaskHeader/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/" element={<Taskmanagement />} />
        <Route path="/routerequests" element={<Routerequests />} /> {/* Updated path */}
        <Route path="/vehiclerequests" element={<Vehiclerequests />} /> {/* Updated path */}
        <Route path="/createtask" element={<Createtask />} /> {/* Updated path and component name */}
        <Route path="/home" element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/about" element={<About/>} />
        <Route element = {<PrivateRoute />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}
