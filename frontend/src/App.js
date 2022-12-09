import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import AdminLogin from "./components/Admin/AdminLogin";
import Dashboard from "./components/Admin/Dashboard";
import Profile from "./components/Profile";
import Application from "./components/Application";
import ImageUpload from "./components/ImageUpload";
import PrintPDF from "./components/PrintPDF";
import Positions from "./components/Positions";
import A from "./components/FormParts/A";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/applicant/profile" element={<Profile />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/professor-apply" element={<Application />} />
            <Route path="/upload" element={<ImageUpload />} />
            <Route path="/printPDF" element={<PrintPDF />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/A" element={<A />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;