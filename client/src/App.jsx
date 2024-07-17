import './App.css';
import Footer from './components/footer.jsx';
import Navbar from './components/navbar.jsx';
import Home from './pages/Home.jsx';
import JoinRoom from './pages/JoinRoom.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp.jsx';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<JoinRoom />} />
        <Route path="/signup" element={<SignUp />} />
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
