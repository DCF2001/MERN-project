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
import OAuth from "./components/OAuth";
import Research from './pages/Research';
import RResearch from './pages/RResearch';
import PProduct from './pages/PProduct';
import CResearch from './pages/CResearch';
import Footer from './components/Footer';
import HeaderResearch from "./components/HeaderResearch";
import UResearch from "./pages/UResearch"
import HeaderKavinga from "./components/Header Kavinga";
import RproductsHeader from "./components/RproductsHeader";
import ReportGeneration from './pages/ReportGeneration';
import CreateGarbageRoute from './pages/CreateGarbageRoute';
import HomeRavi from './pages/HomeRavi';
import RouteDocument from './pages/RouteDocument';
import ShowAll from './pages/ShowAll';
import EditGarbage from './pages/EditGarbageRoute';
import DeleteGarbage from './pages/DeleteGarbageRoute';

export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/taskheader" element={<TaskHeader/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/TaskManagement" element={<Taskmanagement />} />
        <Route path="/routerequests" element={<Routerequests />} /> {/* Updated path */}
        <Route path="/vehiclerequests" element={<Vehiclerequests />} /> {/* Updated path */}
        <Route path="/createtask" element={<Createtask />} /> {/* Updated path and component name */}
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/about" element={<About/>} />
        <Route element = {<PrivateRoute />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/oauth" element={<OAuth/>} />
        <Route path="/research" element={<Research/>} />
        <Route path="/RResearch" element={<RResearch/>} />
        <Route path="/pproduct" element={<PProduct/>} />
        <Route path="/CResearch" element={<CResearch/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/UResearch" element={<UResearch/>} />
        <Route path="/headerresearch" element={<HeaderResearch/>} />
        <Route path="/headerkavinga" element={<HeaderKavinga/>} />
        <Route path="/headerkavinga" element={<RproductsHeader/>} />
        <Route path="/reportgeneration" element={<ReportGeneration/>} />
        <Route path="/reportgeneration" element={<ShowAll/>} />
        <Route path="/create" element={<CreateGarbageRoute/>} />
        <Route path="/delete/:id" element={<DeleteGarbage/>} />
        <Route path="/edit/:id" element={<EditGarbage/>} />
        <Route path="/all/:id" element={<RouteDocument/>} />
        <Route path="/homeroute" element={<HomeRavi/>} />

        

      </Routes>
    </BrowserRouter>
  );
}
