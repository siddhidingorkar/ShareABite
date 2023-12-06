import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Donate from "./routes/Donate";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Food from "./routes/Food";
import SignUp from "./routes/Signup";
import toast, { Toaster } from 'react-hot-toast';
import DashboardContent from "./components/Dashboard";
import PickupConfirmedPage from "./components/Pickup";

export default function App() {
  return (
    <div className="App">
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/food" element={<Food />} />
        <Route path="/dashboard" element={<DashboardContent/>}/>
        <Route path="/pickup" element={<PickupConfirmedPage/>}/>
      </Routes>
    </div>
  );
}
