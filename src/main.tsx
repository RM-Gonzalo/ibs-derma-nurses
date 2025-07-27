// React + TS router app
declare const React: any;
declare const ReactDOM: any;
declare const ReactRouterDOM: any;

const { HashRouter, Routes, Route, Link } = ReactRouterDOM;

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-pink-600">IBS Derma Nurses</h1>
      <p className="mt-4">Tu belleza en manos de profesionales</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Nuestro equipo</h2>
      <ul className="space-y-1 list-disc ml-5">
        <li>Irene - Especialista en cuidado facial</li>
        <li>Beatriz - Experta en nutrición</li>
        <li>Sandra - Estética corporal y masajes</li>
      </ul>
    </div>
  );
}

function Services() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Nuestros servicios</h2>
      <ul className="list-disc ml-5 space-y-1">
        <li>Tratamientos faciales personalizados</li>
        <li>Depilación láser</li>
        <li>Masajes relajantes</li>
        <li>Peelings químicos</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Contacto</h2>
      <form className="space-y-2" action="mailto:info@example.com" method="post" encType="text/plain">
        <div>
          <label className="block mb-1" htmlFor="name">Nombre:</label>
          <input id="name" name="name" type="text" required className="border p-1 w-full" />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">Correo electrónico:</label>
          <input id="email" name="email" type="email" required className="border p-1 w-full" />
        </div>
        <div>
          <label className="block mb-1" htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows={4} required className="border p-1 w-full"></textarea>
        </div>
        <button type="submit" className="bg-pink-600 text-white px-3 py-1">Enviar</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <nav className="p-4 bg-pink-600 text-white flex gap-4">
        <Link to="/">Inicio</Link>
        <Link to="/about">Nosotras</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
