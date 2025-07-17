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
 * Based on earth tones with high contrast for accessibility
 */
export const Colors = {
  // Primary brand colors
  textHighlight: '#9da28d',    // Sage green for accents and highlights
  background: '#3B451B',       // Dark olive green background
  white: '#d7d9d1',           // Off-white for text and borders
  
  // UI interaction colors
  placeholder: 'rgba(255, 255, 255, 0.7)',  // Semi-transparent white
  border: 'rgba(255, 255, 255, 0.1)',       // Subtle borders
  cardBackground: '#333',                     // Dark card backgrounds
  
  // Skill visualization colors
  skillBarBackground: '#E0E0E0',  // Light gray for skill bar backgrounds
  skillBarFill: '#1D220D',        // Dark green for skill bar fills
} as const;

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
