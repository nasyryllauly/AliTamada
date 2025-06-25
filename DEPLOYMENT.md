# Deployment Guide for AliTamada Website

## Quick Deployment Options

### 1. Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect it's a Vite project
4. Deploy with one click

### 2. Netlify
1. Build the project: `pnpm build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### 3. GitHub Pages
1. Build the project: `pnpm build`
2. Push the `dist` folder contents to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

### 4. Traditional Web Hosting
1. Build the project: `pnpm build`
2. Upload all files from the `dist` folder to your web server
3. Configure your web server to serve `index.html` for all routes

## Build Commands

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Performance Optimizations Included

- ✅ Code splitting (vendor, UI components, main app)
- ✅ Terser minification for smaller bundle sizes
- ✅ Asset optimization and inlining
- ✅ Responsive images and modern formats
- ✅ SEO meta tags and Open Graph tags
- ✅ Proper favicon and theme color

## SEO Features

- ✅ Optimized meta tags for search engines
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card support
- ✅ Proper language declaration (Russian)
- ✅ Structured content with semantic HTML

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile responsive design
- ✅ Touch-friendly interface
- ✅ Progressive enhancement

## Contact Information

The website includes multiple contact methods:
- Phone: +7778 587 8284
- Telegram: @alitoganasov
- WhatsApp: Direct messaging links
- Instagram: @ali.toganasov

All contact buttons are properly configured and tested.

