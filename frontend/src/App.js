import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Application from "./components/Application";
import ImageUpload from "./components/ImageUpload";
import PrintPDF from "./components/PrintPDF";
import AuthState from './context/AuthState';

function App() {
  return (
    <div className="App">
      <AuthState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/applicant/profile" element={<Profile />} />
            <Route path="/apply" element={<Application />} />
            <Route path="/upload" element={<ImageUpload />} />
            <Route path="/printPDF" element={<PrintPDF />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AuthState>
    </div>
  );
}

export default App;