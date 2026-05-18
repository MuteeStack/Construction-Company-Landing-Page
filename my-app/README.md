# Construction Company Website

A modern, responsive website built with Next.js, React, and Tailwind CSS for a professional construction company.

## Features

- **Responsive Design** - Optimized for all devices with a 67% desktop scale on large screens
- **Dynamic Pages** - Home, About, Services, Projects, News, Team, and Contact sections
- **News/Blog System** - Integrated news/blog functionality with dynamic routing
- **Modern UI Components** - Reusable components including marquee, navigation, header, and footer
- **Smooth Animations** - Fade, scale, and slide animations with stagger effects
- **SEO Optimized** - Built with Next.js for optimal SEO performance

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 16.2.4
- **UI Library**: [React](https://react.dev) 19.2.4
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) 5.6.0
- **Language**: TypeScript

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
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

## Design Tokens

The site uses a professional color palette defined in [app/globals.css](app/globals.css):

- **Primary**: Gold (#f2be2f)
- **Accent**: Dark Blue (#1d2730)
- **Background**: Light Beige (#faf8f4)
- **Surface**: White (#ffffff)

## Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Next.js and optimize settings
4. Your site will be live in seconds

### Deploy on Other Platforms

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other hosting options.

## Development Tips

- Edit pages in `app/` and changes will hot-reload
- Components are located in `app/components/`
- Global styles and animations are in `app/globals.css`
- Use TypeScript for type safety

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## Support

For questions or support, please open an issue on GitHub or contact the project maintainer.

---

Built with ❤️ using Next.js and modern web technologies.
