# Design System - GetTix

This document outlines the design system used across all framework implementations (React, Vue.js, and Twig).

## Colors

### Primary Colors
- **Primary (Deep Green)**: `#059669` - Main brand color
- **Primary Hover**: `#047857` - Darker shade for hover states
- **Primary Light**: `#d1fae5` - Light tint for backgrounds

### Accent Colors
- **Accent (Gold/Amber)**: `#d97706` - Secondary brand color
- **Accent Hover**: `#b45309` - Darker shade for hover states
- **Accent Light**: `#fef3c7` - Light tint for backgrounds

### Status Colors
- **Open**: `#059669` (Green) - bg-status-open/10 for light, text-status-open for dark
- **In Progress**: `#d97706` (Amber/Gold) - bg-status-in-progress/10 for light, text-status-in-progress for dark
- **Closed**: `#6b7280` (Gray) - bg-status-closed/10 for light, text-status-closed for dark

### Neutral Colors
- **White**: `#ffffff`
- **Black**: `#0f172a`
- **Gray Scale**:
  - 50: `#f8fafc`
  - 100: `#f1f5f9`
  - 200: `#e2e8f0`
  - 300: `#cbd5e1`
  - 400: `#94a3b8`
  - 500: `#64748b`
  - 600: `#475569`
  - 700: `#334155`
  - 800: `#1e293b`
  - 900: `#0f172a`

## Typography

### Font Family
- **Primary**: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Fallback**: System fonts

### Font Sizes
- **H1**: 3rem / 48px
- **H2**: 2.25rem / 36px
- **H3**: 1.875rem / 30px
- **H4**: 1.5rem / 24px
- **H5**: 1.25rem / 20px
- **H6**: 1rem / 16px
- **Body**: 1rem / 16px
- **Small**: 0.875rem / 14px

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## Layout

### Container
- **Max Width**: 1440px
- **Padding**:
  - Mobile: 16px (1rem)
  - Desktop: 32px (2rem)
- **Centering**: `margin: 0 auto`

### Spacing
- **Small**: 8px (0.5rem)
- **Medium**: 16px (1rem)
- **Large**: 24px (1.5rem)
- **XLarge**: 32px (2rem)
- **XXLarge**: 48px (3rem)

### Border Radius
- **Small**: 6px
- **Medium**: 8px
- **Large**: 12px
- **XLarge**: 16px
- **Full**: 9999px (for circles)

## Components

### Buttons

**Primary Button**
- Background: Primary color (#059669)
- Text: White
- Hover: Primary Hover (#047857)
- Padding: 12px 24px
- Border Radius: 8px
- Font Weight: 500
- Font Size: 14px

**Secondary Button**
- Background: White
- Border: 1px solid Gray-300
- Text: Gray-700
- Hover: Gray-50
- Same padding and styling as primary

**Danger Button**
- Background: Red-600 (#dc2626)
- Text: White
- Hover: Red-700 (#b91c1c)

### Status Badges

All status badges use:
- Padding: 8px 12px
- Border Radius: 9999px (pill shape)
- Font Size: 14px
- Font Weight: 500
- Text Transform: Capitalize

**Open Badge**
- Background: status-open with 10% opacity
- Text: status-open color

**In Progress Badge**
- Background: status-in-progress with 10% opacity
- Text: status-in-progress color

**Closed Badge**
- Background: status-closed with 10% opacity
- Text: status-closed color

### Form Inputs

- Border: 1px solid Gray-300
- Border Radius: 8px
- Padding: 10px 16px
- Focus: Ring 2px, Primary color
- Error State: Red-500 border

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Shadows

- **Small**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Medium**: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- **Large**: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- **XLarge**: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`

## Accessibility

- **Focus States**: 2px outline with Primary color and 2px offset
- **Color Contrast**: Meets WCAG AA standards
- **Interactive Elements**: Minimum 44x44px touch target
- **Semantic HTML**: Proper heading hierarchy and landmark regions

## Icons

- **Stroke Width**: 2px
- **Stroke Linecap**: round
- **Stroke Linejoin**: round
- **ViewBox**: 0 0 24 24 (for Heroicons)

## Animations

- **Transition**: 150ms ease-in-out
- **Hover Scale**: 1.05 for interactive elements
- **Loading Spinner**: 1s linear infinite

## Hero Section

- **Wavy Background**: SVG path with gradient
- **Decorative Circles**: Multiple overlapping circles with blur effects
- **Colors**: Primary gradient (from-primary via-emerald-600 to-green-700)
- **Overlay**: rgba(255, 255, 255, 0.1-0.3)

## Card Components

- **Background**: White
- **Border**: 1px solid Gray-100
- **Border Radius**: 12px
- **Padding**: 24px
- **Shadow**: Large
- **Hover**: Shadow XL
