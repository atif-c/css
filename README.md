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
	--theme-accent-chroma: 0.2; /* 0+ — clamped to a safe ceiling, see below */

	/* Update chroma ceilings when changing hue */
	--dark-accent-chroma-max: 0.21;
	--light-accent-chroma-max: 0.15;

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

### Chroma & gamut safety

Not every (hue, lightness, chroma) combination is displayable in sRGB. The safe
chroma ceiling depends on **both hue and lightness**.

Chroma is clamped against per-hue `*-chroma-max` variables. If you change accent
hue or state hues, update the matching `*-chroma-max` variable(s) (see table below).

**Hue reference** (includes the safe chroma ceiling at each theme's default accent lightness):

| Color  | Hue | Max chroma (dark, L 0.65) | Max chroma (light, L 0.45) |
| ------ | --- | ------------------------- | -------------------------- |
| Pink   | 0   | 0.26                      | 0.18                       |
| Red    | 10  | 0.24                      | 0.18                       |
| Orange | 40  | 0.20                      | 0.14                       |
| Yellow | 100 | 0.14                      | 0.09                       |
| Green  | 140 | 0.21                      | 0.15                       |
| Blue   | 220 | 0.12                      | 0.08                       |

**Chroma reference** (once within the safe ceiling above):

| Range | Effect                |
| ----- | --------------------- |
| 0     | Gray (no color)       |
| 0.1   | Muted / pastel        |
| 0.2+  | Vibrant (recommended) |

### Contrast & accessibility

#### Border contrast

`--border-subtle`, `--border-default`, and `--border-strong` are intentionally
low-contrast for decorative dividers and non-interactive edges (cards, section
separators, etc.). They do not meet WCAG 1.4.11 ("Non-text Contrast") requirements
for interactive controls.

For interactive components (inputs, buttons), use `--border-interactive` instead.
It meets 3:1 contrast against `--surface-base` in both themes. Re-check contrast
if you customize `--dark-surface-base` or `--light-surface-base`.

#### Text on accent backgrounds

`--text-primary` may not have sufficient contrast against `--accent`. Use
`--accent-foreground` instead, which defaults to `--surface-1` for safe contrast
in both themes. Re-check if you customize `--dark-accent-base-lightness` or
`--light-accent-base-lightness` significantly.

## Tokens

All tokens are CSS custom properties available globally after import.

| Category        | Variables                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Surfaces        | `--surface-1` through `--surface-10`                                                                                                                |
| Text            | `--text-primary`, `--text-secondary`, `--text-tertiary`, `--text-disabled`                                                                          |
| Accent          | `--accent`, `--accent-hover`, `--accent-muted`, `--accent-alpha`, `--accent-alpha-hover`, `--accent-foreground`                                     |
| Semantic states | `--success`, `--warning`, `--error`, `--info` (each with a `--*-bg` variant)                                                                        |
| Borders         | `--border-subtle`, `--border-default`, `--border-strong`, `--border-interactive`, `--divider`                                                       |
| Overlays        | `--overlay`, `--overlay-light`, `--overlay-strong`, `--surface-alpha`, `--surface-alpha-light`, `--surface-alpha-strong`                            |
| Typography      | `--font-sans`, `--font-serif`, `--font-mono`, `--text-xs` through `--text-3xl`, `--font-light` through `--font-bold`, `--leading-*`, `--tracking-*` |
| Spacing         | `--space-px`, `--space-xs` through `--space-4xl`                                                                                                    |
| Border radius   | `--radius-none` through `--radius-full`                                                                                                             |
| Shadows         | `--shadow-none`, `--shadow-xs` through `--shadow-2xl`, `--shadow-inner`                                                                             |
| Transitions     | `--duration-instant` through `--duration-slower`, `--ease-*`, `--transition`, `--transition-colors`                                                 |
| Z-index         | `--z-base` through `--z-toast`                                                                                                                      |
| Containers      | `--container-s` through `--container-2xl`, `--container-fluid-s` through `--container-fluid-2xl`                                                    |

## License

Unlicense — public domain. See [LICENSE](./LICENSE). Versions 1.0.0–1.0.3, already
published to npm under MIT, remain available under those original MIT terms;
this change applies from the next published version onward.
