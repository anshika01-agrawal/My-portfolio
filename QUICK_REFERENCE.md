# 🎨 Portfolio Customization Quick Reference

## 🚀 Quick Deploy Steps

1. **Update Your Content** (See checklist below)
2. **Test Locally** - Open `index.html` in browser
3. **Commit to Git**
   ```bash
   git add .
   git commit -m "feat: updated portfolio content"
   git push origin main
   ```
4. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

## ✅ Essential Updates Checklist

### 1. Personal Information (index.html)

**Social Links (Around line 50-70)**
```html
<!-- Update these links -->
<a href="https://github.com/YOUR-USERNAME" target="_blank">
<a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank">
<a href="https://twitter.com/YOUR-HANDLE" target="_blank">
```

**Email Address (Around line 1200)**
```html
<!-- Find and replace -->
your.email@example.com
```

### 2. Profile Photo (index.html - Around line 140)

Replace this section:
```html
<div class="profile-placeholder">
    <i class="fas fa-user-circle"></i>
    <p class="placeholder-text">Your Photo Here</p>
</div>
```

With:
```html
<div class="profile-image">
    <img src="path/to/your/photo.jpg" alt="Anshika Agrawal" style="width: 100%; border-radius: 20px;">
</div>
```

### 3. Add More Skills (index.html - Skills Section)

Find the "Add more" placeholders and add:
```html
<div class="skill-item">
    <i class="fab fa-python"></i>
    <span>Your Skill Name</span>
</div>
```

### 4. Update Projects (index.html - Projects Section)

Each project card:
```html
<div class="project-card glass-effect">
    <div class="project-header">
        <div class="project-icon">🚀</div>
        <h3>Your Project Name</h3>
    </div>
    <p class="project-description">
        Your project description here...
    </p>
    <div class="project-tags">
        <span class="tag">Tech1</span>
        <span class="tag">Tech2</span>
    </div>
    <div class="project-links">
        <a href="YOUR-GITHUB-LINK" class="project-link bubble-btn">
            <i class="fab fa-github"></i> View Code
        </a>
    </div>
</div>
```

## 🎨 Color Customization (style.css)

**Change Main Colors (Top of style.css)**
```css
:root {
    --accent-purple: #a855f7;  /* Your preferred purple */
    --accent-cyan: #06b6d4;    /* Your preferred cyan */
    --accent-pink: #ec4899;    /* Your preferred pink */
}
```

## 📝 Content Sections to Fill

1. **About Section**
   - Personal introduction
   - Your story
   - Education details
   - Update stats (projects, hackathons, contributions)

2. **Skills Section**
   - Add your programming languages
   - List frameworks and tools
   - Include certifications

3. **Experience Section**
   - Add internships
   - Include part-time work
   - List volunteer experience

4. **Projects Section**
   - Feature your best 4-6 projects
   - Include GitHub links
   - Add demo links if available

5. **Contact Section**
   - Update email
   - Add phone (optional)
   - Update location
   - Social media links

## 🔧 Common Tasks

### Add a New Section
```html
<section id="new-section" class="section-container">
    <div class="section-header">
        <h2 class="section-title">
            <span class="section-number">06.</span> Section Name
        </h2>
        <div class="title-underline"></div>
    </div>
    <!-- Your content here -->
</section>
```

### Change Animation Speed
In `script.js`, find:
```javascript
new Typewriter(typewriterElement, texts, 100, 50, 2000);
//                                      ^^^  ^^  ^^^^
//                                      type delete pause
```

### Modify Particle Count
In `script.js`, find:
```javascript
this.particleCount = 60;  // Change this number
```

## 📱 Contact Form Setup

### Option 1: Formspree (Easiest)
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
    <!-- Your form fields -->
</form>
```

### Option 2: EmailJS
1. Sign up at emailjs.com
2. Add script:
```html
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
```
3. Update form handling in script.js

## 🐛 Troubleshooting

**Animations not working?**
- Check browser console for errors
- Ensure JavaScript is enabled
- Clear browser cache

**Styling broken?**
- Verify style.css is linked correctly
- Check Font Awesome CDN link
- Hard refresh (Ctrl+F5)

**Deployment failed?**
- Check all files are committed
- Verify vercel.json exists
- Check deployment logs in Vercel

## 📊 Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress images (TinyPNG)
   - Use appropriate sizes

2. **Reduce Particles**
   - Lower `particleCount` for slower devices
   - Adjust in script.js

3. **Lazy Load**
   - Add `loading="lazy"` to images
   - Defer non-critical scripts

## 🎯 SEO Optimization

Add to `<head>`:
```html
<!-- Open Graph Meta Tags -->
<meta property="og:title" content="Anshika Agrawal - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="your-preview-image.jpg">
<meta property="og:url" content="https://your-domain.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Anshika Agrawal - Portfolio">
<meta name="twitter:description" content="Your description">
<meta name="twitter:image" content="your-preview-image.jpg">
```

## 📈 Analytics Setup

### Vercel Analytics (Free)
1. Go to your Vercel project
2. Click "Analytics" tab
3. Enable Web Analytics
4. Add script to HTML (Vercel provides it)

### Google Analytics
```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Font Awesome Icons**: https://fontawesome.com/icons
- **Gradient Generator**: https://cssgradient.io/
- **Color Palette**: https://coolors.co/
- **Icon Search**: https://fontawesome.com/search
- **Formspree**: https://formspree.io/
- **EmailJS**: https://www.emailjs.com/

## 💡 Pro Tips

1. **Test on Multiple Devices** - Use Chrome DevTools device emulator
2. **Get Feedback** - Share with friends before making public
3. **Regular Updates** - Add new projects as you complete them
4. **Version Control** - Commit often with meaningful messages
5. **Backup** - Keep backups of working versions

## 🆘 Need Help?

- Check DEPLOYMENT_GUIDE.md for detailed deployment steps
- Review code comments in HTML, CSS, and JS files
- Search GitHub issues or create a new one
- Check Vercel documentation

---

Happy Coding! 🚀 Make this portfolio truly yours!
