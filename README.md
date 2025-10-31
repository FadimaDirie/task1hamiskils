# Hami MiniMarket - Landing Page

A responsive, modern landing page for Hami MiniMarket, a community shop specializing in fresh fruits and vegetables. Built as part of the HamiSkills Internship Program - Web Development Track.

## 🌟 Project Overview

This landing page introduces Hami MiniMarket to potential customers, showcasing fresh produce offerings, company information, and providing a contact form for inquiries. The design emphasizes freshness, trust, and local community values.

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and hover effects
- **Interactive Navigation**: Smooth scrolling navigation with mobile-friendly hamburger menu
- **Product Showcase**: Visual grid displaying various fruits and vegetables
- **Contact Form**: Fully validated contact form with real-time error feedback
- **Back to Top Button**: Convenient navigation button that appears on scroll
- **Scroll Animations**: Products and sections animate as they come into view

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for better accessibility and SEO
- **CSS3**: 
  - Flexbox and CSS Grid for responsive layouts
  - CSS Variables for consistent theming
  - Animations and transitions for enhanced user experience
- **JavaScript (ES6+)**:
  - Form validation with real-time feedback
  - Smooth scrolling functionality
  - Intersection Observer API for scroll animations
  - Mobile menu toggle functionality

## 📁 Project Structure

```
hami-minimarket/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 How to Run the Project

### Option 1: Local Development (Simple)

1. **Clone or download** this repository to your local machine
2. **Navigate** to the project directory
3. **Open** `index.html` in your web browser
   - Simply double-click the file, or
   - Right-click and select "Open with" → your preferred browser

### Option 2: Using a Local Server (Recommended)

For the best experience and to avoid CORS issues, use a local server:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

#### Using Node.js (if installed):
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Run the server
http-server

# Or with a specific port
http-server -p 8000
```

#### Using VS Code:
Install the "Live Server" extension, then right-click on `index.html` and select "Open with Live Server".

### Option 3: Deploy to GitHub Pages

1. **Create a GitHub repository** and push your code
2. **Go to Settings** → **Pages**
3. **Select** the branch (usually `main` or `master`)
4. **Select** the folder (usually `/root`)
5. **Click Save** - Your site will be available at `https://yourusername.github.io/repository-name`

### Option 4: Deploy to Netlify

1. **Sign up** at [netlify.com](https://www.netlify.com)
2. **Drag and drop** your project folder, or
3. **Connect** your GitHub repository for automatic deployments
4. Your site will be live with a custom URL

## 🎨 Design Features

### Color Scheme
- **Primary Green**: `#4CAF50` - Represents freshness and nature
- **Primary Orange**: `#FF9800` - Adds warmth and energy
- **Secondary Green**: `#66BB6A` - Supporting green tones
- **Dark Green**: `#2E7D32` - For depth and contrast
- **Light Background**: `#F5F5F5` - Clean, modern feel

### Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 JavaScript Features

### 1. Form Validation
- Real-time validation on input blur
- Email format validation
- Minimum length requirements
- Visual feedback with color-coded borders
- Success message on valid submission

### 2. Back to Top Button
- Appears after scrolling 300px
- Smooth scroll to top
- Styled with hover effects

### 3. Mobile Menu
- Hamburger menu toggle
- Smooth slide-in animation
- Auto-closes on link click

### 4. Scroll Animations
- Products fade in as they enter viewport
- About section animated on scroll
- Uses Intersection Observer API for performance

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Code Quality

- **Semantic HTML5** elements for better accessibility
- **Clean CSS** with organized sections and comments
- **Modular JavaScript** with clear function separation
- **Comments** throughout for maintainability
- **Responsive** design using modern CSS techniques

## 🎯 Future Enhancements

Potential improvements for future iterations:
- Integration with backend API for form submissions
- Product filtering and search functionality
- Shopping cart feature
- User reviews section
- Newsletter subscription
- Image gallery/slider
- Multi-language support

## 📄 License

This project is created as part of the HamiSkills Internship Program.

## 👨‍💻 Author

Created as part of the **HamiSkills Internship Program - Web Development Track**.

---

**Live Demo**: [Your GitHub Pages or Netlify URL here]

**Repository**: [Your GitHub repository link here]

---

*For more information about HamiSkills, visit [www.hamiskills.dev](https://www.hamiskills.dev)*

