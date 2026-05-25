# Construction Company Landing Page

![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)

A modern, responsive website built with Next.js, React, and Tailwind CSS for a professional construction company.

**🚀 Live Demo:** [https://building-construction-co.vercel.app/](https://building-construction-co.vercel.app/)

---

## Features

- **Responsive Design** - Optimized for all devices with a 67% desktop scale on large screens.
- **Dynamic Pages** - Home, About, Services, Projects, News, Team, and Contact sections.
- **News/Blog System** - Integrated news/blog functionality with dynamic routing.
- **Modern UI Components** - Reusable components including marquee, navigation, header, and footer.
- **Smooth Animations** - Fade, scale, and slide animations with stagger effects.
- **SEO Optimized** - Built with Next.js for optimal SEO performance.

---

## Tech Stack

- **Framework**: Next.js 16.2.4
- **Language**: TypeScript
- **Frontend**: React 19.2.4
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons 5.6.0

---

## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installations

**Clone the repository**
```bash
git clone <your-repo-url>
cd my-app
```

**Install Dependencies**
```bash
npm install
```

**Development**

```bash
# Run the development server
npm run dev
```

**Production Build**

```bash
npm run build
npm start
```
Visit: http://localhost:3000

---

## Repository Structure

```text
my-app/
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── news/                # News/blog section
│   ├── projects/            # Projects showcase
│   ├── services/            # Services page
│   ├── team/                # Team page
│   └── components/          # Reusable components
├── public/                  # Static files
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
└── package.json             # Project dependencies
```

---

## Design Tokens

The site uses a professional color palette defined in `app/globals.css`:

- **Primary**: Gold (#f2be2f)
- **Accent**: Dark Blue (#1d2730)
- **Background**: Light Beige (#faf8f4)
- **Surface**: White (#ffffff)

---

## Testing

Use ESLint to check code quality:
```bash
npm run lint
```

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.
