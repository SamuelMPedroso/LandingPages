# 🍋 Lemons Lanches - Landing Page

Uma landing page moderna e interativa para um lancheiro do bairro, desenvolvida com **React**, **TypeScript**, **Vite** e **Tailwind CSS**.

## ✨ Funcionalidades

- 🎨 **Design Colorido e Moderno** - Interface descontraída e atrativa
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em celulares, tablets e desktops
- 🍔 **Cardápio Digital** - Menu interativo com categorias e filtros
- 💬 **Integração WhatsApp** - Pedidos diretos via WhatsApp
- 🗺️ **Localização e Horários** - Informações de contato e funcionamento
- ⚡ **Performance Otimizada** - Construída com Vite para máxima velocidade
- 🎯 **Conversão Otimizada** - Design focado em gerar pedidos

## 🚀 Como Começar

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

1. **Clone ou abra o projeto**
```bash
cd Alessandro
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

A aplicação abrirá automaticamente em `http://localhost:5173`

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com hot reload
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Verifica erros de code style

## 🎯 Personalizações Importantes

Antes de publicar, você deve atualizar:

### 1. **Número do WhatsApp** (Menu.tsx, Header.tsx, Contact.tsx)
Procure por `5585999999999` e substitua pelo seu número:
```javascript
href="https://wa.me/5585SEUTELEFONE"
```

### 2. **Informações de Contato** (Contact.tsx)
- Endereço
- Horários de funcionamento
- Telefone

### 3. **Menu de Produtos** (Menu.tsx)
- Adicione seus produtos
- Ajuste preços
- Mude descrições e emojis

### 4. **Redes Sociais** (Footer.tsx)
- Instagram
- Facebook
- Outras plataformas

## 🛠️ Tecnologias Utilizadas

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool rápido
- **Tailwind CSS** - Styling utility-first
- **Lucide React** - Ícones modernos
- **React Icons** - Ícones adicionais

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx       - Navegação e menu mobile
│   ├── Hero.tsx         - Seção inicial
│   ├── Menu.tsx         - Cardápio digital
│   ├── About.tsx        - Sobre o estabelecimento
│   ├── Contact.tsx      - Contato e localização
│   └── Footer.tsx       - Rodapé
├── App.tsx              - Componente principal
├── main.tsx             - Entry point
└── index.css            - Estilos globais
```

## 🎨 Cores da Marca

- **Primária**: #FFD700 (Amarelo)
- **Secundária**: #FF6B35 (Laranja)
- **Acento**: #FFA500 (Laranja claro)
- **Escuro**: #1a1a1a (Preto)

## 📱 Responsividade

A landing page foi desenvolvida com mobile-first approach e funciona perfeitamente em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🚀 Deployment

### Opções recomendadas:

1. **Vercel** (Recomendado)
```bash
npm install -g vercel
vercel
```

2. **Netlify**
- Conecte seu repositório Git
- Configure build command: `npm run build`
- Public directory: `dist`

3. **GitHub Pages**
```bash
npm run build
# Faça upload da pasta 'dist' para GitHub Pages
```

## 🐛 Troubleshooting

### Erro: "npm não encontrado"
Instale Node.js em https://nodejs.org/

### Porta 5173 já em uso
```bash
npm run dev -- --port 3000
```

### Problemas de WhatsApp
Certifique-se de usar o número no formato internacional: `55XXXXXXXXXXX`

## 📝 Licença

Este projeto é open-source e pode ser usado livremente.

## 👨‍💻 Desenvolvido por

Desenvolvido por um desenvolvedor senior React para trazer os melhores lanches do bairro para o mundo digital! 🍋

---

**Dúvidas?** Entre em contato via WhatsApp para suporte! 💬
