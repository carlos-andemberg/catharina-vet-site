import { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { caes } from '../images';

const navigation = [
  { name: 'Início', href: 'home' },
  { name: 'Sobre', href: 'about' },
  { name: 'Serviços', href: 'services' },
  { name: 'Benefícios', href: 'benefits' },
  { name: 'Dúvidas', href: 'faq' },
  { name: 'Contato', href: 'contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 items-center">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img src={caes} alt="Ícone de cães" className="h-8 w-8 object-contain rounded-full" />
            <span className="text-xl font-bold text-primary">Catharina Vital</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              smooth={true}
              duration={500}
              className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://wa.me/5582996417913?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20quero%20agendar%20um%20hor%C3%A1rio%20para%20meu%20pet."
             target="_blank"
             rel="noopener noreferrer"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Agendar Consulta
          </a>
        </div>
      </nav>
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <img src={caes} alt="Ícone de cães" className="h-8 w-8 object-contain rounded-full" />
              <span className="text-xl font-bold text-primary">Catharina Vital</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://wa.me/5582996417913?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20quero%20agendar%20um%20hor%C3%A1rio%20para%20meu%20pet."
                   target="_blank"
                   rel="noopener noreferrer"
                  className="w-full rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}