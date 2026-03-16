# 🚀 GUIA RÁPIDO DE REFERÊNCIA

Guia rápido para entender e manter o portfólio refatorado.

---

## 📋 Navegação Rápida por Arquivo

### `index.html`
```
├─ Header (navbar stick)
├─ Hero (apresentação + CTAs)
├─ About (sobre + cards)
├─ Skills (categorias + barras animadas)
├─ Projects (grid 3 colunas)
├─ Contact (contatos + sociais)
└─ Footer
```

### `styles/main.css`
```
├─ Variáveis CSS (cores, transições)
├─ Reset & Global
├─ Tipografia
├─ Componentes (botões, cards)
├─ Seções (hero, about, skills, etc)
├─ Animações (@keyframes)
├─ Responsividade (@media)
└─ Acessibilidade
```

### `scripts/main.js`
```
├─ CONFIG (configurações globais)
├─ SmoothScroll (scroll suave)
├─ AnimationObserver (animações ao viewport)
├─ SkillAnimation (barras de skills)
├─ Navigation (navbar effects)
└─ Inicialização + Utilidades
```

---

## 🎨 Cores do Projeto

```css
:root {
    /* Primárias */
    --primary-color: #6366f1;       /* Indigo - botões */
    --primary-light: #818cf8;       /* Indigo claro */
    --primary-dark: #4f46e5;        /* Indigo escuro */
    
    /* Secundárias */
    --accent-color: #06b6d4;        /* Cyan - destaques */
    
    /* Background */
    --bg-primary: #0f172a;          /* Fundo principal */
    --bg-secondary: #1e293b;        /* Fundo cards */
    --bg-tertiary: #334155;         /* Fundo terciário */
    
    /* Texto */
    --text-primary: #f1f5f9;        /* Texto principal */
    --text-secondary: #cbd5e1;      /* Texto secundário */
    --text-muted: #94a3b8;          /* Texto apagado */
}
```

**Como mudar tema:**
1. Edite valores em `:root` (linhas 10-30)
2. Todas as cores se atualizam automaticamente
3. Exemplo:
   ```css
   --primary-color: #2563eb;  /* Mude de indigo para azul */
   ```

---

## 🏗️ Estrutura CSS por Seção

### Navbar
```css
.navbar-wrapper         /* Container sticky */
.navbar                 /* Navbar propriamente */
.navbar-brand           /* Logo */
.nav-link              /* Links com efeito hover */
.nav-link::after       /* Sublinha animada */
```

### Hero
```css
.hero-section          /* Container full height */
.hero-content          /* Conteúdo esquerdo */
.hero-title            /* H1 */
.hero-subtitle         /* Subtítulo */
.cta-buttons           /* Container de botões */
.hero-image            /* Imagem direita */
.profile-image         /* Foto com border */
```

### Skills
```css
.skills-grid           /* Grid responsivo */
.skill-category        /* Card de categoria */
.skill-item            /* Item de skill */
.skill-badge           /* Nome da tecnologia */
.skill-bar             /* Container da barra */
.skill-progress        /* Barra animada */
```

### Projects
```css
.projects-grid         /* Grid 3 colunas */
.project-card          /* Card individual */
.project-image         /* Imagem com overlay */
.project-overlay       /* Overlay ao hover */
.project-link          /* Link GitHub */
.project-content       /* Conteúdo card */
.project-tech          /* Tags de tech */
```

---

## 💻 Estrutura JavaScript por Módulo

### SmoothScroll
```javascript
SmoothScroll.init()
├─ handleClick(event)     /* Trata clique em link */
└─ closeNavbarOnMobile()  /* Fecha navbar mobile */
```

### Navigation  
```javascript
Navigation.init()
└─ handleNavbarScroll()   /* Efetoy ao scroll */
```

### SkillAnimation
```javascript
SkillAnimation.init()
└─ animateProgressBar()   /* Anima barra de skill */
```

### AnimationObserver
```javascript
AnimationObserver.init()
├─ animateElement()       /* Animação genérica */
├─ fadeIn()              /* Desvanece elemento */
├─ slideUp()             /* Desliza para cima */
└─ slideLeft()           /* Desliza para esquerda */
```

---

## 📱 Breakpoints Responsivos

```css
/* Mobile Small */
320px - 576px      /* Phones */

/* Mobile Large / Tablet Small */
576px - 768px      /* Larger phones */

/* Tablet */
768px - 1024px     /* Tablets */

/* Desktop */
1024px - 1920px    /* Desktops */

/* Large Desktop */
1920px+            /* Wide screens */
```

**Como testar:**
```
DevTools (F12) → Responsive Design Mode (Ctrl+Shift+M)
```

---

## 🔧 Como Customizar

### Mudar Cores
```css
/* styles/main.css - linhas 10-30 */
:root {
    --primary-color: #SUA_COR;
}
```

