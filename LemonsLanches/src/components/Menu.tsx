import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  emoji: string;
  category: 'burger' | 'hot-dog' | 'combo' | 'bebida' | 'sobremesa';
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'X-Burger Premium',
    description: 'Carne, queijo, alface, tomate e molho especial',
    price: 18.90,
    emoji: '🍔',
    category: 'burger',
  },
  {
    id: 2,
    name: 'X-Bacon Gourmet',
    description: 'Carne, bacon crocante, queijo derretido e maionese caseira',
    price: 22.90,
    emoji: '🥓',
    category: 'burger',
  },
  {
    id: 3,
    name: 'X-Duplo Completo',
    description: 'Duas carnes, duplo de queijo, bacon e tudo mais',
    price: 25.90,
    emoji: '🍔',
    category: 'burger',
  },
  {
    id: 4,
    name: 'Hot-Dog Clássico',
    description: 'Salsicha, molho shoyu, maionese e cebola',
    price: 12.90,
    emoji: '🌭',
    category: 'hot-dog',
  },
  {
    id: 5,
    name: 'Hot-Dog Bacon',
    description: 'Salsicha, bacon, molho BBQ e cheddar',
    price: 15.90,
    emoji: '🌭',
    category: 'hot-dog',
  },
  {
    id: 6,
    name: 'Combo Família',
    description: '2x Burgers + 4x Hot-dogs + 2x Bebidas',
    price: 89.90,
    emoji: '🛍️',
    category: 'combo',
  },
  {
    id: 7,
    name: 'Refrigerante 2L',
    description: 'Vários sabores disponíveis',
    price: 8.90,
    emoji: '🥤',
    category: 'bebida',
  },
  {
    id: 8,
    name: 'Milkshake Especial',
    description: 'Chocolate, morango ou baunilha',
    price: 12.00,
    emoji: '🥛',
    category: 'bebida',
  },
  {
    id: 9,
    name: 'Pudim Caseiro',
    description: 'Feito em casa, derrete na boca',
    price: 6.90,
    emoji: '🍮',
    category: 'sobremesa',
  },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'burger', label: 'Burgers' },
    { id: 'hot-dog', label: 'Hot-Dogs' },
    { id: 'combo', label: 'Combos' },
    { id: 'bebida', label: 'Bebidas' },
    { id: 'sobremesa', label: 'Sobremesas' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleWhatsAppOrder = (item: MenuItem) => {
    const message = `Oi! Gostaria de pedir: ${item.name} (${item.emoji}) - R$ ${item.price.toFixed(2)}`;
    window.open(`https://wa.me/5585999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-dark mb-4">
            🍽️ Nosso <span className="text-secondary">Cardápio</span>
          </h2>
          <p className="text-xl text-gray-600">Escolha seus lanches favoritos!</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === category.id
                  ? 'bg-secondary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 p-6"
            >
              <div className="text-5xl mb-3">{item.emoji}</div>
              <h3 className="text-2xl font-bold text-dark mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-secondary">
                  R$ {item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => handleWhatsAppOrder(item)}
                  className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition"
                  title="Pedir no WhatsApp"
                >
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
