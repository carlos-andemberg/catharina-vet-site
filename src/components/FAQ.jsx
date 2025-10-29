const faqs = [
  {
    question: 'Quais regiões atendo?',
    answer: 'Atendo em toda a cidade de Maceió, Marechal Deodoro, Barra de São Miguel e Rio Largo.',
  },
  {
    question: 'Quanto tempo dura um atendimento?',
    answer: 'Meu objetivo é oferecer um atendimento diferenciado para o seu pet, o tempo necessário para atendimento varia entre 50 a 60 minutos.',
  },
  {
    question: 'Quais as formas de pagamento?',
    answer: 'O pagamento é feito no ato do atendimento, podendo ser realizado via:\n• Pix\n• Cartão\n• Dinheiro',
  },
  {
    question: 'Quais serviços podem ser feitos na sua casa?',
    answer: '• Consultas\n• Vacinas\n• Exames laboratoriais e imagem\n• Limpeza de ferimento\n• Retirada de pontos\n• E outros',
  },
  {
    question: 'Atendimento de urgência e emergência?',
    answer: 'O atendimento domiciliar é focado em consultas, exames, vacinas e casos não emergenciais. Para urgências e emergências, buscar uma clínica ou hospital veterinário.',
  },
  {
    question: 'Quais pets atendemos?',
    answer: 'O atendimento é especializado em cães e gatos, garantindo um serviço personalizado e de qualidade para essas espécies.',
  },
];

export default function FAQ() {
  return (
    <div id="faq" className="bg-background-green py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Perguntas Frequentes
          </h2>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="flex flex-col bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
              <dt>
                <p className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</p>
              </dt>
              <dd className="mt-4 flex flex-auto text-base leading-7 text-gray-900 whitespace-pre-line">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}