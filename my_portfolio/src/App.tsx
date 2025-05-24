import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Contact from './pages/Contact';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/music" element={<Music />} />
                <Route path="/contact" element={<Contact />} /> 
            </Routes>
        </Router>
    );
};

export default AppRoutes;
