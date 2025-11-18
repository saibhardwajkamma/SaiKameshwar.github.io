# Sai Kameshwar Sriadibhatla - Portfolio

A stunning premium dark portfolio featuring navy blue, cyan, and gold color scheme with animated gradient backgrounds, glassmorphism effects, and smooth animations.

## About

Professional portfolio for **Sai Kameshwar Sriadibhatla** - Engineering Manager & Product Owner, showcasing expertise in Agile methodologies, project management, and data-driven solutions.

## Features

- **Premium Dark Theme**: Navy blue with cyan and gold accents
- **Animated Backgrounds**: Floating gradient orbs and grid overlay
- **Glassmorphism Effects**: Modern frosted glass design
- **JSON-Driven Content**: Easy content management through JSON files
- **Fully Responsive**: Mobile-first design approach
- **Smooth Animations**: Professional transitions and interactions
- **Pure Vanilla JavaScript**: No framework dependencies

## Quick Start

### Option 1: Using npm (Recommended)
```bash
npm run dev
```
This starts BrowserSync at http://localhost:3004 with live reload.

### Option 2: Using Python
```bash
python -m http.server 8000
```
Then open http://localhost:8000

### Option 3: Using any static server
Simply serve the files from the root directory.

## Customization

### Update Content
All content is managed through JSON files in the `data/` folder:

- **`site-config.json`** - SEO meta information and site settings
- **`navigation.json`** - Navigation menu items
- **`hero.json`** - Hero section content
- **`about.json`** - About section content
- **`work.json`** - Projects and achievements
- **`skills.json`** - Skills and expertise
- **`contact.json`** - Contact information
- **`footer.json`** - Footer content
- **`profile.json`** - Profile information

### Change Colors
Modify CSS variables in `assets/css/styles.css`:
```css
:root {
  --primary: #00d4ff;    /* Cyan */
  --secondary: #ffd700;  /* Gold */
  --bg-dark: #0a1628;    /* Navy Blue */
}
```

### Customize Animations
Settings in `data/site-config.json`:
```json
{
  "settings": {
    "enableAnimations": true,
    "enableParticles": true,
    "theme": "dark"
  }
}
```

## Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No framework overhead
- **Google Fonts** - Inter (body), Syne (headings)
- **Font Awesome 6** - Icons

## Profile Information

**Name:** Sai Kameshwar Sriadibhatla
**Title:** Engineering Manager & Product Owner
**Education:** Master's in Engineering Management, UT Arlington (GPA: 3.5)
**Certification:** Certified Scrum Product Owner (CSPO)
**Location:** Arlington, TX, USA
**Email:** saibhardwaj007@gmail.com
**Phone:** +1 (940) 344-3655
**LinkedIn:** [sai-kameshwar-sriadibhatla](https://www.linkedin.com/in/sai-kameshwar-sriadibhatla/)

## Key Highlights

- **5+** Professional Certifications (CSPO, ASANA, Project Management)
- **15%** Defect Reduction through DMAIC processes
- **12%** Operational Cost Savings
- **3.5 GPA** in Engineering Management
- Expertise in Agile/Scrum, Six Sigma, Project Management, Data Analytics

## Project Structure

```
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   └── js/
│       └── main.js         # JavaScript functionality
├── data/                   # JSON data files
│   ├── site-config.json
│   ├── navigation.json
│   ├── hero.json
│   ├── about.json
│   ├── work.json
│   ├── skills.json
│   ├── contact.json
│   ├── footer.json
│   └── profile.json
├── package.json            # npm configuration
└── README.md              # This file
```

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select branch (main) and root directory
4. Save and wait for deployment

### Netlify
1. Connect repository
2. Build command: (leave empty)
3. Publish directory: `/`
4. Deploy

### Vercel
```bash
vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized CSS and JavaScript
- Lazy loading for images
- Smooth 60fps animations
- Fast initial page load
- Responsive images

## License

© 2025 Sai Kameshwar Sriadibhatla. All rights reserved.

---

**Built with dedication and modern web technologies** 🚀
