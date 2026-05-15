/**
 * @atifc/css - Parametric CSS design token system
 *
 * This module provides CSS custom properties for:
 * - OKLCH-based color system
 * - Dark/light theme with automatic detection
 * - Typography, spacing, shadows, and layout tokens
 *
 * Import this module for its side effects (injects CSS into the page).
 *
 * @example
 * ```typescript
 * // Side-effect import (recommended)
 * import '@atifc/css';
 * ```
 */
declare module '@atifc/css' {
	const css: string;
	export default css;
}
