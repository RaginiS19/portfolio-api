# 💼 Ragini Shirwalkar - Portfolio Website

A modern, responsive portfolio website built with React that showcases my skills, projects, and professional experience. The website fetches data from a backend API to display dynamic content.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dynamic Content**: Fetches projects and skills from backend API
- **Interactive Elements**: Smooth scrolling, hover effects, and form handling
- **Performance Optimized**: Fast loading with optimized images and code
- **Accessibility**: Built with accessibility best practices

## 🧠 Tech Stack

- **Frontend**: React 18, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: React Icons
- **API Integration**: Fetch API for backend communication
- **Deployment**: Vercel (recommended)

## 🚀 Live Demo

🌐 **Deployed URL**: [https://ragini-portfolio.vercel.app](https://ragini-portfolio.vercel.app)

## 📋 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Section**: Personal information and professional background
3. **Projects Section**: Portfolio projects with technology tags
4. **Skills Section**: Technical skills with progress indicators
5. **Contact Section**: Contact form and contact information
6. **Footer**: Social links and additional information

## 🔧 API Integration

The website connects to the backend API at `https://ragini-portfolio-api.onrender.com`:

- **Projects Endpoint**: `/api/projects` - Fetches project data
- **Skills Endpoint**: `/api/skills` - Fetches skills data

### Fallback Data
If the API is unavailable, the website displays fallback content to ensure a complete user experience.

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/RaginiS19/portfolio-frontend.git
   cd portfolio-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js           # Hero section
│   ├── About.js          # About section
│   ├── Projects.js       # Projects showcase
│   ├── Skills.js         # Skills display
│   ├── Contact.js        # Contact form
│   ├── Footer.js         # Footer
│   └── *.css             # Component styles
├── App.js                # Main app component
├── App.css               # Global styles
└── index.js              # App entry point
```

## 🎨 Customization

### Colors
The website uses a consistent color scheme defined in CSS variables:
- Primary: `#667eea` to `#764ba2` (gradient)
- Secondary: `#2c3e50`
- Accent: `#ffd700`

### Content
Update the following files to customize content:
- `src/components/Hero.js` - Hero section content
- `src/components/About.js` - About section content
- `src/components/Contact.js` - Contact information
- `src/App.js` - Fallback project and skill data

### API Endpoints
Update the API URLs in `src/App.js` to connect to your own backend:
```javascript
fetch('https://your-api-url.com/api/projects')
fetch('https://your-api-url.com/api/skills')
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to connect your GitHub repository

### Other Platforms

The build folder can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🔍 Performance

- Optimized images and assets
- Lazy loading for better performance
- Minified CSS and JavaScript in production
- Efficient component rendering

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: ragini.shirwalkar@example.com
- **LinkedIn**: [Ragini Shirwalkar](https://linkedin.com/in/ragini-shirwalkar)
- **GitHub**: [@RaginiS19](https://github.com/RaginiS19)

---

⭐ **Star this repository if you found it helpful!**
