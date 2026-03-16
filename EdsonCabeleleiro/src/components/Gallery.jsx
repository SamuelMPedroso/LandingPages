import { useState } from 'react'

export default function Gallery() {
  const [filter, setFilter] = useState('all')

  const images = [
    { id: 1, category: 'corte', url: 'https://images.unsplash.com/photo-1599351431202-924373718618?w=400&h=400&fit=crop', alt: 'Corte Clássico' },
    { id: 2, category: 'corte', url: 'https://images.unsplash.com/photo-1563759033-f403bf289096?w=400&h=400&fit=crop', alt: 'Corte Moderno' },
    { id: 3, category: 'barba', url: 'https://images.unsplash.com/photo-1620607492461-722342e926a9?w=400&h=400&fit=crop', alt: 'Barba Alinhada' },
    { id: 4, category: 'barba', url: 'https://images.unsplash.com/photo-1599222294663-838f26b8cc96?w=400&h=400&fit=crop', alt: 'Design Barba' },
    { id: 5, category: 'coloracao', url: 'https://images.unsplash.com/photo-1580618672591-eb180fbad585?w=400&h=400&fit=crop', alt: 'Coloração' },
    { id: 6, category: 'coloracao', url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop', alt: 'Coloração Premium' }
  ]

  const filtered = filter === 'all' ? images : images.filter(img => img.category === filter)

  return (
    <section id="galeria" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa Galeria</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Confira algunos dos nossos melhores trabalhos
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'all' 
                ? 'bg-accent text-primary' 
                : 'border-2 border-accent text-accent hover:bg-accent hover:text-primary'
            }`}
          >
            Todos
          </button>
          <button 
            onClick={() => setFilter('corte')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'corte' 
                ? 'bg-accent text-primary' 
                : 'border-2 border-accent text-accent hover:bg-accent hover:text-primary'
            }`}
          >
            Cortes
          </button>
          <button 
            onClick={() => setFilter('barba')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'barba' 
                ? 'bg-accent text-primary' 
                : 'border-2 border-accent text-accent hover:bg-accent hover:text-primary'
            }`}
          >
            Barbas
          </button>
          <button 
            onClick={() => setFilter('coloracao')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'coloracao' 
                ? 'bg-accent text-primary' 
                : 'border-2 border-accent text-accent hover:bg-accent hover:text-primary'
            }`}
          >
            Coloração
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((image) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64"
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
