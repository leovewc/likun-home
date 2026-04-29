# LINKUN Design System

## Brand Direction

LINKUN is an independent AI software company. The site should feel like a premium product company, not a personal portfolio, blog template, or student project.

Core mood:
- Pure black foundation
- Liquid glass poster aesthetic
- High-contrast white typography
- Transparent glass panels with refractive depth
- Quiet, precise, futuristic, and premium

## Visual References

Primary reference: Framer-style product clarity, especially black backgrounds, strong hierarchy, minimal navigation, large headlines, and restrained CTAs.

Liquid glass reference: dark poster compositions with translucent glass sheets, sharp highlight edges, internal blur, soft refraction, and layered shadow.

## Color Rules

Use a mostly monochrome palette.

Required:
- Background: `#000000`
- Primary text: `#ffffff`
- Secondary text: translucent white, usually `rgba(255, 255, 255, 0.58-0.78)`
- Borders: translucent white, usually `rgba(255, 255, 255, 0.10-0.28)`
- Glass fill: translucent white over black, usually `rgba(255, 255, 255, 0.035-0.12)`

Accent colors must be rare and subtle:
- Warm refraction: soft amber only at low opacity
- Cold refraction: soft blue-white only at low opacity

Avoid:
- Dominant blue-purple gradients
- Bright rainbow colors
- Flat gray panels
- Beige, brown, or saturated orange themes

## Glass Treatment

Every major surface should feel like glass:
- `backdrop-filter: blur(24px-36px) saturate(140%-170%)`
- Thin translucent border
- Inner top highlight
- Subtle lower shadow
- Soft glow only on hover or hero focal elements

Glass panels should have visible depth:
- Use layered backgrounds
- Add `::before` highlight streaks
- Add `::after` subtle internal sheen
- Keep border radius at `8px`

## Layout Principles

Desktop:
- Large first-screen hero
- Strong left text block
- Right-side abstract liquid glass visual
- Wide spacing and restrained density
- Sections separated by faint hairlines

Mobile:
- No horizontal scroll
- Navigation stays compact
- CTAs stack full width
- Hero visual remains present but does not overwhelm content

## Typography

No external font CDN.

Use system sans:
`Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Rules:
- No negative letter spacing
- Hero headline can be very large, but must wrap cleanly
- Eyebrows use uppercase and slight positive tracking
- Body copy should be short, calm, and product-focused

## Buttons

CTA buttons should feel like premium product controls:
- Primary CTA: white glass/solid hybrid, black text
- Secondary CTA: transparent glass, white text
- Hover: slight upward movement, stronger border highlight, soft white glow
- Border radius: `8px`

Do not use loud gradients or oversized pill buttons.

## Content Voice

Use company language:
- "LINKUN builds..."
- "We design..."
- "Product systems..."
- "Operational software..."

Avoid personal positioning:
- "I am..."
- "My portfolio..."
- "Personal homepage..."

## Components

Required reusable components:
- `Navbar`
- `SiteFooter`
- `HeroSection`
- `GlassCard`
- `ProjectCard`
- `ReleaseCard`

Cards must stay consistent:
- Same radius
- Same glass background family
- Same border/highlight logic
- Compact tags
- Clear CTA row

## Motion

Use CSS only.

Allowed:
- Slow ambient liquid drift
- Hover lift
- Soft glow transitions

Avoid:
- Animation libraries
- Fast movement
- Scroll-jacking
- Distracting loops

## Do Not Do

- Do not make the site look like a blog.
- Do not return to colorful blue-purple gradients.
- Do not use external UI frameworks.
- Do not use external font CDNs.
- Do not add visual clutter or decorative gimmicks.
- Do not hide key product CTAs below the fold on desktop.
