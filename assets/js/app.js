document.addEventListener('DOMContentLoaded', () => {
    injectLayout();

    // Preloader
    const tl = gsap.timeline();
    tl.to('.preloader', { opacity: 0, duration: 1, delay: 0.2, ease: "power2.inOut", onComplete: () => {
        document.querySelector('.preloader').style.display = 'none';
    }})
    .to('body', { opacity: 1, duration: 1 }, "-=0.5");

    // Lenis Scroll (Ottimizzato Mobile)
    const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        touchMultiplier: 1.5, // Migliore risposta al tocco
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    if (document.querySelector('.mySwiper')) initSwiper();
    if (document.getElementById('seasonal-menu')) renderSeasonalMenu();
    if (document.getElementById('interactive-cellar')) initInteractiveCellar();

    handleNavigation();
    initAnimations();
});

// --- LAYOUT RESPONSIVE UNIFICATO ---
function injectLayout() {
    const header = document.getElementById('dynamic-header');
    if (header) {
        // Layout: 
        // Mobile: Flex Column (Logo sopra, Link sotto centrati)
        // Desktop: Grid 3 Colonne (Link Sx - Logo Centro - Link Dx)
        header.innerHTML = `
        <nav id="main-nav" class="fixed w-full z-50 top-0">
            <div class="container mx-auto px-6 flex flex-col md:grid md:grid-cols-3 items-center gap-4 md:gap-0">
                
                <!-- MENU SX (Desktop) / SOTTO (Mobile) -->
                <div class="order-2 md:order-1 flex justify-center md:justify-start gap-6 md:gap-12 w-full md:w-auto">
                    <a href="menu.html" class="nav-link">Il Menu</a>
                    <a href="cantina.html" class="nav-link">Cantina</a>
                </div>

                <!-- LOGO (Sempre in alto/centro) -->
                <div class="order-1 md:order-2 flex justify-center py-2 md:py-0">
                    <a href="index.html" class="font-script text-4xl md:text-5xl text-white transition-colors duration-500 hover:text-[#A08C5B]">
                        Famiglia Rolando
                    </a>
                </div>

                <!-- MENU DX (Desktop) / SOTTO (Mobile) -->
                <div class="order-3 md:order-3 flex justify-center md:justify-end items-center gap-6 md:gap-12 w-full md:w-auto">
                    <a href="contact.html" class="nav-link">Dove Siamo</a>
                    <a href="contact.html" class="nav-link border-b border-white/30 pb-1 hover:text-[#A08C5B] hover:border-[#A08C5B]">
                        Prenota
                    </a>
                </div>

            </div>
        </nav>`;
    }

    const footer = document.getElementById('dynamic-footer');
    if (footer) {
        footer.innerHTML = `
        <footer class="bg-[#faf9f6] text-[#111] pt-24 pb-12 border-t border-gray-200">
            <div class="container mx-auto px-6 text-center">
                <h4 class="font-script text-5xl mb-8 text-[#111]">Famiglia Rolando</h4>
                <div class="flex justify-center gap-8 mb-8 text-gray-400 font-light text-xs uppercase tracking-widest">
                    <a href="#" class="hover:text-[#A08C5B]">Instagram</a>
                    <a href="#" class="hover:text-[#A08C5B]">Facebook</a>
                </div>
                <p class="text-[9px] font-sans text-gray-400 uppercase tracking-[0.2em]">&copy; 2024 Caprauna (CN)</p>
            </div>
        </footer>`;
    }
}

function handleNavigation() {
    const nav = document.getElementById('main-nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
        });
    }
}

