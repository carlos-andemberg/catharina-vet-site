import { useState } from 'react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [species, setSpecies] = useState('Cão')
  const [breed, setBreed] = useState('')
  const [size, setSize] = useState('Médio')
  const [name, setName] = useState('')
  const [service, setService] = useState('Consultas')

  const phone = '5582996417913'

  const breedSuggestions = {
    'Cão': {
      'Pequeno': 'Ex: SRD, Yorkshire, Poodle, Shih Tzu, Pinscher...',
      'Médio': 'Ex: SRD, Cocker, Bulldog, Border Collie...',
      'Grande': 'Ex: SRD, Pastor Alemão, Labrador, Golden Retriever...',
    },
    'Gato': {
      'Pequeno': 'Ex: SRD, Siamês, Munchkin...',
      'Médio': 'Ex: SRD, Persa, British Shorthair...',
      'Grande': 'Ex: SRD, Maine Coon, Ragdoll...',
    }
  }

  function sendMessage() {
    const parts = [
      'Olá, vim pelo site. Aqui estão os dados do pet:',
      `Espécie: ${species}`,
      `Raça: ${breed || 'Não informada'}`,
      `Porte: ${size}`,
      `Nome: ${name || 'Não informado'}`,
      `Serviço desejado: ${service}`,
    ]

    const text = parts.join('\n')
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`

    window.open(url, '_blank', 'noopener,noreferrer')
    setOpen(false)
  }

  return (
    <div>
      {/* Floating button */}
      <div className="fixed right-6 bottom-6 z-50">
        <button
          aria-label={open ? 'Fechar chat' : 'Abrir chat'}
          onClick={() => setOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          {/* chat icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>

      {/* Panel */}
      {open && (
        <div
          className="fixed right-6 bottom-20 z-50 rounded-lg bg-white p-5 shadow-xl ring-1 ring-gray-200"
          style={{ width: 'min(24rem, calc(100vw - 48px))', maxHeight: 'none' }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">Agendar Consulta</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Fechar"
            >
              ✕
            </button>
          </div>

          <p className="mt-2 text-xs text-gray-600">Conte-nos sobre seu pet para agilizar seu atendimento! Em poucos cliques você já estará conversando com a Dra. Catharina.</p>

          <div className="mt-3 space-y-3 text-sm">
            <div>
              <label className="block text-xs text-gray-700">Qual o tipo do seu pet?</label>
              <div className="mt-1 flex gap-2">
                <button
                  type="button"
                  onClick={() => setSpecies('Cão')}
                  className={`rounded-md px-2 py-1 ${species === 'Cão' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'}`}
                >
                  Cão
                </button>
                <button
                  type="button"
                  onClick={() => setSpecies('Gato')}
                  className={`rounded-md px-2 py-1 ${species === 'Gato' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'}`}
                >
                  Gato
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-700">Raça</label>
              <input
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                placeholder={breedSuggestions[species][size]}
                className="mt-1 w-full rounded-md border-gray-200 text-sm shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-700">Porte</label>
              <div className="mt-1 flex gap-2">
                <button
                  type="button"
                  onClick={() => setSize('Pequeno')}
                  className={`flex-1 rounded-md px-2 py-1 text-sm ${size === 'Pequeno' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'}`}
                >
                  Pequeno
                </button>
                <button
                  type="button"
                  onClick={() => setSize('Médio')}
                  className={`flex-1 rounded-md px-2 py-1 text-sm ${size === 'Médio' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'}`}
                >
                  Médio
                </button>
                <button
                  type="button"
                  onClick={() => setSize('Grande')}
                  className={`flex-1 rounded-md px-2 py-1 text-sm ${size === 'Grande' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'}`}
                >
                  Grande
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-700">Nome do pet</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={species === 'Gato' ? "Ex: Garry" : "Ex: Scooby"}
                className="mt-1 w-full rounded-md border-gray-200 text-sm shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-700">Qual serviço você deseja?</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {['Consultas', 'Vacinas', 'Exames laboratoriais', 'Atestados de viagem', 'Procedimentos'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setService(opt)}
                    className={`rounded-md px-2 py-1 text-sm ${service === opt ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-3">
              <button
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-1 text-sm text-gray-700 bg-gray-100"
              >
                Cancelar
              </button>
              <button
                onClick={sendMessage}
                className="rounded-md bg-secondary px-3 py-1 text-sm font-semibold text-white"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
