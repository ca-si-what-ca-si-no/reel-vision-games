# 2xWet Studio - Casino Games

Professional casino games development and integration for operators. Keno, Hilo, Crash games with customizable RTP.

## Project info

**Live Demo**: https://ca-si-what-ca-si-no.github.io/reel-vision-games/

## Technologies

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **React Router** - Client-side routing
- **shadcn/ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Development

### Prerequisites

- Node.js 20+ & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Getting Started

```sh
# Clone the repository
git clone git@github.com:ca-si-what-ca-si-no/reel-vision-games.git

# Navigate to the project directory
cd reel-vision-games

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

The project is automatically deployed to GitHub Pages on every push to the `main` branch using GitHub Actions.

### Manual Deployment

To deploy manually:

```sh
# Build the project
npm run build

# Deploy to GitHub Pages (handled by GitHub Actions)
git push origin main
```

## Project Structure

```
src/
├── assets/          # Images, logos, fonts
├── components/      # Reusable React components
├── contexts/        # React contexts (LanguageContext)
├── pages/           # Page components (Index, Keno, NotFound)
├── App.tsx          # Main app component with routing
└── main.tsx         # Application entry point

public/
├── lovable-uploads/ # Game screenshots and images
└── .nojekyll        # Prevents GitHub Pages from using Jekyll
```

## Features

- 🌍 **Multilingual Support** - Russian and English
- 📱 **Responsive Design** - Mobile, tablet, and desktop
- 🎮 **Game Showcase** - Interactive game previews
- 🔗 **Easy Integration** - Zero-effort integration for operators
- ⚡ **Fast Loading** - Optimized with Vite
- 🎨 **Modern UI** - Built with shadcn/ui and Tailwind CSS

## License

© 2025 2xWet Studio. All rights reserved.
