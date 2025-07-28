// React + TS router app
declare const React: any;
declare const ReactDOM: any;
declare const ReactRouterDOM: any;

const { HashRouter, Routes, Route, NavLink } = ReactRouterDOM;

function Home() {
  return (
    <section className="text-center p-8 space-y-4">
      <h1 className="text-4xl font-bold text-pink-600">IBS Derma Nurses</h1>
      <p className="text-lg">Bienestar y belleza con un toque profesional</p>
      <img
        src="https://source.unsplash.com/featured/?wellness"
        alt="Bienestar"
        className="mx-auto rounded-lg shadow-lg max-w-md"
      />
    </section>
  );
}

function Treatments() {
  const items = [
    {
      title: 'Tratamientos faciales',
      img: 'https://source.unsplash.com/featured/?facial-care',
      desc: 'Cuida tu piel con nuestros protocolos personalizados.'
    },
    {
      title: 'Depilación láser',
      img: 'https://source.unsplash.com/featured/?laser',
      desc: 'Tecnología de última generación para resultados duraderos.'
    },
    {
      title: 'Masajes relajantes',
      img: 'https://source.unsplash.com/featured/?massage',
      desc: 'Renueva tu energía y libera tensiones con nuestros masajes.'
    }
  ];

  return (
    <section className="p-4 space-y-6">
      {items.map((t) => (
        <article
          key={t.title}
          className="bg-white rounded-lg shadow-md overflow-hidden md:flex"
        >
          <img
            src={t.img}
            alt={t.title}
            className="h-48 w-full md:w-1/3 object-cover"
          />
          <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold text-pink-600">{t.title}</h3>
            <p>{t.desc}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

function Gallery() {
  const images = [
    'https://source.unsplash.com/featured/?beauty',
    'https://source.unsplash.com/featured/?skincare',
    'https://source.unsplash.com/featured/?spa'
  ];
  return (
    <section className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Galería"
          className="rounded-lg object-cover h-48 w-full"
        />
      ))}
    </section>
  );
}

function Contact() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-2">Contacto</h2>
      <form
        className="space-y-2 max-w-md"
        action="mailto:info@example.com"
        method="post"
        encType="text/plain"
      >
        <div>
          <label className="block mb-1" htmlFor="name">
            Nombre:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="border p-1 w-full"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">
            Correo electrónico:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="border p-1 w-full"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="message">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="border p-1 w-full"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-pink-600 text-white px-3 py-1 rounded"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

function Layout({ children }: { children: any }) {
  const linkClass = ({ isActive }: any) =>
    isActive ? 'text-pink-600 font-semibold' : 'hover:text-pink-600';
  return (
    <div>
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex gap-4 p-4">
          <NavLink to="/" className={linkClass} end>
            Inicio
          </NavLink>
          <NavLink to="/treatments" className={linkClass}>
            Tratamientos
          </NavLink>
          <NavLink to="/gallery" className={linkClass}>
            Galería
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contacto
          </NavLink>
        </nav>
      </header>
      <main className="container mx-auto py-6">{children}</main>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout children={<Home />} />}
        />
        <Route
          path="/treatments"
          element={<Layout children={<Treatments />} />}
        />
        <Route
          path="/gallery"
          element={<Layout children={<Gallery />} />}
        />
        <Route
          path="/contact"
          element={<Layout children={<Contact />} />}
        />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
