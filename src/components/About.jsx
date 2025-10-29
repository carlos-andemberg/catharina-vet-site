import { dogVet } from '../images';

export default function About() {
  return (
  <div id="about" className="bg-background-purple py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Conheça a Dra. Catharina Vital
              <span className="block mt-2 text-xl sm:text-2xl text-accent font-medium">Especialista em Atendimento Veterinário Domiciliar</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Como médica veterinária apaixonada pela saúde e bem-estar animal, compreendo profundamente que seu pet não é apenas um animal
              de estimação – ele é um membro querido da sua família. É por isso que desenvolvi um modelo de atendimento que prioriza o
              conforto e tranquilidade do seu pet.
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              Com anos de experiência em medicina veterinária, trago para sua casa um serviço personalizado que elimina o estresse do transporte
              e o desconforto das salas de espera. Meu compromisso é oferecer cuidados veterinários de excelência, mantendo seu pet
              relaxado e seguro em seu ambiente familiar.
            </p>
            <div className="mt-8 flex gap-x-6">
              <a
                href="https://wa.me/5582996417913?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20quero%20agendar%20um%20hor%C3%A1rio%20para%20meu%20pet."
                 target="_blank"
                 rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-accent/80"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.486 10-10c0-5.514-4.486-10-10-10zm4.293 14.707l-1.414-1.414L11.586 12l3.293-3.293-1.414-1.414L10.172 12l4.121 4.707z"/>
                </svg>
                Agende uma consulta
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:flex-1 lg:flex lg:justify-end">
            <img
              src={dogVet}
              alt="Dra. Catharina Vital - Médica Veterinária especialista em atendimento domiciliar em Maceió"
              loading="lazy"
              className="rounded-2xl shadow-xl ring-1 ring-gray-400/10 w-full max-w-lg mx-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}