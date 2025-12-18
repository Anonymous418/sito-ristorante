let currentLang = 'it';

document.addEventListener('DOMContentLoaded', () => {
    renderLayout();
    
    // Rendering condizionale in base alla pagina
    if (document.getElementById('menu-container')) renderMenu();
    if (document.getElementById('reviews-container')) renderReviews();
    if (document.getElementById('contact-info-container')) renderContactInfo();
    
    initAnimations();
});

// --- LAYOUT ---
function renderLayout() {
    const t = siteData.translations[currentLang];
    
    // Header Minimal
    document.getElementById('dynamic-header').innerHTML = `
    <nav class="fixed w-full z-50 py-6 top-0 bg-gradient-to-b from-black/90 to-transparent transition-all">
        <div class="container mx-auto px-6 flex justify-between items-center">
            <a href="index.html" class="text-lg font-serif text-white tracking-[0.15em] hover:text-bronze-400 transition">F. ROLANDO</a>
            <div class="hidden md:flex items-center gap-12">
                <a href="index.html" class="text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition">${t.navHome}</a>
                <a href="menu.html" class="text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition">${t.navMenu}</a>
                <a href="contact.html" class="text-[11px] uppercase tracking-[0.2em] text-white border-b border-transparent hover:border-bronze-400 transition pb-1">${t.navContact}</a>
            </div>
        </div>
    </nav>`;

    // Footer Clean
    document.getElementById('dynamic-footer').innerHTML = `
    <footer class="bg-[#050505] border-t border-[#111] py-16 mt-20">
        <div class="container mx-auto px-6 flex flex-col items-center">
            <h3 class="font-serif text-xl text-white mb-6">Famiglia Rolando</h3>
            <p class="text-[10px] text-gray-600 uppercase tracking-widest mb-8">&copy; 2024 Caprauna (CN)</p>
        </div>
    </footer>`;
}

// --- MENU (Pulito) ---
function renderMenu() {
    const container = document.getElementById('menu-container');
    const cardsHTML = siteData.classics.map(item => `
        <div class="menu-card fade-in opacity-0 translate-y-8">
            <span class="text-[9px] uppercase tracking-[0.3em] text-bronze-400 block mb-4">${item.type}</span>
            <h3 class="text-2xl font-serif text-white mb-3">${item.name}</h3>
            <div class="w-8 h-[1px] bg-[#333] mb-4"></div>
            <p class="text-gray-400 font-light text-sm leading-7">${item.desc}</p>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            ${cardsHTML}
        </div>
        <div class="mt-24 text-center fade-in">
            <h4 class="font-serif text-white text-lg mb-2 italic">"${siteData.dailyMenu.text}"</h4>
        </div>
    `;
}

// --- RECENSIONI (Google Style) ---
function renderReviews() {
    const container = document.getElementById('reviews-container');
    const reviewsHTML = siteData.reviews.map(rev => `
        <div class="review-card">
            <div class="flex items-center gap-1 stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p class="text-gray-300 text-sm italic mb-4 leading-relaxed">"${rev.text}"</p>
            <div class="flex items-center gap-3 mt-auto">
                <div class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-500">
                    ${rev.author.charAt(0)}
                </div>
                <span class="text-xs uppercase tracking-wider text-gray-500">${rev.author}</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" class="w-4 h-4 ml-auto opacity-50 grayscale">
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="max-w-6xl mx-auto px-6 mb-12 flex items-end justify-between">
            <div>
                <span class="text-bronze-400 text-xs uppercase tracking-widest block mb-2">Dicono di noi</span>
                <h2 class="text-3xl font-serif text-white">Google Reviews</h2>
            </div>
            <div class="text-right hidden md:block">
                <span class="text-2xl font-serif text-white block">4.9</span>
                <span class="text-xs text-gray-500 uppercase tracking-widest">Eccellente</span>
            </div>
        </div>
        <div class="review-scroll px-6 md:justify-center">
            ${reviewsHTML}
        </div>
    `;
}

// --- INFO CONTATTI (Senza Form) ---
function renderContactInfo() {
    const container = document.getElementById('contact-info-container');
    const info = siteData.contactInfo;
    
    const hoursHTML = info.hours.map(h => `
        <div class="flex justify-between border-b border-[#222] py-3 text-sm">
            <span class="text-gray-400">${h.day}</span>
            <span class="text-white">${h.time}</span>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <!-- Colonna Info -->
            <div class="fade-in">
                <h1 class="text-4xl font-serif text-white mb-8">Informazioni</h1>
                <p class="text-gray-400 font-light mb-12">
                    Per garantire un servizio eccellente, lavoriamo solo su prenotazione. 
                    Potete contattarci telefonicamente o via WhatsApp.
                </p>
                
                <div class="flex flex-col gap-6">
                    <a href="https://wa.me/${info.whatsapp}" target="_blank" class="flex items-center gap-6 group cursor-pointer">
                        <div class="w-12 h-12 border border-[#333] flex items-center justify-center text-gray-400 group-hover:border-bronze-400 group-hover:text-bronze-400 transition">
                            <i class="fab fa-whatsapp text-lg"></i>
                        </div>
                        <div>
                            <span class="text-[10px] uppercase tracking-widest text-gray-500 block">WhatsApp Concierge</span>
                            <span class="text-white font-serif text-lg">Invia un messaggio</span>
                        </div>
                    </a>
                    
                    <a href="tel:${info.phone}" class="flex items-center gap-6 group cursor-pointer">
                        <div class="w-12 h-12 border border-[#333] flex items-center justify-center text-gray-400 group-hover:border-bronze-400 group-hover:text-bronze-400 transition">
                            <i class="fas fa-phone text-lg"></i>
                        </div>
                        <div>
                            <span class="text-[10px] uppercase tracking-widest text-gray-500 block">Telefono</span>
                            <span class="text-white font-serif text-lg">${info.phone}</span>
                        </div>
                    </a>
                </div>
            </div>

            <!-- Colonna Orari -->
            <div class="info-box fade-in delay-200">
                <span class="text-[10px] uppercase tracking-[0.2em] text-bronze-400 block mb-6">Orari di Apertura</span>
                <div class="space-y-2 mb-10">
                    ${hoursHTML}
                </div>
                
                <span class="text-[10px] uppercase tracking-[0.2em] text-bronze-400 block mb-6">Dove Siamo</span>
                <p class="text-white font-serif text-lg mb-4">${info.address}</p>
                
                <!-- Google Maps Embed Semplice -->
                <div class="w-full h-40 bg-[#1a1a1a] mt-6 filter grayscale hover:grayscale-0 transition duration-700">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.1!2d7.95!3d44.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDA3JzAwLjEiTiA3wrA1NycwMC4wIkU!5e0!3m2!1sit!2sit!4v1600000000000" width="100%" height="100%" style="border:0;" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    `;
}

// --- ANIMAZIONI ---
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.replace('opacity-0', 'opacity-100');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}