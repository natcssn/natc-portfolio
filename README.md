# Nathaniel Christian Portfolio

Animated portfolio website built with React, TypeScript, GSAP, and Three.js.

This project includes:
- Hero and section-based storytelling UI
- GSAP-powered entrance and scroll animations
- Interactive Three.js scenes (character + tech stack)
- Project carousel and contact/social modules
- Vite-based fast local development and production builds

![Portfolio Preview](public/images/preview.png)

## Tech Stack

- React 18
- TypeScript
- Vite
- GSAP (production-safe usage)
- Three.js + @react-three/fiber + @react-three/drei
- @react-three/rapier (physics)
- CSS modules by section (component style files)

## Project Structure

Key folders and files:

- `src/components/`
- `src/components/Character/` (3D character scene + utils)
- `src/components/utils/` (animations, split text, scroll utilities)
- `public/models/` (HDR + encrypted model assets)
- `public/draco/` (DRACO decoder files)
- `README.md` (this file)

## Prerequisites

- Node.js 18+ (recommended 20+)
- npm 9+

Check versions:

```bash
node -v
npm -v
```

## Local Setup

1. Install dependencies:

```bash
npm ci
```

If `npm ci` fails due to lockfile mismatch, use:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open the local URL shown by Vite (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev`: start local development server (`vite --host`)
- `npm run lint`: run ESLint
- `npm run build`: TypeScript compile check + Vite production build
- `npm run preview`: preview production build locally

## Build and Production Preview

```bash
npm run lint
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Content Customization Guide

These files are the primary content-edit points:

- `src/components/Landing.tsx`: name, top-line role, rotating role text
- `src/components/About.tsx`: summary paragraph
- `src/components/WhatIDo.tsx`: capability cards + tags
- `src/components/Career.tsx`: timeline entries
- `src/components/Work.tsx`: project cards and links
- `src/components/Contact.tsx`: email, phone, education, social links
- `src/components/SocialIcons.tsx`: floating social icons + resume button URL

Resume button target is configured in:

- `src/components/SocialIcons.tsx`

Current target:

`https://www.canva.com/design/DAHC9_DmJEc/FdSnX7lAl3mbZmJrOH1FuQ/edit?utm_content=DAHC9_DmJEc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`

## Animation and 3D Notes

- Keep section class names intact (`.landing-section`, `.about-section`, `.work-section`, etc.) because animation triggers depend on them.
- Do not rename core wrappers used by scroll and intro animations.
- Character/tech scenes rely on assets under `public/models/` and `public/draco/`.

## Vercel Deployment (Go Live)

### 1. Push to GitHub

Ensure your latest code is committed and pushed.

### 2. Import Project in Vercel

1. Go to Vercel dashboard.
2. Click **Add New Project**.
3. Import your GitHub repository.

### 3. Build Settings

Use these values:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm ci` (or default)

### 4. Environment Variables

This project currently does not require environment variables for core functionality.

If you later add APIs, define variables in:
- Vercel Project Settings > Environment Variables
- `.env.local` for local development

### 5. Deploy

Click **Deploy**. After the first deployment, test all major sections.

## Post-Deploy Checklist

After deploying, verify:

- Landing animations load and run
- Scroll between sections works smoothly
- Work carousel arrows and dots work
- EdTek link opens correctly
- Social links open correct profiles
- Resume button opens Canva URL
- 3D assets load without 404 errors
- No console/runtime errors in browser devtools

## Troubleshooting

### Blank/failed 3D scene

- Check network requests for:
	- `/models/character.enc`
	- `/models/char_enviorment.hdr`
	- `/draco/draco_decoder.wasm`
- Confirm files exist in `public/`.

### Animations not triggering

- Ensure section class names were not changed.
- Verify no DOM structure-breaking edits in core section wrappers.
- Re-run build and check console warnings.

### Build fails locally

```bash
rm -rf node_modules
npm ci
npm run build
```

### Vercel deployment fails

- Confirm Node version compatibility (18+)
- Confirm `build` script exists in `package.json`
- Confirm output directory is `dist`

## License

This project is open source and available under the [MIT License](LICENSE).
