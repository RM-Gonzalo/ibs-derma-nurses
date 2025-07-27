export default function Services() {
  const items = [
    'Tratamientos faciales personalizados',
    'Asesoría en cuidado de la piel',
    'Depilación láser',
    'Masajes relajantes',
    'Microdermoabrasión',
    'Peelings químicos',
    'Aplicación de toxina botulínica (Botox)',
    'Rellenos faciales y rejuvenecimiento',
    'Terapias con láser para manchas y acné',
    'Tratamientos capilares'
  ];

  return (
    <section className="p-8 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Nuestros servicios</h2>
      <ul className="list-disc list-inside space-y-1">
        {items.map(service => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </section>
  );
}
