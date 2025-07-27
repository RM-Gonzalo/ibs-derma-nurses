const { HashRouter, Routes, Route, Link } = ReactRouterDOM;
function Home() {
    return (React.createElement("div", { className: "text-center" },
        React.createElement("h1", { className: "text-2xl font-bold text-pink-600" }, "IBS Derma Nurses"),
        React.createElement("p", { className: "mt-4" }, "Tu belleza en manos de profesionales")));
}
function About() {
    return (React.createElement("div", null,
        React.createElement("h2", { className: "text-xl font-semibold mb-2" }, "Nuestro equipo"),
        React.createElement("ul", { className: "space-y-1 list-disc ml-5" },
            React.createElement("li", null, "Irene - Especialista en cuidado facial"),
            React.createElement("li", null, "Beatriz - Experta en nutrici\u00F3n"),
            React.createElement("li", null, "Sandra - Est\u00E9tica corporal y masajes"))));
}
function Services() {
    return (React.createElement("div", null,
        React.createElement("h2", { className: "text-xl font-semibold mb-2" }, "Nuestros servicios"),
        React.createElement("ul", { className: "list-disc ml-5 space-y-1" },
            React.createElement("li", null, "Tratamientos faciales personalizados"),
            React.createElement("li", null, "Depilaci\u00F3n l\u00E1ser"),
            React.createElement("li", null, "Masajes relajantes"),
            React.createElement("li", null, "Peelings qu\u00EDmicos"))));
}
function Contact() {
    return (React.createElement("div", null,
        React.createElement("h2", { className: "text-xl font-semibold mb-2" }, "Contacto"),
        React.createElement("form", { className: "space-y-2", action: "mailto:info@example.com", method: "post", encType: "text/plain" },
            React.createElement("div", null,
                React.createElement("label", { className: "block mb-1", htmlFor: "name" }, "Nombre:"),
                React.createElement("input", { id: "name", name: "name", type: "text", required: true, className: "border p-1 w-full" })),
            React.createElement("div", null,
                React.createElement("label", { className: "block mb-1", htmlFor: "email" }, "Correo electr\u00F3nico:"),
                React.createElement("input", { id: "email", name: "email", type: "email", required: true, className: "border p-1 w-full" })),
            React.createElement("div", null,
                React.createElement("label", { className: "block mb-1", htmlFor: "message" }, "Mensaje:"),
                React.createElement("textarea", { id: "message", name: "message", rows: 4, required: true, className: "border p-1 w-full" })),
            React.createElement("button", { type: "submit", className: "bg-pink-600 text-white px-3 py-1" }, "Enviar"))));
}
function App() {
    return (React.createElement(HashRouter, null,
        React.createElement("nav", { className: "p-4 bg-pink-600 text-white flex gap-4" },
            React.createElement(Link, { to: "/" }, "Inicio"),
            React.createElement(Link, { to: "/about" }, "Nosotras"),
            React.createElement(Link, { to: "/services" }, "Servicios"),
            React.createElement(Link, { to: "/contact" }, "Contacto")),
        React.createElement("div", { className: "p-4" },
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
                React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
                React.createElement(Route, { path: "/services", element: React.createElement(Services, null) }),
                React.createElement(Route, { path: "/contact", element: React.createElement(Contact, null) })))));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));

