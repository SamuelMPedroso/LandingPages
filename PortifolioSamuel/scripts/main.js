/**
 * Portfolio Samuel - Funcionalidades JavaScript
 * =============================================
 * Clean Code: Modular, reutilizável e bem documentado
 * 
 * Módulos:
 * - SmoothScroll: Scroll suave e animado
 * - AnimationObserver: Animações ao entrar na viewport
 * - SkillAnimation: Animação de barras de Skills
 * - Navigation: Funcionalidades da navegação
 */

// ========== CONFIGURAÇÃO GLOBAL ==========
const CONFIG = {
    animationDuration: 1000,
    observerOptions: {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    }
};

// ========== MÓDULO: SMOOTH SCROLL ==========
/**
 * Responsável por scroll suave entre seções
 */
const SmoothScroll = (() => {
    const selectors = {
        links: '.smooth-scroll'
    };

    /**
     * Inicializa event listeners para links com scroll suave
     */
    const init = () => {
        document.querySelectorAll(selectors.links).forEach(link => {
            link.addEventListener('click', handleClick);
        });
    };

    /**
     * Trata clique em links de navegação
     * @param {Event} event - Evento de clique
     */
    const handleClick = (event) => {
        event.preventDefault();

        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            const navHeight = document.querySelector('.navbar-wrapper')?.offsetHeight || 0;

            window.scrollTo({
                top: offsetTop - navHeight,
                behavior: 'smooth'
            });

            // Fecha navbar em mobile após clicar
            closeNavbarOnMobile();
        }
    };

    /**
     * Fecha navbar em dispositivos móveis após navegação
     */
    const closeNavbarOnMobile = () => {
        const navbar = document.querySelector('.navbar-collapse');
        const toggle = document.querySelector('.navbar-toggler');

        if (navbar && navbar.classList.contains('show')) {
            toggle.click();
        }
    };

    return {
        init
    };
})();

// ========== MÓDULO: ANIMAÇÃO DE ELEMENTOS ==========
/**
 * Responsável por animar elementos quando entram na viewport
 */
const AnimationObserver = (() => {
    const observedElements = new Set();

    /**
     * Inicializa Intersection Observer para animações
     */
    const init = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !observedElements.has(entry.target)) {
                    animateElement(entry.target);
                    observedElements.add(entry.target);
                }
            });
        }, CONFIG.observerOptions);

        // Observa elementos animáveis
        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });
    };

    /**
     * Aplica animação a um elemento
     * @param {HTMLElement} element - Elemento a ser animado
     */
    const animateElement = (element) => {
        const animationType = element.getAttribute('data-animate');

        switch (animationType) {
            case 'fade-in':
                fadeIn(element);
                break;
            case 'slide-up':
                slideUp(element);
                break;
            case 'slide-left':
                slideLeft(element);
                break;
            default:
                fadeIn(element);
        }
    };

    /**
     * Animação de transparência
     * @param {HTMLElement} element
     */
    const fadeIn = (element) => {
        element.style.opacity = '0';
        element.offsetHeight; // Trigger reflow

        element.style.transition = `opacity ${CONFIG.animationDuration}ms ease-out`;
        element.style.opacity = '1';
    };

    /**
     * Animação de deslizamento para cima
     * @param {HTMLElement} element
     */
    const slideUp = (element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.offsetHeight; // Trigger reflow

        element.style.transition = `opacity ${CONFIG.animationDuration}ms ease-out, transform ${CONFIG.animationDuration}ms ease-out`;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    };

    /**
     * Animação de deslizamento para esquerda
     * @param {HTMLElement} element
     */
    const slideLeft = (element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(30px)';
        element.offsetHeight; // Trigger reflow

        element.style.transition = `opacity ${CONFIG.animationDuration}ms ease-out, transform ${CONFIG.animationDuration}ms ease-out`;
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
    };

    return {
        init
    };
})();

// ========== MÓDULO: ANIMAÇÃO DE SKILLS ==========
/**
 * Responsável por animar barras de progresso de skills
 */
const SkillAnimation = (() => {
    const selectors = {
        skillBars: '.skill-progress'
    };

    const animatedBars = new Set();

    /**
     * Inicializa Intersection Observer para skill bars
     */
    const init = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animatedBars.has(entry.target)) {
                    animateProgressBar(entry.target);
                    animatedBars.add(entry.target);
                }
            });
        }, CONFIG.observerOptions);

        document.querySelectorAll(selectors.skillBars).forEach(bar => {
            observer.observe(bar);
        });
    };

    /**
     * Anima uma barra de progresso até seu valor final
     * @param {HTMLElement} bar - Elemento da barra de progresso
     */
    const animateProgressBar = (bar) => {
        const finalWidth = bar.style.width;
        bar.style.width = '0';
        bar.offsetHeight; // Trigger reflow

        // Anima até o valor final
        setTimeout(() => {
            bar.style.transition = `width ${CONFIG.animationDuration}ms ease-out`;
            bar.style.width = finalWidth;
        }, 100);
    };

    return {
        init
    };
})();

// ========== MÓDULO: NAVEGAÇÃO ==========
/**
 * Responsável por funcionalidades da navegação
 */
const Navigation = (() => {
    const selectors = {
        navbar: '.navbar',
        navLinks: '.nav-link'
    };

    /**
     * Inicializa funcionalidades de navegação
     */
    const init = () => {
        handleNavbarScroll();
    };

    /**
     * Adiciona efeito visual ao scrollar (navbar mais compacta)
     */
    const handleNavbarScroll = () => {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector(selectors.navbar);

            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                } else {
                    navbar.style.boxShadow = 'none';
                }
            }
        });
    };

    return {
        init
    };
})();

// ========== INICIALIZAÇÃO ==========
/**
 * Função principal que inicializa todos os módulos
 */
const initializeApp = () => {
    // Aguarda o DOM estar completamente carregado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initModules);
    } else {
        initModules();
    }
};

/**
 * Inicializa todos os módulos
 */
const initModules = () => {
    // Inicializa cada módulo em ordem
    SmoothScroll.init();
    Navigation.init();
    SkillAnimation.init();
    AnimationObserver.init();

    console.log('✅ Portfolio Samuel iniciado com sucesso!');
};

// ========== EXECUÇÃO ==========
initializeApp();

// ========== UTILITÁRIOS ==========
/**
 * Função auxiliar para debug (desenvolvimento)
 */
const debugMode = {
    logModuleLoad: (moduleName) => {
        console.log(`📦 Módulo carregado: ${moduleName}`);
    },
    logAnimationTrigger: (elementClass) => {
        console.log(`🎬 Animação acionada para: ${elementClass}`);
    }
};

// Exporta config para possível uso em outros scripts
window.PortfolioConfig = CONFIG;
