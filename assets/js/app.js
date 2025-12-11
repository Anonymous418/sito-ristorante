document.addEventListener('DOMContentLoaded', () => {
    // 1. Iniezione Layout
    injectLayout();

    // 2. Preloader & Fade In Body
    const tl = gsap.timeline();
    tl.to('.preloader', { opacity: 0, duration: 0.8, delay: 0.5, onComplete: () => {
        document.querySelector('.preloader').style.display = 'none';
    }})
    .to('body', { opacity: 1, duration: 0.8 }, "-=0.5");

    // 3. Smooth Scroll
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    // 4. Inizializzazioni Pagine
    if (document.querySelector('.mySwiper')) initSwiper();
    if (document.getElementById('menu-list')) renderMenu();
    if (document.getElementById('wines-grid')) renderWines();

    // 5. Scroll Header Logic
    handleNavigation();

    // 6. Animazioni ScrollTrigger
    initAnimations();
});

function injectLayout() {
    const header = document.getElementById('dynamic-header');
    header.innerHTML = `
    <nav id="main-nav" class="fixed w-full z-50 py-6 transition-all group">
        <div class="container mx-auto px-6 flex justify-between items-center">
            
            <!-- Logo (cambia colore su scroll via CSS) -->
            <a href="index.html" class="nav-logo text-2xl font-serif italic font-bold tracking-widest text-white border border-transparent p-2 transition">
                F. Rolando
            </a>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center gap-10">
                <a href="index.html" class="nav-link text-[11px] uppercase tracking-[2px] font-medium text-white hover:text-[#A08C5B] transition">Home</a>
                <a href="menu.html" class="nav-link text-[11px] uppercase tracking-[2px] font-medium text-white hover:text-[#A08C5B] transition">Cucina</a>
                <a href="cantina.html" class="nav-link text-[11px] uppercase tracking-[2px] font-medium text-white hover:text-[#A08C5B] transition">Vini</a>
                <a href="contact.html" class="nav-link text-[11px] uppercase tracking-[2px] font-medium text-white hover:text-[#A08C5B] transition">Contatti</a>
            </div>

            <!-- Social Icons & CTA -->
            <div class="flex items-center gap-6">
                <div class="hidden md:flex gap-5 nav-link text-white">
                    <a href="${siteData.info.instagram}" target="_blank"><i class="fab fa-instagram hover:text-[#A08C5B] transition"></i></a>
                    <a href="${siteData.info.facebook}" target="_blank"><i class="fab fa-facebook-f hover:text-[#A08C5B] transition"></i></a>
                </div>
                <a href="https://wa.me/390000000000" class="hidden md:block border border-white/40 nav-link text-white px-6 py-2 text-[10px] uppercase tracking-[2px] hover:bg-[#A08C5B] hover:border-[#A08C5B] transition">Prenota</a>
            </div>
        </div>
    </nav>`;

    const footer = document.getElementById('dynamic-footer');
    footer.innerHTML = `
    <footer class="bg-[#1A1A1A] text-white pt-24 pb-10">
        <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-16 mb-12">
            <div>
                <h4 class="text-3xl font-serif italic mb-6">Famiglia Rolando</h4>
                <p class="text-gray-500 text-sm leading-7 font-light">
                    Eccellenza, tradizione e silenzio.<br>
                    Il rifugio perfetto per l'anima e il palato.
                </p>
            </div>
            <div>
                <h5 class="text-xs uppercase tracking-[2px] mb-8 text-[#A08C5B]">Contatti</h5>
                <p class="text-gray-400 text-sm leading-8">
                    ${siteData.info.address}<br>
                    ${siteData.info.phone}<br>
                    ${siteData.info.email}
                </p>
            </div>
            <div class="flex items-center gap-6 justify-start md:justify-end text-3xl text-gray-700">
                <i class="fas fa-wine-glass-alt hover:text-[#A08C5B] transition"></i>
                <i class="fas fa-utensils hover:text-[#A08C5B] transition"></i>
                <i class="fas fa-leaf hover:text-[#A08C5B] transition"></i>
            </div>
        </div>
        <div class="container mx-auto px-6 text-center text-[10px] text-gray-600 uppercase tracking-widest flex flex-col md:flex-row justify-between">
            <span>&copy; 2024 Famiglia Rolando</span>
            <div class="space-x-4 mt-4 md:mt-0">
                <a href="#" class="hover:text-white">Privacy</a>
                <a href="#" class="hover:text-white">Cookie Policy</a>
            </div>
        </div>
    </footer>`;
}

function handleNavigation() {
    const nav = document.getElementById('main-nav');
    // Se non è homepage, è sempre bianco (scrolled)
    if(!document.querySelector('header video')) {
        nav.classList.add('scrolled');
    } else {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
        });
    }
}

function initSwiper() {
    const wrapper = document.getElementById('reviews-wrapper');
    wrapper.innerHTML = siteData.reviews.map(r => `
        <div class="swiper-slide bg-[#FCFAF7] p-12 text-center border border-gray-100 mx-2">
            <div class="flex flex-col justify-center items-center h-full w-full">
                <div class="text-[#A08C5B] mb-6 text-xs flex gap-1"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                <p class="font-serif italic text-2xl text-[#1A1A1A] mb-8 leading-relaxed">"${r.text}"</p>
                <span class="text-[10px] uppercase tracking-[2px] text-gray-400 block">— ${r.author}</span>
            </div>
        </div>
    `).join('');

    new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 1000,
        autoplay: { delay: 5000 },
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 }
        }
    });
}

function renderMenu() {
    // Menu senza prezzi
    document.getElementById('menu-list').innerHTML = siteData.menu.map(cat => `
        <div class="mb-24 fade-in-up">
            <h2 class="text-3xl font-serif text-center mb-16 text-[#A08C5B] italic">${cat.category}</h2>
            <div class="space-y-12">
                ${cat.items.map(item => `
                    <div class="text-center group">
                        <h3 class="text-xl font-serif text-[#1A1A1A] mb-3 group-hover:text-[#A08C5B] transition duration-300">${item.name}</h3>
                        <p class="text-gray-500 font-light text-sm tracking-wide leading-relaxed">${item.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderWines() {
    document.getElementById('wines-grid').innerHTML = siteData.wines.map(w => `
        <div class="group fade-in-up">
            <div class="overflow-hidden h-[450px] mb-8 relative">
                <img src="${w.img}" class="w-full h-full object-cover transition duration-[1.5s] group-hover:scale-110 grayscale group-hover:grayscale-0">
                <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
            </div>
            <span class="text-xs uppercase tracking-widest text-gray-400 block mb-2">${w.subtitle}</span>
            <h3 class="text-3xl font-serif text-[#1A1A1A] italic mb-4 group-hover:text-[#A08C5B] transition">${w.title}</h3>
            <div class="h-[1px] w-12 bg-[#A08C5B] mb-4"></div>
            <ul class="text-sm text-gray-500 font-light space-y-1">
                ${w.list.map(l => `<li>${l}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Fade Up Standard
    gsap.utils.toArray('.fade-in-up').forEach(elem => {
        gsap.fromTo(elem, 
            { y: 50, opacity: 0 },
            {
                scrollTrigger: { trigger: elem, start: "top 85%" },
                y: 0, opacity: 1, duration: 1.2, ease: "power3.out"
            }
        );
    });

    // Parallax Immagini
    gsap.utils.toArray('.parallax-img-container img').forEach(img => {
        gsap.to(img, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: img.parentElement,
                scrub: true
            }
        });
    });
}