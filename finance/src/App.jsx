import { BrowserRouter,  Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Requests from "./pages/Requests";
import Payments from "./pages/Payments";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/reports" element={<Reports />} />
      
    </Routes>
    </BrowserRouter>
  )
}
