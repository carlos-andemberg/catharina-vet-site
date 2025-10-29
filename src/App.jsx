import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Benefits from './components/Benefits'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="bg-white">
        <Hero />
        <About />
        <Services />
        <Benefits />
        <FAQ />
        <Contact />
      </main>
      <ChatWidget />
      <footer className="bg-gray-900 text-center py-4">
        <div className="space-y-2">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Dra. Catharina Vital. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-400">
            Desenvolvido por{' '}
            <a 
              href="https://carlosandemberg.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-primary/80 no-underline"
            >
              Carlos Andemberg
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
