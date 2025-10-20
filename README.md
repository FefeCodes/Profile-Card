Profile Website

A responsive and accessible multi-page website built using HTML, CSS, and Vanilla JavaScript. It features a personal profile card, about page, and contact form with comprehensive form validation.

Features

Profile Page
- Real-time timestamp - Updates every second showing current time in milliseconds
- Personal information - Name, bio, hobbies, and dislikes
- Social links - Twitter, GitHub, and LinkedIn with hover effects
- Responsive design - Optimized for mobile, tablet, and desktop

About Page
- Personal bio - Detailed information about goals and aspirations
- Self-reflection - Areas of confidence and future notes
- Clean layout - Card-based design with hover effects

Contact Page
- Real-time form validation - Validates fields as you type
- Comprehensive validation - Name, email, subject, and message validation
- Visual feedback - Color-coded input states (error/success)
- Accessibility - Proper ARIA labels and keyboard navigation

Design Features

- Modern UI - Clean, professional design with subtle animations
- Responsive breakpoints - Mobile-first approach with tablet and desktop optimizations
- Consistent styling - Unified color scheme and typography across all pages
- Interactive elements - Hover effects, transitions, and micro-interactions
- Accessibility - WCAG compliant with proper focus states and screen reader support

Responsive Design

- Mobile (≤575px) - Stacked layout, optimized touch targets
- Tablet (576px-991px) - Balanced layouts with side-by-side content
- Desktop (≥992px) - Full feature layouts with generous spacing
- Cross-device testing - Consistent experience across all screen sizes

Tech Stack

- HTML5 - Semantic markup with proper structure
- CSS3 - Flexbox, Grid, and responsive design
- JavaScript - No frameworks, pure JavaScript
- Form Validation - Real-time client-side validation
- Accessibility - ARIA labels, keyboard navigation, screen reader support

Project Structure

```
Task 1/
├── profile/
│   ├── index.html          Main profile page
│   ├── styles.css          Profile page styles
│   └── index.js            Profile page JavaScript
├── about/
│   ├── about.html          About page
│   └── about.js            About page styles
├── contact/
│   ├── contact.html        Contact page
│   ├── contact.css         Contact page styles
│   └── contact.js          Contact form validation
├── asset/
│   └── Oluwaferanmi Aina.jpg  Profile image
└── README.md               Project documentation
```

Getting Started

Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

Installation
1. Clone the repository:
```bash
git clone https://github.com/FefeCodes/Profile-Card.git
cd Profile-Card
```

2. Open the main page:
```bash
 Open profile page
open profile/index.html

 Or open any specific page
open about/about.html
open contact/contact.html
```

Alternative: Live Server
If you have VS Code with Live Server extension:
1. Right-click on `profile/index.html`
2. Select "Open with Live Server"

Testing

All interactive elements include `data-testid` attributes for automated testing:
- `test-profile-card` - Main profile container
- `test-user-name` - User's name
- `test-user-avatar` - Profile image
- `test-user-time` - Current timestamp
- `test-contact-name` - Contact form name field
- `test-contact-email` - Contact form email field
- And others..

Form Validation

The contact form includes comprehensive validation:

Name Field
- Required field
- Minimum 2 characters
- Real-time validation

Email Field
- Required field
- Valid email format validation
- Real-time validation

Subject Field
- Required field
- Minimum 3 characters
- Real-time validation

Message Field
- Required field
- Minimum 10 characters
- Real-time validation

Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

License

This project is open source and available under the [MIT License](LICENSE).

Author

Aina Oluwaferanmi Ayomikun
- Twitter: [@Flexydotz17](https://x.com/Flexydotz17)
- GitHub: [@FefeCodes](https://github.com/FefeCodes)
- LinkedIn: [oluwaferanmiaina](https://www.linkedin.com/in/oluwaferanmiaina/)
