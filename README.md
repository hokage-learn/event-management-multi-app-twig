# Multi-Framework Ticket Management Web App

This repository contains three complete implementations of the GetTix ticket management application, each built with a different frontend technology:

- **React** - Modern component-based UI library
- **Vue.js** - Progressive JavaScript framework
- **Twig** - PHP templating engine

All three implementations share the same design system, features, and user experience while demonstrating mastery across different frontend technologies.

## 📁 Project Structure

```
event-ticketing/
├── get-tix/          # React Implementation
├── vue-tix/          # Vue.js Implementation (Coming Soon)
├── twig-tix/         # Twig/PHP Implementation (Coming Soon)
├── assets/           # Shared assets (SVG, images, etc.)
└── README.md         # This file
```

## 🚀 Quick Start

### React Implementation
- **Location**: `get-tix/`
- **Documentation**: [get-tix/README.md](./get-tix/README.md)
- **Setup**: `cd get-tix && npm install && npm run dev`

### Vue.js Implementation
- **Location**: `vue-tix/` (To be implemented)
- **Status**: Coming Soon

### Twig/PHP Implementation
- **Location**: `twig-tix/` (To be implemented)
- **Status**: Coming Soon

## 🎯 Shared Requirements

All implementations must adhere to:

### Core Features
- ✅ Landing page with wavy SVG background
- ✅ Authentication (Login/Signup)
- ✅ Dashboard with statistics
- ✅ Full CRUD ticket management

### Design Consistency
- Max-width: 1440px
- Wavy SVG background in hero
- Decorative circles (at least 2)
- Status colors: Green (open), Amber (in-progress), Gray (closed)
- Responsive design (mobile, tablet, desktop)

### Technical Requirements
- localStorage authentication (`ticketapp_session`)
- Protected routes
- Form validation with error messages
- Toast notifications
- User-specific data isolation

## 📋 Implementation Checklist

### React ✅
- [x] Landing page
- [x] Authentication
- [x] Dashboard
- [x] Ticket CRUD
- [x] Form validation
- [x] Protected routes
- [x] User isolation
- [x] README documentation

### Vue.js 🔄
- [ ] Landing page
- [ ] Authentication
- [ ] Dashboard
- [ ] Ticket CRUD
- [ ] Form validation
- [ ] Protected routes
- [ ] User isolation
- [ ] README documentation

### Twig 🔄
- [ ] Landing page
- [ ] Authentication
- [ ] Dashboard
- [ ] Ticket CRUD
- [ ] Form validation
- [ ] Protected routes
- [ ] User isolation
- [ ] README documentation

## 🧪 Test Credentials

### Demo Admin Account
- **Email**: `admin@gettix.com`
- **Password**: `password123`

## 🛠️ Technologies Used

### React
- React 19.1.1
- React Router DOM 7.9.4
- Formik 2.4.6
- Yup 1.7.1
- Tailwind CSS 3.4.17
- React-Toastify 11.0.5

### Vue.js (Coming Soon)
- Vue 3.x
- Vue Router
- Vuelidate / Yup
- Tailwind CSS

### Twig (Coming Soon)
- PHP 8.x
- Twig 3.x
- Composer

## 📝 Shared Assets

Common assets used across all implementations:
- Hero wavy background SVG
- Decorative circle elements
- Logo files
- Color palette definitions

Location: `/assets` folder

## 🎨 Design System

### Colors
- **Primary**: `#059669` (Deep Green)
- **Accent**: `#d97706` (Gold/Amber)
- **Status Open**: `#059669` (Green)
- **Status In Progress**: `#d97706` (Amber)
- **Status Closed**: `#6b7280` (Gray)

### Typography
- Font Family: Inter, system-ui
- Headings: Bold
- Body: Regular

### Spacing
- Container: 1440px max-width
- Padding: 16px mobile, 32px desktop
- Gap: 16px-32px

## 🔒 Security

All implementations use:
- localStorage for session management
- Route protection for authenticated pages
- User data isolation
- Form validation on client-side

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📚 Documentation

Each implementation includes a comprehensive README with:
- Installation instructions
- Project structure
- Available scripts
- Testing credentials
- Known issues
- Accessibility notes

## 🤝 Contributing

Each framework implementation is complete and independent. To add Vue.js or Twig implementations:

1. Create new directory (`vue-tix/` or `twig-tix/`)
2. Follow the same design system and requirements
3. Implement all features as per the checklist
4. Add comprehensive README

## 📄 License

This is a project for demonstration purposes.

## 🔗 Links

- React Implementation: [./get-tix/README.md](./get-tix/README.md)
- Vue.js Implementation: Coming Soon
- Twig Implementation: Coming Soon
