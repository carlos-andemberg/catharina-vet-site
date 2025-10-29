import { fundoDog, vetDogs } from '../images';

export default function Hero() {
    return (
    <div id="home" className="relative bg-background-green pt-16">
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                        <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Veterinária a Domicílio em Maceió
                            <span className="block mt-2 text-2xl sm:text-4xl text-primary">Cuidado Especializado no Conforto do Seu Lar</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-900">
                            Seu pet merece o melhor atendimento, sem o estresse do transporte e da clínica.
                            Conte com atendimento veterinário personalizado e humanizado diretamente no seu endereço em Maceió e região.
                        </p>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center text-gray-900">
                                <svg className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Consultas e vacinas sem estresse
                            </li>
                            <li className="flex items-center text-gray-900">
                                <svg className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Atendimento em horário flexível
                            </li>
                            <li className="flex items-center text-gray-900">
                                <svg className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Cuidado personalizado para cães e gatos
                            </li>
                        </ul>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="https://wa.me/5582996417913?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20quero%20agendar%20um%20hor%C3%A1rio%20para%20meu%20pet."
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Agendar Atendimento Agora →
                            </a>
                            <a href="#services" className="text-sm font-semibold leading-6 text-primary hover:text-primary/80">
                                Ver serviços <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                        <div className="relative mx-auto w-full max-w-[22.875rem] sm:max-w-[30rem] overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-400/10">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-70"
                                style={{ backgroundImage: `url(${fundoDog})` }}
                            />
                            <img
                                src={vetDogs}
                                alt="Dra. Catharina Vital realizando atendimento veterinário domiciliar em Maceió"
                                loading="eager"
                                className="relative w-full max-w-full object-cover"
                            />
                        </div>
                    </div>
            </div>
        </div>
    );
}