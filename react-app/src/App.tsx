import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-gradient-to-r from-pink-400 to-pink-200 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">IBS Derma Nurses</h1>
        <nav>
          <ul className="flex gap-4">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Sobre nosotras</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="bg-gradient-to-r from-pink-400 to-pink-200 text-white text-center p-4">
        <p>&copy; 2025 IBS Derma Nurses</p>
        <p className="text-sm">Sitio ficticio con fines demostrativos.</p>
      </footer>
    </div>
  );
}