function initSwiper() {
    const wrapper = document.getElementById('reviews-wrapper');
    if (wrapper) {
        wrapper.innerHTML = siteData.reviews.map(r => `
            <div class="swiper-slide">
                <div class="bg-white p-6 md:p-12 w-full h-full flex flex-col justify-center items-center text-center">
                    <div class="text-[#A08C5B] mb-6 text-[9px] tracking-[4px] opacity-60">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    </div>
                    <p class="font-serif italic text-2xl md:text-3xl text-[#111] mb-8 leading-snug font-light opacity-80">"${r.text}"</p>
                    <span class="text-[9px] font-sans uppercase tracking-[3px] text-gray-400 font-medium">— ${r.author}</span>
                </div>
            </div>
        `).join('');

        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 1200,
            autoplay: { delay: 3500, disableOnInteraction: false },
            pagination: { el: ".swiper-pagination", clickable: true },
        });
    }
}

function renderSeasonalMenu() {
    const container = document.getElementById('seasonal-menu');
    if (container) {
        container.innerHTML = siteData.menuHighlights.map((item, index) => `
            <div class="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-24 md:mb-40 fade-in-up ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}">
                <div class="w-full md:w-5/12 text-center md:text-left px-4 md:px-0">
                    <span class="text-gray-400 text-[9px] font-medium tracking-[0.4em] uppercase block mb-4">${item.category}</span>
                    <h3 class="text-5xl md:text-6xl font-serif text-[#111] mb-6 font-light italic">${item.name}</h3>
                    <div class="w-10 h-[1px] bg-[#A08C5B] mb-6 mx-auto md:mx-0 opacity-50"></div>
                    <p class="text-gray-500 leading-8 text-base md:text-lg font-light">
                        ${item.process}
                    </p>
                </div>
                <div class="w-full md:w-7/12 h-[400px] md:h-[600px] relative overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover grayscale opacity-90 transition duration-[2s] hover:scale-105 hover:grayscale-0">
                </div>
            </div>
        `).join('');
    }
}

function initInteractiveCellar() {
    const gridContainer = document.getElementById('cellar-grid');
    const detailsContainer = document.getElementById('wine-details');
    
    if (gridContainer && detailsContainer) {
        gridContainer.innerHTML = siteData.cellarWines.map(wine => `
            <div class="wine-niche group" data-id="${wine.id}">
                <img src="${wine.img}" class="bottle-img" alt="${wine.name}">
            </div>
        `).join('');

        const niches = document.querySelectorAll('.wine-niche');
        niches.forEach(niche => {
            niche.addEventListener('click', () => {
                niches.forEach(n => n.classList.remove('active'));
                niche.classList.add('active');
                
                const wineId = parseInt(niche.getAttribute('data-id'));
                const wine = siteData.cellarWines.find(w => w.id === wineId);
                
                // Su mobile, scrolla ai dettagli quando clicchi
                if(window.innerWidth < 768) {
                    detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }

                if (wine) renderWineDetails(wine, detailsContainer);
            });
        });

        if(niches.length > 0) niches[0].click();
    }
}

function renderWineDetails(wine, container) {
    container.innerHTML = `
        <div class="fade-in-slow px-4 md:px-10 py-6 md:py-0 text-center md:text-left">
            <span class="text-gray-400 text-[9px] uppercase tracking-[0.3em] block mb-3">La Selezione</span>
            <h3 class="text-4xl md:text-6xl font-serif text-[#111] mb-3 font-light italic leading-none">${wine.name}</h3>
            <h4 class="text-lg md:text-xl text-gray-400 mb-6 font-serif font-light">${wine.producer}</h4>
            <p class="text-gray-500 text-lg md:text-xl leading-relaxed font-light mb-8">
                ${wine.notes}
            </p>
            <button class="btn-gold-dark text-[9px] tracking-[3px]">Richiedi</button>
        </div>
    `;
    
    gsap.fromTo(container.querySelector('.fade-in-slow'), 
        { autoAlpha: 0, y: 10 }, 
        { autoAlpha: 1, y: 0, duration: 0.5 }
    );
}

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.fade-in-up').forEach(elem => {
        gsap.fromTo(elem, 
            { y: 50, opacity: 0 },
            { 
                scrollTrigger: { trigger: elem, start: "top 90%" }, 
                y: 0, opacity: 1, duration: 1.5, ease: "power3.out" 
            }
        );
    });
}