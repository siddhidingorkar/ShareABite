import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Donate from "./routes/Donate";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Food from "./routes/Food";
import SignUp from "./routes/Signup";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </div>
  );
}
