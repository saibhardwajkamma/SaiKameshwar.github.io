// Premium Dark Portfolio - Main JavaScript
document.addEventListener('DOMContentLoaded', () => initializeApp());

async function initializeApp() {
    try {
        await Promise.all([
            loadSiteConfig(), loadNavigation(), loadHero(),
            loadAbout(), loadWork(), loadSkills(), loadContact(), loadFooter()
        ]);
        initializeNavigation();
        initializeScrollEffects();
        initializeBackToTop();
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

async function loadSiteConfig() {
    try {
        const data = await fetch('data/site-config.json').then(r => r.json());
        document.title = data.title;
        document.querySelector('meta[name="description"]').content = data.description;
        document.querySelector('meta[name="author"]').content = data.author;
    } catch (error) {
        console.error('Error loading site config:', error);
    }
}

async function loadNavigation() {
    try {
        const data = await fetch('data/navigation.json').then(r => r.json());
        document.getElementById('nav-brand').textContent = data.brand.name;
        document.getElementById('nav-menu').innerHTML = data.menuItems.map(item =>
            `<li><a href="${item.href}" class="nav-link">${item.text}</a></li>`
        ).join('');
    } catch (error) {
        console.error('Error loading navigation:', error);
    }
}

async function loadHero() {
    try {
        const data = await fetch('data/hero.json').then(r => r.json());
        document.getElementById('hero-greeting').textContent = data.greeting;
        document.getElementById('hero-name').textContent = data.name;
        document.getElementById('hero-title').textContent = data.title;
        document.getElementById('hero-tagline').textContent = data.tagline;
        document.getElementById('hero-description').textContent = data.description;

        document.getElementById('hero-cta').innerHTML = data.cta.map(btn =>
            `<a href="${btn.href}" class="btn btn-${btn.type}">${btn.text}</a>`
        ).join('');

        document.getElementById('hero-social').innerHTML = data.socialLinks.map(link =>
            `<a href="${link.url}" target="_blank" class="social-link" aria-label="${link.platform}"><i class="${link.icon}"></i></a>`
        ).join('');

        document.getElementById('hero-stats').innerHTML = data.stats.map(stat =>
            `<div class="stat-item"><span class="stat-number">${stat.number}</span><span class="stat-label">${stat.label}</span></div>`
        ).join('');
    } catch (error) {
        console.error('Error loading hero:', error);
    }
}

async function loadAbout() {
    try {
        const data = await fetch('data/about.json').then(r => r.json());
        document.getElementById('about-title').textContent = data.sectionTitle;
        document.getElementById('about-content').innerHTML = data.content.map(p => `<p>${p}</p>`).join('');
        document.getElementById('about-highlights').innerHTML = data.highlights.map(h =>
            `<div class="highlight-card"><i class="${h.icon}"></i><h3>${h.title}</h3><p>${h.description}</p></div>`
        ).join('');
    } catch (error) {
        console.error('Error loading about:', error);
    }
}

async function loadWork() {
    try {
        const data = await fetch('data/work.json').then(r => r.json());
        document.getElementById('work-title').textContent = data.sectionTitle;
        document.getElementById('work-grid').innerHTML = data.projects.map(project =>
            `<div class="work-card">
                <div class="work-image" style="background-image: url('${project.image}')">
                    <div class="work-icon"><i class="${project.icon}"></i></div>
                </div>
                <div class="work-content">
                    <p class="work-category">${project.category}</p>
                    <h3 class="work-title">${project.title}</h3>
                    <p class="work-description">${project.description}</p>
                    <div class="work-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>`
        ).join('');
    } catch (error) {
        console.error('Error loading work:', error);
    }
}

async function loadSkills() {
    try {
        const data = await fetch('data/skills.json').then(r => r.json());
        document.getElementById('skills-title').textContent = data.sectionTitle;
        document.getElementById('skills-grid').innerHTML = data.categories.map(cat =>
            `<div class="skill-category">
                <div class="skill-category-header">
                    <i class="${cat.icon}"></i>
                    <h3 class="skill-category-name">${cat.name}</h3>
                </div>
                <div class="skill-list">
                    ${cat.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>`
        ).join('');
    } catch (error) {
        console.error('Error loading skills:', error);
    }
}

async function loadContact() {
    try {
        const data = await fetch('data/contact.json').then(r => r.json());
        document.getElementById('contact-title').textContent = data.sectionTitle;
        document.getElementById('contact-subtitle').textContent = data.subtitle;
        document.getElementById('contact-info').innerHTML = `
            <div class="contact-item"><i class="fas fa-envelope"></i> <a href="mailto:${data.email}">${data.email}</a></div>
            <div class="contact-item"><i class="fas fa-map-marker-alt"></i> ${data.location}</div>
            <div class="contact-item"><i class="fas fa-clock"></i> ${data.availability}</div>
        `;
        document.getElementById('contact-social').innerHTML = data.socialLinks.map(link =>
            `<a href="${link.url}" target="_blank" class="social-link" aria-label="${link.platform}"><i class="${link.icon}"></i></a>`
        ).join('');
    } catch (error) {
        console.error('Error loading contact:', error);
    }
}

async function loadFooter() {
    try {
        const data = await fetch('data/footer.json').then(r => r.json());
        document.getElementById('footer-text').textContent = data.text;
        document.getElementById('footer-copyright').textContent = data.copyright;
        document.getElementById('footer-links').innerHTML = data.links.map(link =>
            `<a href="${link.href}">${link.text}</a>`
        ).join('');
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navMenu.classList.remove('active');
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        }

        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

function initializeBackToTop() {
    const btn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
