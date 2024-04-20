import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreateListing from "./pages/CreateListing";
import ViewListing from "./pages/ViewListing";
import UpdateListing from "./pages/UpdateListing";

export default function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
       
        <Route
          path="/profile"
          element={
            <>
              <Sidebar />
              <Profile />
            </>
          }
        />

        <Route
          path="/create-listing"
          element={
            <>
              <Sidebar />
              <CreateListing />
            </>
          }
        />

        <Route
          path="/view-listing"
          element={
            <>
              <Sidebar />
              <ViewListing />
            </>
          }
        />

        <Route
          path="/update-listing/:listingId"
          element={
            <>
              <Sidebar />
              <UpdateListing />
            </>
          }
        />


      </Routes>
    </BrowserRouter>
  );
}
