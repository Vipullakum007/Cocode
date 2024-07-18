import './App.css';
import Footer from './components/footer.jsx';
import Navbar from './components/navbar.jsx';
import Home from './pages/Home.jsx';
import JoinRoom from './pages/JoinRoom.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import Features from './pages/Features.jsx';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<JoinRoom />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // <div className="App">
    //   <Navbar />
    //   <Home />
    //   <Footer />
    // </div>
  );
}

export default App;
