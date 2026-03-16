# Barbearia Edson - Landing Page

Uma landing page moderna e responsiva para Barbearia Edson, desenvolvida com React, Vite e Tailwind CSS.

## 🚀 Features

✅ Design responsivo e moderno
✅ Seções: Home, Serviços, Galeria, Depoimentos, Agendamento, Contato
✅ Formulário de agendamento interativo
✅ Galeria de trabalhos com filtro
✅ Menu navegável com scroll suave
✅ Otimizado para SEO
✅ Performance excelente com Vite

## 📋 Seções

- **Header**: Navegação fixa com logo
- **Hero**: Apresentação da barbearia com CTA
- **Serviços**: 6 serviços principais com preços
- **Galeria**: Portfólio de trabalhos (cortes, barbas, coloração)
- **Depoimentos**: Reviews de clientes satisfeitos
- **Agendamento**: Formulário completo para marcar horário
- **Contato**: Informações, mapa e redes sociais
- **Footer**: Links e newsletter

## 🛠️ Instalação

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Setup

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Acessar em http://localhost:5173

# 4. Build para produção
npm run build

# 5. Preview de produção
npm run preview
```

## 📁 Estrutura de Pastas

```
src/
├── components/
│   ├── Header.jsx       # Navegação
│   ├── Hero.jsx         # Seção inicial
│   ├── Services.jsx     # Serviços oferecidos
│   ├── Gallery.jsx      # Galeria com filtros
│   ├── Testimonials.jsx # Depoimentos
│   ├── Booking.jsx      # Agendamento
│   ├── Contact.jsx      # Contato
│   └── Footer.jsx       # Rodapé
├── App.jsx              # Componente principal
├── main.jsx             # Entry point
└── index.css            # Styles globais
```

## 🎨 Customização

### Cores
Edite em `tailwind.config.js`:
```javascript
colors: {
  primary: '#1F2937',  // Cinza escuro
  accent: '#D4A574',   // Dourado
}
```

### Informações do Negócio
Atualize em componentes:
- **Header**: Logo e links
- **Services**: Preços e descrições
- **Contact**: Endereço, telefone, horários
- **Booking**: Horários disponíveis

### Imagens
Substitua URLs do Unsplash por suas próprias imagens:
```jsx
<img src="SEU_LINK_DE_IMAGEM" alt="descrição" />
```

## 📱 Responsividade

O design é totalmente responsivo:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌐 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Fazer upload da pasta 'dist'
```

### GitHub Pages
Edite `vite.config.js`:
```javascript
export default defineConfig({
  base: '/seu-repositorio/',
  ...
})
```

## 💡 Dicas

- Adicione suas imagens reais para melhor conversão
- Integre com serviço de agendamento (Calendly, n8n, etc)
- Adicione analytics (Google Analytics)
- Configure domínio personalizado
- Implemente sistema de notificações de agendamento

## 📞 Contato & Suporte

Para customizações adicionais, entre em contato com seu desenvolvedor.

---

Desenvolvido com ❤️ para Barbearia Edson
