import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Singlepost from './pages/Singlepost';
import Nomatch from './pages/Nomatch';
import Footer from './components/Footer';


function App() {
  return (
<>
      
      <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Sign Up</Link>
      </nav>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Singlepost" element={<Singlepost />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
      <Footer/>
      </Router>
   
        
      </>

  );
}

export default App;
