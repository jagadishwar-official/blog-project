import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Navbar from "./components/common/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;