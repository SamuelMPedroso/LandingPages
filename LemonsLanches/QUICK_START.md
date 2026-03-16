# 🚀 GUIA RÁPIDO DE PERSONALIZAÇÃO

## ⚡ Antes de Lançar - Checklist de 10 Minutos

### 1. Atualize o número de WhatsApp
**Localizações:**
- `src/components/Header.tsx` (linha ~50 e ~80)
- `src/components/Hero.tsx` (linha ~17)
- `src/components/Menu.tsx` (linha ~97)
- `src/components/Contact.tsx` (linha ~40 e ~160)

Procure por: `https://wa.me/5585999999999`
Substitua por: `https://wa.me/55SEUTELEFONE` (com código do país)

### 2. Atualize informações de contato
**Arquivo:** `src/components/Contact.tsx`

```typescript
// Linhas ~20-30 - Seu Endereço
<p className="text-gray-700">Rua das Flores, 123</p>
<p className="text-gray-700">Bairro Central - Fortaleza, CE</p>

// Linhas ~35-40 - Seu Gmail/Telefone
<a href="tel:+558599999999" className="text-secondary font-bold hover:underline">
  Telefone: (85) 99999-9999
</a>
```

### 3. Customize seu cardápio
**Arquivo:** `src/components/Menu.tsx` (linhas ~10-60)

```typescript
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Seu Produto',        // ← Mude isso
    description: 'Descrição',   // ← Mude isso
    price: 19.90,               // ← Mude isso
    emoji: '🍔',                // ← Mude isso
    category: 'burger',         // burger|hot-dog|combo|bebida|sobremesa
  },
  // Adicione mais produtos...
];
```

### 4. Customize cores (Opcional)
**Arquivo:** `tailwind.config.js` (linhas ~8-16)

```javascript
colors: {
  primary: '#FFD700',      // Amarelo primário
  secondary: '#FF6B35',    // Laranja secundária
  accent: '#FFA500',       // Laranja claro
}

// Sugestões de cores para lanches:
// 🔴 Vermelho: #E63946
// 🟢 Verde: #06A77D
// 🟣 Roxo: #9D4EDD
// 🔵 Azul: #3A86FF
```

### 5. Atualize links de redes sociais
**Arquivo:** `src/components/Footer.tsx` (linhas ~50-70)

```typescript
<a href="https://instagram.com/seuinstagram" target="_blank">📷</a>
<a href="https://facebook.com/seufacebook" target="_blank">👍</a>
```

---

## 📝 CHECKLIST COMPLETO

- [ ] WhatsApp atualizado em Header.tsx
- [ ] WhatsApp atualizado em Hero.tsx
- [ ] WhatsApp atualizado em Menu.tsx
- [ ] WhatsApp atualizado em Contact.tsx
- [ ] Endereço e horários em Contact.tsx
- [ ] Telefone em Contact.tsx
- [ ] Produtos em Menu.tsx
- [ ] Redes sociais no Footer.tsx
- [ ] Testado em http://localhost:5173
- [ ] Pronto para deploy! 🚀

---

## 🧪 Como Testar Localmente

```bash
# 1. Abra o projeto
cd c:\ProjetosPessoal\LandingPaging\Alessandro

# 2. Instale dependências (primeira vez apenas)
npm install

# 3. Lance o servidor
npm run dev

# 4. Abra no navegador
http://localhost:5173

# 5. Teste os botões e cliques
# - Clique em cada botão de WhatsApp
# - Teste o menu mobile (em um celular ou F12)
# - Verifique os links das redes sociais
```

---

## 🌐 Deploy em 3 Minutos (Vercel)

```bash
# 1. Instale o CLI do Vercel
npm install -g vercel

# 2. No diretório do projeto
vercel

# 3. Siga as instruções interativas
# A aplicação estará online em poucos segundos!
```

---

## 💾 Estrutura de Arquivos Importantes

```
src/
├── components/
│   ├── Header.tsx       ← Atualize WhatsApp aqui
│   ├── Hero.tsx         ← Atualize WhatsApp aqui
│   ├── Menu.tsx         ← Seus produtos aqui
│   ├── About.tsx        ← Sobre seu negócio
│   ├── Contact.tsx      ← Informações de contato
│   └── Footer.tsx       ← Redes sociais
├── App.tsx              ← Não mexa!
└── index.css            ← Estilos globais
```

---

## 🎨 Emojis Recomendados para Categorias

```
Burgers: 🍔 🥇 🌟
Hot-Dogs: 🌭 🔥 ⚡
Combos: 🎁 🛍️ 🎉
Bebidas: 🥤 🧃 🧋
Sobremesas: 🍰 🎂 🍮 🧁
```

---

## 🆘 Problemas Comuns

**P: O WhatsApp não abre**
- R: Verifique se o número está com código de país (ex: +5585)

**P: Estilos estão feios/estranhos**
- R: Rode `npm install` novamente

**P: Coloquei um emoji errado**
- R: Copie um emoji de: https://emojipedia.org/

**P: Quer adicionar mais de um produto?**
- R: Duplique um item no array `menuItems` e customize

---

## ✅ Pronto!

Após seguir este guia, sua landing page está:
- ✅ Personalizada
- ✅ Testada
- ✅ Pronta para o mundo
- ✅ Alinhada com seu negócio

**Próximo passo:** Deploy! 🚀

---

**Dúvidas?** Entre em contato via WhatsApp! 📱
