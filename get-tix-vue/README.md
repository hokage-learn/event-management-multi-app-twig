# GetTix - Vue.js Implementation

A modern ticket management web application built with Vue.js, featuring user authentication, ticket CRUD operations, and a responsive design system.

## 🎯 Frameworks and Libraries

- **Vue.js 3** - Progressive JavaScript framework with Composition API
- **Vite** - Next-generation frontend build tool
- **Vue Router** - Official router for Vue.js
- **Pinia** - State management library for Vue
- **Tailwind CSS** - Utility-first CSS framework
- **Bricolage Grotesque & Raleway** - Custom font families

## 🚀 Setup and Execution

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Navigate to the Vue directory:
```bash
cd get-tix-vue
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be available in the `dist` directory.

## 🎨 Design System

### Color Palette

- **Primary**: Royal Blue (#2563eb) - Main brand color
- **Accent**: Purple (#7c3aed) - Secondary actions
- **Secondary**: Pink (#ec4899) - Highlights
- **Status Colors**:
  - Open: Blue (#2563eb)
  - In Progress: Purple (#7c3aed)
  - Closed: Gray (#6b7280)

### Typography

- **Headings**: Bricolage Grotesque
- **Body Text**: Raleway

### Layout

- **Max Width**: 1440px (centered)
- **Responsive Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 📁 Project Structure

```
get-tix-vue/
├── src/
│   ├── assets/          # Static assets (images, SVG)
│   ├── components/      # Reusable Vue components
│   │   ├── sections/   # Landing page sections
│   │   └── Navbar.vue  # Navigation component
│   ├── stores/          # Pinia stores
│   │   ├── auth.js     # Authentication state
│   │   └── tickets.js  # Tickets state
│   ├── router/          # Vue Router configuration
│   ├── views/           # Page components
│   │   ├── LandingPage.vue
│   │   ├── LoginPage.vue
│   │   ├── SignupPage.vue
│   │   ├── Dashboard.vue
│   │   └── TicketManagement.vue
│   └── main.js          # Application entry point
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## 🔐 Authentication

### Test Credentials

**Demo Admin Account:**
- Email: `admin@gettix.com`
- Password: `password123`

### New User Registration

Users can create new accounts via the Signup page. Each user will:
- Have their own unique session stored in `localStorage` under `ticketapp_session`
- See only their own tickets (user-specific data isolation)
- Be able to log out and log back in with their credentials

### Session Management

- Sessions are stored in `localStorage` with key: `ticketapp_session`
- User data is stored in `localStorage` with key: `ticketapp_users`
- On logout, the session is cleared and user is redirected to landing page

## 🎫 Ticket Management

### Features

- **Create**: Add new tickets with title, description, status, and priority
- **Read**: View tickets in table or card layout
- **Update**: Edit existing ticket details
- **Delete**: Remove tickets with confirmation
- **Search**: Filter tickets by search query
- **Filter**: Filter tickets by status (all, open, in_progress, closed)

### Validation Rules

- **Title**: Required field
- **Status**: Must be one of: "open", "in_progress", "closed"
- **Description**: Optional
- **Priority**: Optional (low, medium, high)

### Error Handling

- Inline validation errors displayed beneath form fields
- Real-time validation on user input
- Clear error messages for invalid inputs
- Unauthorized access redirects to login page

## 🎨 UI Components

### Landing Page Sections

1. **Hero Section**: Gradient background with call-to-action
2. **About Section**: Two-column layout with dashboard mockup
3. **Features Section**: Grid of feature cards
4. **Testimonials Section**: User testimonials with ratings
5. **FAQ Section**: Collapsible FAQ items
6. **Footer**: Links, social media, and legal information

### Special Effects

- **Parallax Scrolling**: Background elements move at different speeds
- **Wavy Background**: SVG-based wave at hero section bottom
- **Decorative Circles**: CSS-based circular decorative elements
- **Gradient Backgrounds**: Subtle gradients for depth

## 🔒 Security & Authorization

- Protected routes require valid session token
- Unauthorized users redirected to login page
- User-specific data isolation (each user sees only their tickets)
- Session tokens stored securely in `localStorage`

## 📱 Responsive Design

### Mobile (< 768px)
- Stacked navigation menu
- Collapsible mobile menu
- Single-column layouts
- Touch-friendly button sizes

### Tablet (768px - 1024px)
- Two-column grid layouts
- Expanded navigation
- Optimized card layouts

### Desktop (> 1024px)
- Multi-column grids
- Full navigation menu
- Maximum 1440px container width
- Enhanced hover states

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states for interactive elements
- Sufficient color contrast ratios

## 🐛 Known Issues

- None at this time

## 🧪 Testing

To test the application:

1. Start the development server
2. Register a new user or use demo credentials
3. Create, edit, and delete tickets
4. Test authentication flow (login/logout)
5. Verify user-specific ticket isolation
6. Test responsive behavior on different screen sizes

## 📝 Next Steps

Future enhancements could include:
- API integration with backend
- Real-time collaboration features
- Advanced analytics and reporting
- File attachments for tickets
- Email notifications
- Team collaboration features

## 🤝 Contributing

This is a demonstration project. For production use, consider:
- Adding proper backend API
- Implementing proper authentication
- Adding comprehensive error handling
- Writing unit and integration tests
- Setting up CI/CD pipeline

## 📄 License

This project is for demonstration purposes.
