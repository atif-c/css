# @atifc/css

[![GitHub Repo](https://img.shields.io/badge/GitHub-css-blue?&logo=github)](https://github.com/atif-c/css)
[![npm Package](https://img.shields.io/npm/v/@atifc/css?logo=npm)](https://npmjs.com/package/@atifc/css)
[![Demo](https://img.shields.io/badge/Demo-blue)](https://atif-c.github.io/css/demo)

A parametric CSS design token system built on OKLCH. Drop it into any project to get a complete, mathematically consistent set of color, typography, spacing, and layout tokens with automatic dark/light theming.

## Features

- OKLCH-based color system — entire palette derived from two parameters (hue and chroma)
- Dark/light theme with automatic detection via `prefers-color-scheme`
- Manual theme override via `data-theme="dark"` or `data-theme="light"` on `<html>`
- 10-step surface scale, 4-level text hierarchy, accent + semantic state colors
- Typography scale, font stacks, weights, line heights, and letter spacing
- Spacing scale, border widths, and border radius tokens
- Shadow and elevation tokens
- Transition durations and easing functions
- Named z-index layers
- Fixed and fluid (clamp-based) container widths
- Zero dependencies, pure CSS custom properties

## Browser Compatibility

Requires `oklch()` support:

| Browser | Minimum version  |
| ------- | ---------------- |
| Chrome  | 111+ (Mar 2023)  |
| Safari  | 16.4+ (Mar 2023) |
| Firefox | 113+ (May 2023)  |

## Installation

```bash
npm install @atifc/css
```

## Usage

### HTML

```html
<link rel="stylesheet" href="node_modules/@atifc/css/dist/root.css" />
```

### JS / TS (Vite, Webpack)

```ts
import '@atifc/css';
```

### CSS (PostCSS, Sass)

```css
@import '@atifc/css';
```

## Customisation

Override any of the theme parameters on `:root` after importing to reshape the entire token system:

```css
:root {
	/* Accent color */
	--theme-accent-hue: 140; /* 0–360 — see hue table below */
	--theme-accent-chroma: 0.25; /* 0+ — 0 = gray, 0.2+ = vibrant */

	/* Dark theme base values */
	--dark-surface-base: 0.15;
	--dark-text-base-lightness: 0.9;
	--dark-accent-base-lightness: 0.65;

	/* Light theme base values */
	--light-surface-base: 0.97;
	--light-text-base-lightness: 0.18;
	--light-accent-base-lightness: 0.45;
}
```

**Hue reference:**

| Color  | Hue | Notes             |
| ------ | --- | ----------------- |
| Pink   | 0   |                   |
| Red    | 10  | Needs chroma 0.2+ |
| Orange | 40  | Needs chroma 0.2+ |
| Yellow | 100 | Needs chroma 0.2+ |
| Green  | 140 | Needs chroma 0.2+ |
| Blue   | 220 |                   |

**Chroma reference:**

| Range   | Effect                        |
| ------- | ----------------------------- |
| 0       | Gray (no color)               |
| 0.1     | Muted / pastel                |
| 0.2+    | Vibrant (recommended)         |
| 0.5–1.0 | Neon / bright (use sparingly) |

## Tokens

All tokens are CSS custom properties available globally after import.

| Category        | Variables                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Surfaces        | `--surface-1` through `--surface-10`                                                                                                                |
| Text            | `--text-primary`, `--text-secondary`, `--text-tertiary`, `--text-disabled`                                                                          |
| Accent          | `--accent`, `--accent-hover`, `--accent-muted`, `--accent-alpha`, `--accent-alpha-hover`                                                            |
| Semantic states | `--success`, `--warning`, `--error`, `--info` (each with a `--*-bg` variant)                                                                        |
| Borders         | `--border-subtle`, `--border-default`, `--border-strong`, `--divider`                                                                               |
| Overlays        | `--overlay`, `--overlay-light`, `--overlay-strong`, `--surface-alpha`, `--surface-alpha-light`, `--surface-alpha-strong`                            |
| Typography      | `--font-sans`, `--font-serif`, `--font-mono`, `--text-xs` through `--text-3xl`, `--font-light` through `--font-bold`, `--leading-*`, `--tracking-*` |
| Spacing         | `--space-px`, `--space-xs` through `--space-4xl`                                                                                                    |
| Border radius   | `--radius-none` through `--radius-full`                                                                                                             |
| Shadows         | `--shadow-none`, `--shadow-xs` through `--shadow-2xl`, `--shadow-inner`                                                                             |
| Transitions     | `--duration-instant` through `--duration-slower`, `--ease-*`, `--transition`, `--transition-colors`                                                 |
| Z-index         | `--z-base` through `--z-toast`                                                                                                                      |
| Containers      | `--container-sm` through `--container-2xl`, `--container-fluid-sm` through `--container-fluid-2xl`                                                  |

## License

MIT
