import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Application from "./components/Application";
import ImageUpload from "./components/ImageUpload";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/applicant/profile" element={<Profile />} />
          <Route path="/apply" element={<Application />} />
          <Route path="/upload" element={<ImageUpload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;