### Mudar Fonte
```css
/* styles/main.css - linha ~80 */
body {
    font-family: 'Sua Fonte', sans-serif;
}
```

### Adicionar Skill
```html
<!-- index.html - Skills Section -->
<div class="skill-item">
    <span class="skill-badge">Sua Skill</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

### Adicionar Projeto
```html
<!-- Copie um project-card e mude conteúdo -->
<div class="project-card">
    <div class="project-image">
        <img src="./Imagens/seu-projeto.png">
        <div class="project-overlay">
            <a href="seu-github-link" class="project-link">
                <i class="fab fa-github"></i> Ver no GitHub
            </a>
        </div>
    </div>
    <div class="project-content">
        <h3>Seu Projeto</h3>
        <p class="project-description">Descrição...</p>
        <div class="project-tech">
            <span class="tech-tag">Tech1</span>
            <span class="tech-tag">Tech2</span>
        </div>
    </div>
</div>
```

### Mudar Links de Contato
```html
<!-- Edite os href em Contact Section -->
<a href="https://www.linkedin.com/in/seu-perfil/">LinkedIn</a>
<a href="https://wa.me/seu-numero/">WhatsApp</a>
<a href="mailto:seu@email.com">Email</a>
```

---

## 🐛 Debug Comum

### Navbar não fica sticky
```css
/* Verifique em .navbar-wrapper */
position: sticky;
top: 0;
z-index: 1000;
```

### Animações não funcionam
```javascript
// Abrira console (F12) e procure por:
// ✅ Portfolio Samuel iniciado com sucesso!
// Se não aparecer, refresh a página
```

### Grid de projetos com 1 coluna em desktop
```css
/* Verifique media queries em projects.css */
@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr; /* OK */
    }
}

/* Acima de 768px deveria ser 3 colunas */
```

### Imagem de perfil cortada
```css
/* Verifique .profile-image */
width: 100%;
height: auto;  /* Mantém proporção */
border-radius: 16px;
```

---

## ⚡ Performance Tips

### Para velocidade máxima:
```
1. Otimize imagens (tinypng.com)
2. Use lazy loading (já implementado)
3. Minify CSS/JS para produção
4. Cache assets no browser
```

### Testar performance:
```
Chrome DevTools → Lighthouse
Esperado: Performance ≥ 90
```

---

## 🎯 Checklist Antes de Deploy

- [ ] Atualizou email/WhatsApp/LinkedIn correto?
- [ ] Imagens estão otimizadas?
- [ ] Testou em mobile (DevTools)?
- [ ] Testou links externos?
- [ ] Console sem erros? (F12)
- [ ] Acessibilidade OK? (Lighthouse)
- [ ] Performance OK? (Lighthouse ≥90)

---

## 📚 Referências Rápidas

### Font Awesome Icons
```html
<i class="fab fa-linkedin"></i>      <!-- Logo grande -->
<i class="fab fa-github"></i>        <!-- Logo grande -->
<i class="fas fa-code"></i>          <!-- Ícone solid -->
<i class="fas fa-database"></i>      <!-- Banco de dados -->
```

[Ver mais ícones](https://fontawesome.com/icons)

### Bootstrap Classes Usadas
```html
container-lg         <!-- Container responsivo -->
row, col-md-6       <!-- Grid 12 colunas -->
btn, btn-primary    <!-- Botões -->
img-fluid           <!-- Imagens responsivas -->
```

### CSS Grid Responsivo
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
/* Automaticamente 3 colunas → 1 coluna em mobile */
```

---

## 🚀 Próximas Melhorias

### Fáceis (< 1h)
- [ ] Adicionar blog section
- [ ] Mudar paleta de cores
- [ ] Adicionar mais projetos

### Médias (1-4h)
- [ ] Blog com artigos
- [ ] Filtro de projetos
- [ ] Formulário de contato funcional

### Avançadas (4h+)
- [ ] PWA (offline)
- [ ] Dark mode toggle
- [ ] Animações 3D
- [ ] Analytics

---

## 💬 Dúvidas Frequentes

**P: Como mudar a ordem das seções?**
A: Mova `<section>` no HTML, a ordem é respeitada.

**P: Posso remover a seção de Skills?**
A: Sim, remova `<section id="skills">` e atualize nav.

**P: Como adicionar uma nova página?**
A: Crie novo arquivo HTML, mantenha mesma estrutura.

**P: Posso usar em produção agora?**
A: Sim! Está pronto para deploy.

---

**Dúvidas? Consultar:**
- CLEAN_CODE_GUIDE.md (como o código foi feito)
- UX_UI_IMPROVEMENTS.md (por que mudanças visuais)
- QUALITY_CHECKLIST.md (lista de qualidade)

**Última atualização:** 2024
