# Tobams Group – Frontend Intern Assessment

A responsive implementation of the Tobams Group Frontend Intern Assessment design, built from the provided Figma design using Next.js and Tailwind CSS.

## 🔗 Links

- **Live Website:** [https://frontend-intern-asssesment.vercel.app]
- **GitHub Repository:** [https://github.com/AghoghoOgbotor18/frontend-intern-asssesment]
- **Figma Design:** [Frontend Intern Assessment](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment)

---

## 🛠️ Tech Stack

- Next.js (App Router)
- JavaScript
- Tailwind CSS
- React
- Next/Image
- Next/Font
- React Icons

---

## 📌 Project Overview

This project is a responsive, pixel-focused implementation of the provided Tobams Group Figma design.

The implementation focuses on translating the design system, spacing tokens, typography, colors, component structure, and responsive behavior from Figma into reusable Next.js components styled with Tailwind CSS.

The page was developed with the required responsive breakpoints in mind, including:

- Mobile – 425px
- Tablet – 768px
- Desktop – 1280px+

---

##  Sections Implemented

The page is broken into reusable sections and components to keep the codebase maintainable and organized.

The implemented sections include:

- Navigation
- Hero section
- Management Development Program
- Transformation Hub
- Training the Consultant
- Call-to-Action section
- Footer

Each major section is separated into its own component rather than keeping the entire page inside a single component.

---

## Design & Implementation Decisions

### Figma Design Tokens

The Figma design uses spacing tokens such as:

- `spacing/4`
- `spacing/8`
- `spacing/12`
- `spacing/16`
- `spacing/20`
- `spacing/24`
- `spacing/32`
- `spacing/40`
- `spacing/48`
- `spacing/64`

These were translated into their corresponding pixel/rem values and then mapped to Tailwind CSS utilities where appropriate.

For example:

| Figma | Value | Tailwind |
|---|---:|---|
| spacing/4 | 4px | `p-1`, `gap-1` |
| spacing/8 | 8px | `p-2`, `gap-2` |
| spacing/12 | 12px | `p-3`, `gap-3` |
| spacing/16 | 16px | `p-4`, `gap-4` |
| spacing/20 | 20px | `p-5`, `gap-5` |
| spacing/24 | 24px | `p-6`, `gap-6` |
| spacing/32 | 32px | `p-8`, `gap-8` |
| spacing/40 | 40px | `p-10`, `gap-10` |
| spacing/48 | 48px | `p-12`, `gap-12` |
| spacing/64 | 64px | `p-16`, `gap-16` |

Where a design value did not directly correspond to Tailwind's default spacing scale, an arbitrary Tailwind value was used where necessary to maintain fidelity to the Figma design.

### Responsive Design

The implementation uses Tailwind's responsive prefixes such as:

- `sm:`
- `md:`
- `lg:`

rather than custom media queries.

The layout adapts between mobile, tablet, and desktop while maintaining the intended spacing, typography, alignment, and component hierarchy from the design.

### Typography

The design uses:

- Nunito
- Nunito Sans

These fonts were loaded using Next.js font optimization rather than external CSS imports.

### Images

Images are handled using Next.js's `next/image` component where applicable to take advantage of image optimization and responsive image loading.

---

##  Development Assistance

Development assistance was used selectively during the implementation process, primarily for:

- Converting Figma spacing measurements into appropriate Tailwind CSS utilities.
- Understanding the relationship between Figma pixel values, `rem` units, and Tailwind's spacing scale.
- Performing spacing and unit calculations.
- Checking responsive layout approaches.
- Clarifying Tailwind utility equivalents for specific Figma design values.
- Reviewing component structure and implementation decisions.

The design interpretation, component organization, implementation, and final adjustments were made based on the provided Figma specification.

---

##  Challenges & Fixes

### Duplicate Navigation

During development, the navigation component was initially included both in `layout.js` and `page.js`, which resulted in the navigation appearing twice.

This was identified and corrected by ensuring the navigation is rendered in the appropriate location only once.

### Unit Conversion

Some implementation adjustments were required when translating Figma measurements into CSS/Tailwind units.

There were instances where pixel values and `rem`-based values were initially interchanged during implementation. These were reviewed and corrected where necessary to better align the implementation with the design tokens and Tailwind's spacing system.

### Figma → Tailwind Translation

One of the main implementation considerations was translating Figma concepts such as:

- Fixed width
- Fill
- Hug
- Spacing tokens
- Padding
- Gaps
- Responsive dimensions

into Tailwind's utility-based layout system.

For example, Figma's `Fill` behavior was generally represented using utilities such as `w-full` or `flex-1`, while `Hug` behavior was handled using natural content sizing or `w-fit` where appropriate.

---

## ♿ Accessibility

The implementation uses semantic HTML elements where appropriate, including:

- `<nav>`
- `<main>`
- `<section>`
- `<footer>`
- `<button>`
- `<a>`

Images include meaningful alternative text where applicable, and interactive elements are designed to remain keyboard accessible.

---

