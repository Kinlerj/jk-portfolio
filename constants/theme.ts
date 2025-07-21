/**
 * Design System Theme Configuration
 * 
 * Core design tokens for the Joseph Kinler Portfolio:
 * - Color palette with semantic naming
 * - Typography scale and font families
 * - Spacing system based on 8px grid
 * - Consistent sizing and layout tokens
 */

// =============================================================================
// COLOR PALETTE
// =============================================================================

/**
 * Color palette for the application
 * Based on primary color (#4e5731) with tints and semantic shade naming
 */
export const Colors = {
	// Primary color scale based on your base color #4e5731
	primary: {
		harsh: '#1c200d',      // Harsh dark green for high contrast elements
		darkest: '#3b451b',    // Darkest shade for high contrast text
		darker: '#4e5731',     // Your original base/background color
		dark: '#626a48',       // Dark tint
		base: '#757c5f',       // Base tint
		light: '#898f76',      // Light tint
		lighter: '#9da28d',    // Lighter tint (your current textHighlight)
		lightest: '#b0b4a3',   // Lightest tint
		subtle: '#c4c7ba',     // Most subtle tint
	},

	// Neutral colors for backgrounds and borders
	neutral: {
		white: '#ffffff',      // Pure white
		lightGray: '#e8eae5',  // Light sage gray
		gray: '#E0E0E0',       // Standard gray
		darkGray: '#333333',   // Dark gray
		iconLight: '#687076',  // Icon color for light theme
		iconDark: '#9BA1A6',   // Icon color for dark theme
	},

	// Accent colors for contrast and visual hierarchy
	accent: {
		amber: '#B8860B',      // Dark goldenrod - complements sage green
		rust: '#A0522D',       // Sienna brown - earthy complement
		slate: '#708090',      // Slate gray - neutral complement
		navy: '#2F4F4F',       // Dark slate gray - professional
		copper: '#B87333',     // Copper brown - warm accent
		charcoal: '#36454F',   // Charcoal - sophisticated neutral
	},
} as const;

// Legacy exports for backward compatibility - mapped to new shade system
export const LegacyColors = {
	textHighlight: Colors.primary.lighter,   // #9da28d
	background: Colors.primary.darker,       // #4e5731
	white: Colors.primary.subtle,          // #d7d9d1
	placeholder: `rgba(${hexToRgb(Colors.primary.light)}, 0.7)`,
	border: `rgba(${hexToRgb(Colors.primary.subtle)}, 0.1)`,
	cardBackground: Colors.neutral.darkGray,
	skillBarBackground: Colors.neutral.gray,
	skillBarFill: Colors.primary.darkest,
} as const;

// Helper function for rgba conversions
function hexToRgb(hex: string): string {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
		: '0, 0, 0';
}

// =============================================================================
// TYPOGRAPHY SYSTEM
// =============================================================================

/**
 * Typography system with consistent font families
 */
export const Fonts = {
	robotoMono: 'RobotoMono',  // Monospace font for headers and technical text
	lora: 'Lora',             // Serif font for body text and descriptions
} as const;

/**
 * Typography scale with harmonious font sizes
 */
export const FontSizes = {
	sm: 14,   // Small text
	md: 16,   // Base text size
	lg: 18,   // Large text
	xl: 28,   // Extra large text
	xxl: 48,  // Display text
} as const;

// =============================================================================
// SPACING SYSTEM
// =============================================================================

/**
 * Spacing scale for consistent layout
 * Based on 8px grid system for better visual rhythm
 */
export const Spacing = {
	xs: 8,    // Extra small spacing
	sm: 12,   // Small spacing
	md: 16,   // Medium spacing (base unit)
	lg: 20,   // Large spacing
	xl: 24,   // Extra large spacing
	xxl: 36,  // Double extra large spacing
	xxxl: 72, // Triple extra large spacing
} as const;

// =============================================================================
// RESPONSIVE BREAKPOINTS
// =============================================================================

/**
 * Screen size breakpoints for responsive design
 */
export const Breakpoints = {
	MOBILE: 768,
	TABLET: 992,
	DESKTOP: 1200,
} as const;

// =============================================================================
// ANIMATION TIMING
// =============================================================================

/**
 * Standardized animation delays for consistent timing
 */
export const AnimationTimings = {
	IMMEDIATE: 0,
	SHORT: 200,
	MEDIUM: 400,
	LONG: 600,
	VERY_LONG: 800,
	TIMELINE_START: 800,
	TIMELINE_ITEM_SPACING: 300,
	TIMELINE_END: 2000,
} as const;

// =============================================================================
// BORDER RADIUS
// =============================================================================

/**
 * Border radius tokens for consistent rounded corners
 */
export const BorderRadius = {
	sm: 4,
	md: 8,
	lg: 12,
	xl: 16,
	round: 999,
} as const;

// =============================================================================
// SHADOW SYSTEM
// =============================================================================

/**
 * Shadow tokens for consistent elevation
 */
export const Shadows = {
	sm: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.05,
		shadowRadius: 2,
		elevation: 1,
	},
	md: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	lg: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.15,
		shadowRadius: 8,
		elevation: 5,
	},
} as const;
