import { dogs } from '../images';

const benefits = [
  'Menos estresse para o seu pet',
  'Atendimento humanizado',
  'Sem tempo de espera',
  'Mais praticidade para o tutor',
  'Redução do risco de contaminação',
  'Ideal para quem tem rotina corrida',
];

export default function Benefits() {
  return (
  <div id="benefits" className="bg-background-purple py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Benefícios do Atendimento Domiciliar
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Conheça as vantagens de ter atendimento veterinário no conforto do seu lar
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 items-center">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="rounded-md bg-secondary/10 p-2 ring-1 ring-secondary/20">
                    <svg
                      className="h-6 w-6 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <dd className="ml-4 flex flex-auto flex-col text-base leading-7 text-white">
                    {benefit}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="lg:flex lg:justify-end">
              <img
                src={dogs}
                alt="Cães felizes e saudáveis recebendo atendimento veterinário em casa"
                className="rounded-2xl shadow-xl ring-1 ring-gray-400/10 w-full max-w-lg mx-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}