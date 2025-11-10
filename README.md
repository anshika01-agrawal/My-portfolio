# 🌟 Anshika Agrawal - Portfolio Website

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/anshika01-agrawal/My-portfolio)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Portfolio Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)

A modern, beautiful, and fully responsive portfolio website with stunning animated backgrounds, smooth interactions, and parallax effects - inspired by Techfest.org.

---

## ✨ Features

### 🎨 Visual Effects
- **Animated Gradient Background** - Custom Canvas-based particle system with 60 interactive particles
- **Parallax Scrolling** - Multi-layer parallax backgrounds moving at different speeds
- **Floating Geometric Shapes** - 6 animated shapes (circles, triangles, hexagons) with blur effects
- **Glass Morphism** - Modern frosted glass effects on cards and sections
- **Smooth Scroll Animations** - Elements fade in and slide up as you scroll
- **3D Hover Effects** - Cards transform and elevate on hover

### ⚡ Interactive Elements
- **Typewriter Effect** - Rotating text showing multiple roles (6 different titles)
- **Parallax Image Gallery** - College journey photos with depth-based scrolling
- **Sticky Navigation** - Fixed navbar with blur effect on scroll
- **Responsive Hamburger Menu** - Mobile-friendly navigation
- **Gradient Buttons** - Animated hover effects with color transitions
- **Contact Form** - Functional form with validation (backend integration ready)

### 📱 Responsive Design
- **Mobile First** - Optimized for all screen sizes (320px to 4K)
- **Tablet Friendly** - Special layouts for iPad and tablets
- **Desktop Enhanced** - Full-width layouts with maximum visual impact
- **Cross-browser Compatible** - Works on Chrome, Firefox, Safari, Edge

### 🚀 Performance
- **60 FPS Animations** - Smooth animations using CSS transforms and will-change
- **Lazy Loading** - Images and sections load on demand
- **Optimized Assets** - Compressed and optimized resources
- **Fast Load Times** - Under 2 seconds initial load

---

## 🎯 Sections Included

1. **Hero Section** - Eye-catching introduction with animated background and typewriter effect
2. **About Me** - Personal introduction with skills highlight and downloadable resume
3. **Skills** - Technical skills with visual progress indicators and category grouping
4. **Experience** - Timeline view of work experience and contributions
5. **Projects** - Portfolio showcase with live demos and GitHub links
6. **College Journey** - Parallax image gallery showcasing campus life
7. **Achievements** - Awards and accomplishments (Navonmesh Hackathon 4th Prize ₹10,000)
8. **Contact** - Contact form with social media links

---

## 🚀 Quick Start

### View Live Demo
🌐 **[View Portfolio](https://your-portfolio.vercel.app)** _(Update URL after deployment)_

### Local Development

**Option 1: Direct Browser**
```bash
# Clone the repository
git clone https://github.com/anshika01-agrawal/My-portfolio.git

# Navigate to directory
cd My-portfolio

# Open index.html in your browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

**Option 2: Local Server (Recommended)**
```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx http-server

# Then open: http://localhost:8000
```

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

**Method 1: GitHub Integration (Easiest)**
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Click "Add New Project"
4. Import `anshika01-agrawal/My-portfolio` repository
5. Click "Deploy" (Vercel auto-detects settings)
6. Done! Your site is live with auto-deployments on every push

**Method 2: Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=.
```

### Deploy to GitHub Pages
```bash
# Enable GitHub Pages in repository settings
# Select branch: main
# Select folder: / (root)
# Your site will be live at: https://anshika01-agrawal.github.io/My-portfolio
```

📖 **Detailed deployment guide**: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

## 🎨 Customization

### Quick Reference
See [QUICK_REFERENCE.md](QUICK_REFERENCE.md) for detailed customization instructions.

### Essential Updates Checklist
- [ ] **Personal Info** - Update name, title, bio in `index.html`
- [ ] **Profile Photo** - Replace placeholder with your photo
- [ ] **Social Links** - Update GitHub, LinkedIn, Twitter, Instagram URLs
- [ ] **Email Address** - Change `your.email@example.com` to your actual email
- [ ] **Resume** - Add your resume PDF and update download link
- [ ] **Projects** - Replace demo projects with your actual work
- [ ] **Skills** - Update skill levels and add/remove technologies
- [ ] **Experience** - Add your work experience and internships
- [ ] **College Photos** - Replace placeholder images in journey section
- [ ] **Achievements** - Update with your accomplishments
- [ ] **Contact Form** - Set up backend (FormSpree, EmailJS, or custom)
- [ ] **Favicon** - Add your custom favicon
- [ ] **Meta Tags** - Update SEO meta tags for better search visibility

### Background Pattern Options
7 alternative background patterns available! See [BACKGROUND_PATTERNS_GUIDE.md](BACKGROUND_PATTERNS_GUIDE.md)

**Available Patterns:**
1. Dot Pattern (subtle)
2. Grid Pattern (animated)
3. Hexagon Pattern (futuristic)
4. Circuit Board (pulsing)
5. Wave Pattern (flowing)
6. Matrix Rain (cyber)
7. Constellation (twinkling stars)

**Demo**: Open `background-patterns-demo.html` to preview all patterns

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)** - Classes, Modules, Async/Await

