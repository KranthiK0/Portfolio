# 🚀 Kranthi Katamouni - AI Engineer Portfolio

A modern, responsive portfolio website showcasing expertise in Artificial Intelligence, Machine Learning, RAG architectures, and LLM systems.

## ✨ Features

- **Modern Dark Theme** with AI/ML focused design
- **Fully Responsive** - Optimized for all screen sizes (Mobile, Tablet, Desktop)
- **Interactive Animations** - Smooth transitions, scroll reveals, and hover effects
- **AI/ML Themed** - Custom SVG graphics for neural networks, data science, and deep learning
- **Dynamic Navigation** - Smooth page transitions with sidebar auto-hide
- **Typewriter Effect** - Animated title cycling through roles
- **Neural Network Background** - Animated particle system
- **Portfolio Sections**:
  - About Me with AI hero section
  - Resume with timeline and skills
  - Portfolio with project filtering
  - Articles (Medium integration ready)
  - Contact form

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, Animations
- **JavaScript (ES6+)** - Interactive features, animations
- **Ionicons** - Icon library
- **Google Fonts** - Poppins font family

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vcard-personal-portfolio-master.git
   cd vcard-personal-portfolio-master
   ```

2. **Run locally**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx http-server -p 8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🚀 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository** on GitHub (or use existing)
2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **main** branch
   - Select **/ (root)** folder
   - Click **Save**
   - Your site will be live at: `https://yourusername.github.io/your-repo-name/`

### Method 2: Using GitHub CLI

```bash
gh repo create your-portfolio --public
git push -u origin main
gh repo view --web
# Then enable Pages in Settings
```

## 📁 Project Structure

```
vcard-personal-portfolio-master/
│
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # All styles and responsive breakpoints
│   ├── js/
│   │   └── script.js       # Interactive features and animations
│   └── images/
│       ├── *.svg           # Custom AI/ML themed SVGs
│       └── *.jpeg          # Profile images
│
├── README.md               # This file
├── .gitignore             # Git ignore rules
└── FUTURE_ENHANCEMENTS.md  # Enhancement ideas
```

## 🎨 Customization Guide

### Update Personal Information

1. **Name & Title** - Edit `index.html` line 55-57
2. **Contact Info** - Update sidebar contact links (lines 74-114)
3. **About Section** - Modify about text (lines 259-276)
4. **Experience** - Update timeline items in Resume section
5. **Skills** - Adjust skill bars and percentages
6. **Projects** - Add/remove portfolio items
7. **Medium Link** - Update Medium profile URL in Articles section

### Color Theme

Edit CSS variables in `assets/css/style.css` (lines 18-112):
- `--orange-yellow-crayola` - Primary accent color
- `--eerie-black-2` - Card backgrounds
- `--jet` - Borders and dividers

### Responsive Breakpoints

Breakpoints are defined in `assets/css/style.css`:
- **450px** - Small tablets
- **580px** - Tablets
- **768px** - Large tablets
- **900px** - Tablet landscape
- **1024px** - Desktop
- **1250px** - Large desktop

## 🔧 Future Enhancements

See `FUTURE_ENHANCEMENTS.md` for detailed enhancement ideas including:
- Dark/Light theme toggle
- Multi-language support
- Blog integration
- Analytics integration
- Performance optimizations
- And more...

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Kranthi Katamouni**
- Email: kranthigoud975@gmail.com
- LinkedIn: [kranthi-katamouni](https://www.linkedin.com/in/kranthi-katamouni/)
- GitHub: [KranthiK0](https://github.com/KranthiK0)
- Medium: [@kranthigoud975](https://medium.com/@kranthigoud975)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio templates
- Icons by [Ionicons](https://ionic.io/ionicons)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

**Last Updated:** January 2025


