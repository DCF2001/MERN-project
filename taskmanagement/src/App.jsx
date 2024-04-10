import { BrowserRouter, Routes, Route } from "react-router-dom";
import Taskmanagement from "./pages/Taskmanagement";
import Routerequests from "./pages/Routerequests";
import Vehiclerequests from "./pages/Vehiclerequests";
import Createtask from "./pages/Createtask"; 
import Header from "./components/Headertaskmanagement";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Taskmanagement />} />
        <Route path="/routerequests" element={<Routerequests />} /> {/* Updated path */}
        <Route path="/vehiclerequests" element={<Vehiclerequests />} /> {/* Updated path */}
        <Route path="/createtask" element={<Createtask />} /> {/* Updated path and component name */}
      </Routes>
    </BrowserRouter>
  );
}
