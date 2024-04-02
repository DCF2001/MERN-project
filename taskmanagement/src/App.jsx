import { BrowserRouter,Routes,Route } from "react-router-dom"
import Taskmanagement from "./pages/Taskmanagement"
import Routerequests from "./pages/Routerequests"
import Vehiclerequests from "./pages/Vehiclerequests"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Taskmanagement />} />
      <Route path="Routerequests" element={<Routerequests />} />
      <Route path="Vehiclerequests" element={<Vehiclerequests />} />
    </Routes>
    </BrowserRouter>
  )
}