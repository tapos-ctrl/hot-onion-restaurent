import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BreakFasts from './pages/home/BreakFasts/BreakFasts';
import Dinners from './pages/home/Dinners/Dinners';
import Lunchs from './pages/home/Lunchs/Lunchs';
import Footer from './pages/home/Footer/Footer';
import Details from './pages/home/Details/Details';
import NavBar from './pages/home/NavBar/NavBar';


function App() {



  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<BreakFasts />} />
          <Route path="/breakfast" element={<BreakFasts />} />
          <Route path="/dinner" element={<Dinners />} />
          <Route path="/lunch" element={<Lunchs />} />
          <Route path="/service/:id" element={<Details />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
