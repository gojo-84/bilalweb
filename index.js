// Initialize EmailJS with your public key
emailjs.init('Zj_yJMKm7FpZ0qafw'); // To'g'ri public key

window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');   

    // Hide loader after 2.5 seconds
    setTimeout(() => {
        loader.style.opacity = '0';
        
        // Animatsiya tugagandan keyin blokni butunlay o'chirish
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); 
    }, 2500);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for card animations
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Mobile menu toggle
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-links');

    menu.addEventListener('click', () => {
        menuLinks.classList.toggle('active');
        menu.classList.toggle('is-active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
        menuLinks.classList.remove('active');
        menu.classList.remove('is-active');
    }));

    // Dark mode toggle
    const themeBtn = document.createElement('button');
    themeBtn.id = "theme-toggle";
    themeBtn.innerText = "🌙";
    const li = document.createElement('li');
    li.appendChild(themeBtn);
    document.querySelector('.nav-links').appendChild(li);

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        themeBtn.innerText = document.body.classList.contains('light-theme') ? "☀️" : "🌙";
    });

    // Status update
    function updateStatus() {
        const statusText = document.getElementById('status');
        if (statusText) {
            const hour = new Date().getHours();
            
            if (hour >= 9 && hour < 18) {
                statusText.innerText = "Hozir: Yangi loyihalar ustida ishlayapman 🚀";
            } else if (hour >= 18 && hour < 23) {
                statusText.innerText = "Hozir: JavaScript o'rganmoqdaman 📚";
            } else {
                statusText.innerText = "Hozir: Dam olayotganman 😴";
            }
        }
    }
    setInterval(updateStatus, 1000);

    // Discord nickname copy
    const discordBtn = document.getElementById('discord-btn');
    if(discordBtn) {
        discordBtn.addEventListener('click', () => {
            const nick = "bilol1bey";
            navigator.clipboard.writeText(nick);
            
            const originalText = document.getElementById('discord-nick').innerText;
            document.getElementById('discord-nick').innerText = "Nusxalandi! ✅";
            
            setTimeout(() => {
                document.getElementById('discord-nick').innerText = originalText;
            }, 2000);
        });
    }

    // Back to top button
    const backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Animation observer for other elements
    const observerAnim = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.banner, .adv-item, .good-card, .consult-item');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden-animation');
        observerAnim.observe(el);
    });

    // Carousel pause on hover
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            carousel.style.animationPlayState = 'paused';
        });
        carousel.addEventListener('mouseleave', () => {
            carousel.style.animationPlayState = 'running';
        });
    }

    // Project image modal
    const projectImages = document.querySelectorAll('.project-img');
    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.background = 'rgba(0,0,0,0.8)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '10000';
            modal.style.cursor = 'pointer';

            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
            modalImg.style.borderRadius = '10px';
            modalImg.style.boxShadow = '0 0 30px rgba(168, 85, 247, 0.5)';

            modal.appendChild(modalImg);
            document.body.appendChild(modal);

            modal.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Send email using EmailJS
            emailjs.sendForm('service_y1tjg0l', 'template_jwxi2yg', this, 'Zj_yJMKm7FpZ0qafw')
                .then(function() {
                    alert('Xabar muvaffaqiyatli yuborildi!');
                    contactForm.reset();
                }, function(error) {
                    alert('Xato yuz berdi: ' + JSON.stringify(error));
                });
        });
    }

    // Commission form submission
    const commissionForm = document.querySelector('.commission-form');
    if (commissionForm) {
        commissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Send email using EmailJS
            emailjs.sendForm('service_y1tjg0l', 'template_jwxi2yg', this, 'Zj_yJMKm7FpZ0qafw')
                .then(function() {
                    alert('Buyurtma muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanaman.');
                    commissionForm.reset();
                }, function(error) {
                    alert('Xato yuz berdi: ' + JSON.stringify(error));
                });
        });
    }});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const profileImg = document.querySelector('.hero-image img');
if(profileImg) {
    profileImg.addEventListener('mouseover', () => {
        console.log("Gojo, kimsan rasmga tegayotgan? 😎");
    });
}


window.addEventListener('load', () => {
    const mainTitle = document.querySelector('.hero-text h1');
    mainTitle.style.borderRight = "3px solid #a855f7";
    

    let i = 0;
    let txt = 'JavaScript olamiga xush kelibsan, Gojo!';
    function typeWriter() {
        if (i < txt.length) {
            process.stdout.write(txt.charAt(i)); 
            i++;
        }
    }
    console.log("%c " + txt, "color: #a855f7; font-size: 20px; font-weight: bold;");
});
// 1. Dark Mode tugmasini Navbarga qo'shish
const navMenu = document.getElementById('nav-menu');
const themeBtn = document.createElement('button');
themeBtn.id = "theme-toggle";
themeBtn.innerText = "🌙";
const li = document.createElement('li');
li.appendChild(themeBtn);
navMenu.appendChild(li);

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeBtn.innerText = document.body.classList.contains('light-theme') ? "☀️" : "🌙";
});

// 2. Mobil Menyu Funktsiyasi
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 3. Link bosilganda menyuni yopish
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


function updateStatus() {
    const statusText = document.getElementById('status');
    const hour = new Date().getHours();
    
    if (hour >= 9 && hour < 18) {
        statusText.innerText = "Hozir: Yangi loyihalar ustida ishlayapman 🚀";
    } else if (hour >= 18 && hour < 23) {
        statusText.innerText = "Hozir: JavaScript o'rganyapman 📚";
    } else {
        statusText.innerText = "Hozir: Dam olyapman (Zzz...) 😴";
    }
}
setInterval(updateStatus, 1000);

const quotes = [
    "Dasturlash - bu sehrgarlik, faqat tayoqcha o'rniga klaviatura!",
    "Xato (Bug) - bu shunchaki kutilmagan imkoniyat.",
    "JavaScript o'rganish - bu kelajakka eng yaxshi investitsiya.",
    "To'xtama, Gojo! Eng zo'r kod hali yozilmadi."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log("%c" + randomQuote, "color: #a855f7; font-style: italic;");


// Discord nikini nusxalash
const discordBtn = document.getElementById('discord-btn');
if(discordBtn) {
    discordBtn.addEventListener('click', () => {
        const nick = "bilol1bey";
        navigator.clipboard.writeText(nick);
        
        // Foydalanuvchiga xabar berish
        const originalText = document.getElementById('discord-nick').innerText;
        document.getElementById('discord-nick').innerText = "Nusxalandi! ✅";
        
        setTimeout(() => {
            document.getElementById('discord-nick').innerText = originalText;
        }, 2000);
        
        console.log("Discord nik nusxalandi: " + nick);
    });
}

// Steam va GitHub ga bosilganda maxsus xabar
document.querySelectorAll('.social-item').forEach(item => {
    item.addEventListener('click', (e) => {
        if(e.currentTarget.tagName === 'A') {
            console.log("Gojo'ning profiliga yo'naltirilmoqda...");
        }
    });
});



// Sayt to'liq yuklangandan keyin ishlasin
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. TEPAGA QAYTISH TUGMASI ---
    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) { // Agar tugma HTMLda bo'lsa
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // --- 2. ANIMATSIYA (Sen yoqtirgan bomba qism) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.banner, .adv-item, .good-card, .consult-item');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden-animation');
        observerAnim.observe(el);
    });
});

