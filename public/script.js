/**
 * Old Monkey Racing - Dynamic Script Operations
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Year Update
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // 2. Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Mobile Navigation Menu Toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navItems = document.querySelectorAll('.nav-item');

    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : 'auto';
        });

        // Close menu when clicking on a link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileNavToggle.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // 4. Section Active Navigation Link Highlight on Scroll
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies the mid-to-upper area of viewport
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 5. Contact Form Submission formatted to WhatsApp
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Form data retrieval
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const experienceEl = document.getElementById('experience');
            const experienceText = experienceEl.options[experienceEl.selectedIndex].text;
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !phone || !experienceEl.value || !message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Formatting message for WhatsApp
            const intro = '🏁 *Interesse em Aluguel de Carro de Corrida (F1600)*';
            const details = 
                `Olá, equipe Old Monkey Racing!\n\n` +
                `*Nome:* ${name}\n` +
                `*E-mail:* ${email}\n` +
                `*Telefone:* ${phone}\n` +
                `*Experiência de Pista:* ${experienceText}\n\n` +
                `*Mensagem:* ${message}`;

            const fullMessage = `${intro}\n\n${details}`;
            
            // Base WhatsApp link
            const whatsappNumber = '5511984014296';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

            // Open in new tab
            window.open(whatsappUrl, '_blank');
        });
    }
});

// 6. Division Tab Switching (Fórmula 1600 Division Tabs)
window.switchTab = function(tabId) {
    // Get all panes and buttons
    const tabPanes = document.querySelectorAll('.tab-pane');
    const tabBtns = document.querySelectorAll('.tab-btn');

    // Hide all panes
    tabPanes.forEach(pane => {
        pane.classList.remove('active');
    });

    // Remove active class from all buttons
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected pane
    const targetPane = document.getElementById(tabId);
    if (targetPane) {
        targetPane.classList.add('active');
    }

    // Add active class to corresponding button
    const targetBtn = document.getElementById(`${tabId}-btn`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
};

// 7. Lightbox Modal logic (Gallery Zoom)
window.openLightbox = function(imageSrc, captionText) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (lightbox && lightboxImg) {
        lightboxImg.src = imageSrc;
        lightboxCaption.textContent = captionText || '';
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Lock background scroll
    }
};

window.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable background scroll
    }
};

// Close lightbox on escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.closeLightbox();
    }
});
