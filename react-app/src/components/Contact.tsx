export default function Contact() {
  return (
    <section className="p-8 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Contacto</h2>
      <form className="space-y-4" action="mailto:info@example.com" method="post" encType="text/plain">
        <div>
          <label className="block mb-1" htmlFor="name">Nombre:</label>
          <input className="w-full border p-2" type="text" id="name" name="name" required />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">Correo electrónico:</label>
          <input className="w-full border p-2" type="email" id="email" name="email" required />
        </div>
        <div>
          <label className="block mb-1" htmlFor="message">Mensaje:</label>
          <textarea className="w-full border p-2" id="message" name="message" rows={5} required></textarea>
        </div>
        <button className="bg-pink-500 text-white px-4 py-2" type="submit">Enviar</button>
      </form>
    </section>
  );
}
