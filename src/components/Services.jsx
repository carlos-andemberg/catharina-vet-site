const services = [
  {
    title: 'Consulta veterinária geral',
    description: 'Atendimento clínico completo sem sair de casa.',
    icon: '🏠',
  },
  {
    title: 'Vacinação e vermifugação',
    description: 'Aplicação das vacinas essenciais e orientação.',
    icon: '💉',
  },
  {
    title: 'Exames laboratoriais',
    description: 'Coleta de sangue, exames básicos, check-up completo sem sair de casa.',
    icon: '🔬',
  },
  {
    title: 'Documentação para viagem',
    description: 'Documentos necessários para o seu pet poder viajar para qualquer lugar com você.',
    icon: '✈️',
  },
  {
    title: 'Microchipagem',
    description: 'Deixe o seu pet protegido e diminua os riscos de perda.',
    icon: '📍',
  },
  {
    title: 'Encaminhamento Cirúrgicos',
    description: 'Encaminhamento para cirurgia veterinária e acompanhamento pós-operatório.',
    icon: '🏥',
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-background-green py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Serviços</h2>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            Oferecemos uma variedade de serviços veterinários no conforto do seu lar
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200">
                <dt className="text-3xl mb-4">{service.icon}</dt>
                <dd className="flex flex-auto flex-col">
                  <p className="text-lg font-semibold leading-7 text-gray-900">{service.title}</p>
                  <p className="mt-1 flex flex-auto text-base leading-7 text-gray-900">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href="https://wa.me/5582996417913?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20quero%20agendar%20um%20hor%C3%A1rio%20para%20meu%20pet."
             target="_blank"
             rel="noopener noreferrer"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </div>
  );
}