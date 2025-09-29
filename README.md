# Poof Marketing Website

A modern, SEO-optimized marketing website for Poof - magical bookkeeping automation for small businesses.

## ✨ Features

- **Next.js 14** with App Router for optimal SEO
- **Tailwind CSS** with custom Poof brand theme
- **TypeScript** for type safety
- **Responsive design** optimized for all devices
- **SEO optimized** with meta tags, sitemap, and robots.txt
- **Performance optimized** with Core Web Vitals in mind

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── demo/              # Demo request page
│   ├── features/          # Features page
│   ├── how-it-works/      # How it works page
│   ├── pricing/           # Pricing page
│   ├── resources/         # Resources/blog page
│   ├── trial/             # Trial signup page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Robots.txt
│   ├── sitemap.ts         # Sitemap
│   └── manifest.ts        # Web app manifest
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── FeatureSection.tsx # Features showcase
│   ├── ComparisonSection.tsx # Competitor comparison
│   ├── TestimonialSection.tsx # Customer testimonials
│   ├── CtaSection.tsx     # Call-to-action sections
│   └── Footer.tsx         # Site footer
└── lib/
    └── theme.ts           # Shared theme configuration
```

## 🎨 Design System

The website uses Poof's brand colors and design system:

- **Primary Color**: `#7c7aff` (magical purple)
- **Secondary Color**: `#6366f1` (deeper purple)
- **Accent Color**: `#3b82f6` (magical blue)
- **Font**: Inter
- **Border Radius**: 12px (magical borders)

## 🔧 Key Components

### Pages
- **Homepage**: Hero, features, comparison, testimonials, CTA
- **Features**: Detailed feature breakdown with benefits
- **Pricing**: Three-tier pricing with ROI calculator
- **How It Works**: Step-by-step process explanation
- **Trial Signup**: Lead capture form with validation
- **Demo Request**: Demo scheduling form
- **Resources**: Blog/content hub
- **About**: Company story and team

### Forms
- Trial signup with business information
- Demo request with scheduling preferences
- Newsletter subscription
- Contact forms

## 📊 SEO & Performance

- **Meta tags** optimized for target keywords
- **Sitemap** for search engine indexing
- **Robots.txt** for crawler guidance
- **Core Web Vitals** optimized
- **Mobile-first** responsive design
- **Performance budget** under 100kb first load JS

## 🎯 Target Keywords

- "AI bookkeeping software"
- "automated accounting for small business"
- "QuickBooks alternative"
- "small business bookkeeping automation"
- "AI financial management"

## 🚀 Deployment

The website is optimized for deployment on Vercel with Next.js:

1. Connect your repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main

## 📈 Analytics & Tracking

Ready for integration with:
- Google Analytics 4
- Google Search Console
- Facebook Pixel
- Other marketing tools

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create new directory in `src/app/`
2. Add `page.tsx` with metadata export
3. Update navigation in `Header.tsx`
4. Add to sitemap in `src/app/sitemap.ts`

## 📝 Content Strategy

The website targets small business owners looking for bookkeeping automation:

- **Pain points**: Manual bookkeeping, QuickBooks complexity, time consumption
- **Solutions**: AI automation, ease of use, time savings
- **CTAs**: Free trial, demo requests, resource downloads

## 🔐 Security

- No sensitive data stored client-side
- Forms ready for backend integration
- HTTPS recommended for production
- Content Security Policy headers recommended

## 📞 Support

For questions about the website implementation, contact the development team.

---

Built with ❤️ for small businesses everywhere.