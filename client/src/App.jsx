import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn"
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import CreateListing from "./pages/CreateListing";


export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} /> 
       <Route path="/profile" element={<Profile />} />
       <Route path='/create-listing' element ={<CreateListing/>} />        
    
      </Routes>
    </BrowserRouter>
  );
}



    