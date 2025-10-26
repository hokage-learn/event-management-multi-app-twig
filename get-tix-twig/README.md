# GetTix - Vanilla JavaScript Implementation

A complete ticket management application built with pure vanilla JavaScript, vanilla CSS, and a template-based rendering system. This implementation demonstrates frontend development skills without relying on frameworks or build tools.

## 🚀 Technology Stack

- **Frontend**: Pure Vanilla JavaScript (ES6+)
- **Styling**: Vanilla CSS with CSS Variables
- **Templating**: JavaScript Template Literals
- **Routing**: Hash-based Client-Side Router
- **Storage**: localStorage API
- **No Build Tools**: Runs directly in the browser

## 📦 Installation

1. **Clone or navigate to the project**:
```bash
cd get-tix-twig
```

2. **Install dependencies** (only for serving):
```bash
npm install
```

3. **Start the development server**:
```bash
npm run serve
```

4. **Open in browser**:
Navigate to `http://localhost:3000`

**Alternative**: You can also open `public/index.html` directly in a web browser (file:// protocol) for basic functionality.

## 🎨 Design System

### Color Palette (Teal/Coral Theme)
- **Primary**: `#14b8a6` (Teal) - Main brand color
- **Accent**: `#f97316` (Coral/Orange) - Secondary highlights
- **Status Colors**:
  - Open: `#14b8a6` (Teal)
  - In Progress: `#f97316` (Coral)
  - Closed: `#64748b` (Slate)

### Typography
- **Font Family**: Inter, Segoe UI, system-ui, sans-serif
- **Headings**: Bold weight, tight line-height
- **Body**: Normal weight, relaxed line-height

### Responsive Breakpoints
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 📁 Project Structure

```
get-tix-twig/
├── public/
│   ├── index.html              # Main entry point
│   ├── css/
│   │   ├── variables.css       # Design system variables
│   │   ├── main.css            # Global styles & utilities
│   │   └── components.css      # Component-specific styles
│   ├── js/
│   │   ├── storage.js          # localStorage utilities
│   │   ├── toast.js            # Toast notifications
│   │   ├── auth.js             # Authentication logic
│   │   ├── tickets.js          # Ticket CRUD operations
│   │   ├── router.js           # Client-side routing
│   │   ├── templates.js        # HTML templates
│   │   └── app.js              # Main application logic
│   └── assets/
├── package.json
└── README.md
```

## ✨ Features

### Core Functionality
- ✅ **Landing Page** with hero section and product information
- ✅ **User Authentication** (Login/Signup) with validation
- ✅ **Dashboard** with ticket statistics and quick actions
- ✅ **Full CRUD Operations** for tickets
- ✅ **Protected Routes** with automatic redirects
- ✅ **Toast Notifications** for user feedback
- ✅ **User Data Isolation** (each user sees only their tickets)
- ✅ **Responsive Design** (mobile, tablet, desktop)
- ✅ **Form Validation** with inline error messages
- ✅ **Modal System** for create/edit operations
- ✅ **Client-Side Routing** with hash-based navigation

### Authentication
- **localStorage-based** session management
- **Demo Credentials**:
  - Email: `admin@gettix.com`
  - Password: `password123`
- New user registration with validation
- User-specific data isolation

### Ticket Management
- Create tickets with title, description, status, and priority
- Update existing tickets
- Delete tickets with confirmation
- View all tickets in table format
- Status badges (Open, In Progress, Closed)
- Priority levels (Low, Medium, High)
- Real-time statistics (Total, Open, In Progress, Closed)

## 🔧 Technical Implementation

### Modules Overview

#### `storage.js`
Wraps localStorage API with error handling and JSON serialization:
- `get(key)` - Retrieve and parse data
- `set(key, value)` - Stringify and store data
- `remove(key)` - Remove data
- `has(key)` - Check existence

#### `toast.js`
Simple toast notification system:
- `show(message, type, duration)` - Display toast
- `success(message)` - Success toast
- `error(message)` - Error toast
- `info(message)` - Info toast
- Auto-dismiss with animations

#### `auth.js`
Authentication management:
- `login(email, password)` - User login
- `signup(name, email, password)` - User registration
- `logout()` - Clear session
- `isAuthenticated()` - Check auth status
- `getCurrentUser()` - Get current user data

#### `tickets.js`
Ticket CRUD operations:
- `getTickets()` - Get all user tickets
- `createTicket(data)` - Create new ticket
- `updateTicket(id, updates)` - Update ticket
- `deleteTicket(id)` - Delete ticket
- `getStats()` - Get ticket statistics
- `searchTickets(query)` - Search functionality
- `filterTickets(filters)` - Filter by status/priority

#### `router.js`
Hash-based client-side routing:
- `register(path, handler, requiresAuth)` - Register route
- `navigate(path)` - Navigate to route
- `handleRoute()` - Process route changes
- Automatic auth checking
- Protected route support

#### `templates.js`
HTML template rendering:
- `renderNavbar()` - Dynamic navigation
- `renderLandingPage()` - Home page
- `renderLoginPage()` - Login form
- `renderSignupPage()` - Signup form
- `renderDashboardPage()` - Dashboard with stats
- `renderTicketsPage()` - Ticket list
- `renderTicketModal(ticket)` - Create/edit modal

#### `app.js`
Main application orchestrator:
- Route registration
- Page rendering
- Form initialization
- Global event handlers

### localStorage Keys
- `ticketapp_session` - Current user session
- `ticketapp_users` - Registered users array
- `ticketapp_tickets` - All tickets array

### Data Structure

**User Object**:
```javascript
{
  id: "timestamp",
  name: "User Name",
  email: "user@example.com",
  role: "user",
  createdAt: "ISO date string"
}
```

**Ticket Object**:
```javascript
{
  id: "timestamp",
  userId: "user-id",
  title: "Ticket title",
  description: "Description text",
  status: "open|in-progress|closed",
  priority: "low|medium|high",
  createdAt: "ISO date string",
  updatedAt: "ISO date string"
}
```

## 🎯 Usage Guide

### Getting Started
1. Open the app in your browser
2. Click "Get Started" or "Sign Up" to create an account
3. Or use demo credentials: `admin@gettix.com` / `password123`

### Creating Tickets
1. Navigate to Dashboard or Tickets page
2. Click "Create Ticket" or "Create New Ticket"
3. Fill in title (required), description, status, and priority
4. Click "Create" to save

### Managing Tickets
- **View**: All tickets displayed in table format
- **Edit**: Click "Edit" button on any ticket
- **Delete**: Click "Delete" and confirm
- **Filter**: Use status/priority dropdowns (future enhancement)

### Navigation
- Use the navbar links to navigate
- Hash-based URLs (#/dashboard, #/tickets, etc.)
- Protected pages redirect to login if not authenticated

## 🔒 Security Notes

- **Client-Side Only**: No server-side validation
- **localStorage**: Data persists in browser (not encrypted)
- **Demo Purpose**: Not suitable for production without backend
- **No Password Hashing**: Passwords not stored (demo only validates presence)
- **User Isolation**: Enforced client-side, but not secure

## 📱 Responsive Design

The application is fully responsive:
- **Mobile**: Single column, stacked navigation, touch-friendly
- **Tablet**: Two columns, optimized layouts
- **Desktop**: Full multi-column layouts, hover states

## 🎨 CSS Architecture

### CSS Variables
All design tokens defined in `variables.css`:
- Colors, typography, spacing, shadows, etc.
- Easy theming by changing CSS variables

### Utility Classes
Common utilities in `main.css`:
- Layout (flex, grid)
- Spacing (margin, padding)
- Typography (size, weight, color)
- Display, borders, shadows

### Component Styles
Reusable components in `components.css`:
- Buttons, forms, cards, badges
- Modal, table, toast, navbar
- Consistent styling across app

## 🚀 Performance

- **No Build Step**: Instant development
- **Vanilla JS**: No framework overhead
- **CSS Variables**: Fast theme switching
- **localStorage**: Instant data access
- **Client-Side Routing**: No page reloads

## 🔄 Future Enhancements

- Search and advanced filtering
- Sorting functionality
- Pagination for large datasets
- Export tickets (CSV/JSON)
- Dark mode toggle
- Keyboard shortcuts
- Accessibility improvements (ARIA labels)
- Progressive Web App (PWA) features

## 🐛 Known Limitations

- No server-side persistence
- No real authentication/authorization
- Limited to single browser/device
- No data encryption
- No real-time collaboration
- localStorage size limits (~5-10MB)

## 📄 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ⚠️ IE11 (not supported - uses ES6+)

## 🤝 Comparison with React/Vue Versions

### Similarities
- Same features and functionality
- Same data structure (localStorage)
- Same user experience
- Responsive design

### Differences
- **Technology**: Vanilla JS vs React/Vue frameworks
- **Styling**: Vanilla CSS vs Tailwind CSS
- **Color Scheme**: Teal/Coral vs Green/Gold (React) or Blue/Purple (Vue)
- **Build Process**: None vs Vite
- **State Management**: Direct DOM manipulation vs Virtual DOM
- **Routing**: Hash-based vs History API
- **File Size**: Smaller (no framework) vs Larger (with frameworks)

## 📝 License

This project is for demonstration purposes.

## 🔗 Related Implementations

- **React Version**: `../get-tix/` - React + Tailwind + React Router
- **Vue Version**: `../get-tix-vue/` - Vue 3 + Pinia + Vue Router

---

**Built with ❤️ using Vanilla JavaScript**

