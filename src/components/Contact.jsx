import { fundo, vet } from '../images';

export default function Contact() {
    return (
        <div id="contact" className="relative min-h-screen bg-background-purple py-24 sm:py-32">
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 items-center">
                    <div>
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Entre em Contato
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-white">
                                Agende uma consulta e proporcione o melhor cuidado para seu pet
                            </p>
                        </div>
                        <div className="mt-16 space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold leading-7 text-white">WhatsApp</h3>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://wa.me/5582996417913"
                                    className="text-lg text-white hover:text-accent/80"
                                >
                                    (82) 99641-7913
                                </a>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold leading-7 text-white">Instagram</h3>
                                <a
                                    href="https://instagram.com/catharinavitalvet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg text-white hover:text-accent/80"
                                >
                                    @catharinavitalvet
                                </a>
                            </div>
                            <div className="pt-8">
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
                    <div className="mt-10 lg:mt-0 lg:flex lg:justify-end">
                        <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-400/10 w-full max-w-lg mx-auto">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-70"
                                style={{ backgroundImage: `url(${fundo})` }}
                            />
                            <img
                                src={vet}
                                alt="Dra. Catharina Vital - Veterinária especialista em atendimento domiciliar"
                                className="relative w-full mx-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}