### APIs & Libraries
- **Canvas API** - Custom particle system and gradient animations
- **Intersection Observer API** - Scroll-triggered animations
- **Font Awesome 6.4.0** - Icons
- **Google Fonts** - Orbitron, Space Grotesk, Poppins

### Design Patterns
- Glass Morphism
- Parallax Scrolling
- Gradient Overlays
- 3D Transforms
- Smooth Scrolling

### Performance Optimizations
- CSS `will-change` property
- GPU-accelerated transforms
- Debounced scroll events
- Lazy loading
- Minification ready

---

## 📂 Project Structure

```
My-portfolio/
│
├── index.html                          # Main HTML file
├── style.css                           # Complete styling (1800+ lines)
├── script.js                           # JavaScript functionality
├── vercel.json                         # Vercel deployment config
│
├── README.md                           # This file
├── DEPLOYMENT_GUIDE.md                 # Deployment instructions
├── QUICK_REFERENCE.md                  # Customization guide
├── CHECKLIST.md                        # Personalization checklist
├── SUMMARY.md                          # Project overview
├── BACKGROUND_PATTERNS_GUIDE.md        # Background options guide
│
├── background-patterns-demo.html       # Live pattern preview
│
└── *.backup                            # Backup files
```

---

## 🎓 About the Developer

**Anshika Agrawal**  
🎯 3rd Year B.Tech Student | Full Stack Developer | Open Source Contributor

### 🏆 Achievements
- 🥉 **4th Prize** - Navonmesh Hackathon, SSIPMT Raipur (₹10,000)
- 🌟 **GSSOC'25** - Active contributor to GirlScript Summer of Code
- ✈️ **Aero Club Member** - Built autonomous drones and RC planes

### 💻 Skills
- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Python
- **Tools**: Git, VS Code, Figma
- **Interests**: Aeromodelling, Web Development, Open Source

### 📫 Connect With Me
- **GitHub**: [@anshika01-agrawal](https://github.com/anshika01-agrawal)
- **LinkedIn**: [Update Your LinkedIn]
- **Email**: your.email@example.com
- **Portfolio**: [Live Portfolio URL]

---

## 📄 License

This project is open source and available for personal and educational use.  
Feel free to use this template for your own portfolio!

**Attribution**: If you use this template, a link back to the original repository would be appreciated! ⭐

---

## 🤝 Contributing

Found a bug or have a feature suggestion?  
Feel free to open an issue or submit a pull request!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Changelog

### v1.0.0 (Current)
- ✅ Complete portfolio redesign with animated background
- ✅ Parallax depth effects and floating geometric shapes
- ✅ College journey parallax image gallery
- ✅ 7 alternative background pattern options
- ✅ Navonmesh Hackathon achievement added
- ✅ Dark theme (original, looks better!)
- ✅ Fully responsive design
- ✅ Vercel deployment ready

---

## 💡 Tips & Best Practices

1. **Images**: Use optimized images (WebP format, compressed)
2. **Colors**: Maintain consistent color scheme using CSS variables
3. **Fonts**: Limit to 2-3 font families for better performance
4. **Testing**: Test on multiple devices and browsers
5. **SEO**: Update meta tags for better search engine visibility
6. **Analytics**: Add Google Analytics or similar tracking
7. **Performance**: Run Lighthouse audit for optimization suggestions

---

## 🎉 Acknowledgments

- Inspired by [Techfest.org](https://techfest.org) design
- Icons by [Font Awesome](https://fontawesome.com)
- Fonts by [Google Fonts](https://fonts.google.com)
- Placeholder images by [Unsplash](https://unsplash.com)

---

## ⭐ Support

If you found this helpful, please consider:
- ⭐ **Starring the repository**
- 🍴 **Forking for your own portfolio**
- 📢 **Sharing with friends**
- 💬 **Providing feedback**

---

<div align="center">

### Made with 💙 by Anshika Agrawal

**[⬆ Back to Top](#-anshika-agrawal---portfolio-website)**

</div>
