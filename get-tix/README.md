# GetTix - Ticket Management Web App (React)

GetTix is a robust ticket management web application built with React, featuring a complete authentication system, dashboard analytics, and full CRUD operations for ticket management.

## 🚀 Frameworks and Libraries Used

### Core Framework
- **React** (v19.1.1) - UI library
- **React Router DOM** (v7.9.4) - Client-side routing
- **React Context API** - State management

### Form Management & Validation
- **Formik** (v2.4.6) - Form state management
- **Yup** (v1.7.1) - Schema-based validation

### UI & Styling
- **Tailwind CSS** (v3.4.17) - Utility-first CSS framework
- **PostCSS** (v8.5.6) - CSS processing
- **Autoprefixer** (v10.4.21) - Vendor prefix automation

### User Feedback
- **React-Toastify** (v11.0.5) - Toast notifications

### Build Tool
- **Vite** (v7.1.7) - Next-generation frontend tooling

### Development Tools
- **ESLint** (v9.36.0) - Code linting

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd get-tix
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
get-tix/
├── src/
│   ├── components/
│   │   ├── sections/        # Landing page sections
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── FeaturesSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   └── FAQSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   ├── AuthContext.jsx  # Authentication state management
│   │   └── TicketContext.jsx # Ticket CRUD operations
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── SignupPage.jsx
│   │   ├── Dashboard.jsx
│   │   └── TicketManagement.jsx
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── package.json
├── tailwind.config.js       # Tailwind configuration
└── vite.config.js           # Vite configuration
```

## 🎯 Features

### 1. Landing Page
- ✅ Hero section with wavy SVG background
- ✅ Multiple decorative circles
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Max-width 1440px container
- ✅ Call-to-action buttons (Login & Get Started)
- ✅ About, Features, Testimonials, and FAQ sections
- ✅ Consistent footer

### 2. Authentication
- ✅ Login page with form validation (Formik + Yup)
- ✅ Signup page with form validation
- ✅ Two-column layout (image left, form right)
- ✅ Back-to-home navigation links
- ✅ Toast notifications for feedback
- ✅ localStorage session management
- ✅ Protected routes

### 3. Dashboard
- ✅ Summary statistics (Total, Open, In Progress, Closed)
- ✅ Navigation to Ticket Management
- ✅ Logout functionality
- ✅ Max-width 1440px container
- ✅ Responsive card layout
- ✅ Quick action links

### 4. Ticket Management (CRUD)
- ✅ **Create**: Modal form to create new tickets
- ✅ **Read**: Display tickets in table or card view
- ✅ **Update**: Edit existing tickets with validation
- ✅ **Delete**: Delete tickets with confirmation modal
- ✅ Search functionality
- ✅ Status filtering
- ✅ Real-time validation
- ✅ Toast notifications for all actions

## 📋 Data Validation

### Mandatory Fields
- **Title**: Required, must not be empty
- **Status**: Must be one of: `open`, `in_progress`, `closed`

### Optional Fields
- **Description**: Optional, free text
- **Priority**: Optional, one of: `low`, `medium`, `high`

### Validation Feedback
- Inline error messages beneath form fields
- Toast notifications for success/error states
- Real-time validation on user input

## 🔒 Security & Authorization

- **Authentication**: localStorage with key `ticketapp_session`
- **Protected Routes**: Dashboard and Ticket Management require authentication
- **Auto-redirect**: Unauthenticated users redirected to `/auth/login`
- **Session Management**: User data stored in `ticketapp_users`
- **User Isolation**: Each user sees only their own tickets

## 🎨 Design System

### Colors
- **Primary (Deep Green)**: `#059669`
- **Accent (Gold/Amber)**: `#d97706`
- **Status Colors**:
  - Open: Green (#059669)
  - In Progress: Amber (#d97706)
  - Closed: Gray (#6b7280)

### Layout
- **Max Width**: 1440px centered
- **Responsive Breakpoints**: Tailwind defaults (sm, md, lg, xl)
- **Spacing**: Consistent padding and margins

### Accessibility
- Semantic HTML elements
- Visible focus states
- Sufficient color contrast
- Alt text for images
- Keyboard navigation support

## 🧪 Test User Credentials

### Demo Admin Account
- **Email**: `admin@gettix.com`
- **Password**: `password123`

### Create New Account
1. Navigate to `/auth/signup`
2. Fill in name, email, and password
3. New users are automatically logged in
4. Each user gets isolated ticket data

## 🚨 Error Handling

### Form Validation Errors
- Displayed inline beneath the respective field
- Red border on invalid fields
- Clear, descriptive error messages

### Authentication Errors
- Toast notification for invalid credentials
- Toast notification for session expiry
- Redirect to login page when unauthorized

### Data Errors
- Toast notification on failed operations
- Clear error messages
- Graceful degradation

## 🌐 State Management

### Context Providers
- **AuthProvider**: Manages user authentication state
- **TicketProvider**: Manages ticket CRUD operations

### Local Storage Keys
- `ticketapp_session`: Current user session
- `ticketapp_users`: All registered users
- `ticketapp_tickets`: All tickets (filtered by userId)

## 📱 Responsive Design

- **Mobile**: Single column, stacked layout, collapsible navigation
- **Tablet**: Two-column grid, optimized spacing
- **Desktop**: Three-column grid, full feature set

## ⚠️ Known Issues

- None currently identified

## 🔄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Notes

- Authentication is simulated using localStorage (no backend required)
- Tickets are persisted in localStorage per user
- All form validations run client-side using Yup schemas
- Toast notifications provide immediate user feedback
- Responsive design tested on mobile, tablet, and desktop viewports

## 🎯 Next Steps (Multi-Framework Implementation)

This is the React implementation. For Vue.js and Twig implementations, refer to:
- `/vue-tix` - Vue.js implementation
- `/twig-tix` - Twig/PHP implementation

Each implementation uses the same design system, validation rules, and user experience patterns for consistency across frameworks.
