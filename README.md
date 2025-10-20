# ThailandBlacklistLawyer.com

A professional law firm website for Dr. Sutus Kumvilai, specializing in blacklist removal and visa appeals in Thailand.

## Features

- **Multilingual Support**: Thai, English, and Chinese
- **Responsive Design**: Mobile-first approach for all devices
- **Professional Layout**: Clean, modern design with legal industry focus
- **Interactive Components**: Language switcher, contact forms, booking system
- **SEO Optimized**: Proper meta tags and structured content

## Sections

1. **Hero Section**: Main headline with call-to-action buttons
2. **Pain Points**: Common problems clients face
3. **Services**: Detailed legal services offered
4. **How We Work**: Step-by-step process explanation
5. **Fees**: Transparent pricing structure
6. **Consultation**: Booking form and contact information
7. **About**: Dr. Sutus Kumvilai's credentials and experience
8. **Final CTA**: Call-to-action with trust indicators

## Technology Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Responsive Design**: Mobile-first approach

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

The website is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any hosting service that supports Node.js

## Customization

### Adding New Languages
1. Update `src/data/translations.ts` with new language translations
2. Add language option to `src/contexts/LanguageContext.tsx`
3. Update language switcher in `src/components/Header.tsx`

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components for design changes
- Colors and themes can be customized in `tailwind.config.js`

### Content Updates
- Update translations in `src/data/translations.ts`
- Modify component content directly in respective files
- Update metadata in `src/app/layout.tsx`

## Contact Information

- **Phone**: +66 81 234 5678
- **Email**: info@thailandblacklistlawyer.com
- **LINE**: @lawyer
- **Office**: Bangkok, Thailand

## License

© 2024 ThailandBlacklistLawyer. All rights reserved.