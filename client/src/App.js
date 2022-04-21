import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import PostDeed from './pages/PostDeed';
import Nomatch from './pages/Nomatch';
import Footer from './components/Footer';


function App() {
  return (
<>
      
      <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/postdeed">Post Deed</Link>
      </nav>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/PostDeed" element={<PostDeed />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
      <Footer/>
      </Router>
   
        
      </>

  );
}

export default App;
