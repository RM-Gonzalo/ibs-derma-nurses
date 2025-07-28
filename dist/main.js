const { HashRouter, Routes, Route, NavLink } = ReactRouterDOM;
function Home() {
    return (React.createElement("section", { className: "text-center p-8 space-y-4" },
        React.createElement("h1", { className: "text-4xl font-bold text-pink-600" }, "IBS Derma Nurses"),
        React.createElement("p", { className: "text-lg" }, "Bienestar y belleza con un toque profesional"),
        React.createElement("img", { src: "https://source.unsplash.com/featured/?wellness", alt: "Bienestar", className: "mx-auto rounded-lg shadow-lg max-w-md" })));
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
    return (React.createElement("section", { className: "p-4 space-y-6" }, items.map((t) => (React.createElement("article", { key: t.title, className: "bg-white rounded-lg shadow-md overflow-hidden md:flex" },
        React.createElement("img", { src: t.img, alt: t.title, className: "h-48 w-full md:w-1/3 object-cover" }),
        React.createElement("div", { className: "p-4 space-y-2" },
            React.createElement("h3", { className: "text-xl font-semibold text-pink-600" }, t.title),
            React.createElement("p", null, t.desc)))))));
}
function Gallery() {
    const images = [
        'https://source.unsplash.com/featured/?beauty',
        'https://source.unsplash.com/featured/?skincare',
        'https://source.unsplash.com/featured/?spa'
    ];
    return (React.createElement("section", { className: "p-4 grid grid-cols-1 md:grid-cols-3 gap-4" }, images.map((src, i) => (React.createElement("img", { key: i, src: src, alt: "Galer\u00EDa", className: "rounded-lg object-cover h-48 w-full" })))));
}
function Contact() {
    return (React.createElement("section", { className: "p-4" },
        React.createElement("h2", { className: "text-xl font-semibold mb-2" }, "Contacto"),
        React.createElement("form", { className: "space-y-2 max-w-md", action: "mailto:info@example.com", method: "post", encType: "text/plain" },
            React.createElement("div", null,
                React.createElement("label", { className: "block mb-1", htmlFor: "name" }, "Nombre:"),
                React.createElement("input", { id: "name", name: "name", type: "text", required: true, className: "border p-1 w-full" })),
            React.createElement("div", null,
                React.createElement("label", { className: "block mb-1", htmlFor: "email" }, "Correo electr\u00F3nico:"),
                React.createElement("input", { id: "email", name: "email", type: "email", required: true, className: "border p-1 w-full" })),
            React.createElement("div", null,
                React.createElement("label", { className: "block mb-1", htmlFor: "message" }, "Mensaje:"),
                React.createElement("textarea", { id: "message", name: "message", rows: 4, required: true, className: "border p-1 w-full" })),
            React.createElement("button", { type: "submit", className: "bg-pink-600 text-white px-3 py-1 rounded" }, "Enviar"))));
}
function Layout({ children }) {
    const linkClass = ({ isActive }) => isActive ? 'text-pink-600 font-semibold' : 'hover:text-pink-600';
    return (React.createElement("div", null,
        React.createElement("header", { className: "bg-white shadow-md" },
            React.createElement("nav", { className: "container mx-auto flex gap-4 p-4" },
                React.createElement(NavLink, { to: "/", className: linkClass, end: true }, "Inicio"),
                React.createElement(NavLink, { to: "/treatments", className: linkClass }, "Tratamientos"),
                React.createElement(NavLink, { to: "/gallery", className: linkClass }, "Galer\u00EDa"),
                React.createElement(NavLink, { to: "/contact", className: linkClass }, "Contacto"))),
        React.createElement("main", { className: "container mx-auto py-6" }, children)));
}
function App() {
    return (React.createElement(HashRouter, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Layout, { children: React.createElement(Home, null) }) }),
            React.createElement(Route, { path: "/treatments", element: React.createElement(Layout, { children: React.createElement(Treatments, null) }) }),
            React.createElement(Route, { path: "/gallery", element: React.createElement(Layout, { children: React.createElement(Gallery, null) }) }),
            React.createElement(Route, { path: "/contact", element: React.createElement(Layout, { children: React.createElement(Contact, null) }) }))));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
