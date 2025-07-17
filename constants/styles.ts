/**
 * Component Style Definitions
 * 
 * Core component styles organized by category:
 * - Layout containers and frames
 * - Decorative elements (corner cuts)
 * - Content containers
 * - Typography styles
 * - Utility styles
 */

import { StyleSheet } from 'react-native';
import { Colors, Fonts, FontSizes, Spacing } from './theme';

// =============================================================================
// LAYOUT STYLES
// =============================================================================

/**
 * Core layout and container styles
 */
export const LayoutStyles = StyleSheet.create({
  /**
   * Root container for the entire application
   * Establishes the base styling and full-height layout
   */
  rootContainer: {
    backgroundColor: Colors.background,
    minHeight: '100%',
    fontSize: FontSizes.md,
    textAlign: 'center',
    color: Colors.white,
    flex: 1,
  },
  
  /**
   * Page container with frame effect
   * Creates the outer white border that frames each page
   */
  page: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: Spacing.md,
    overflow: 'visible', // Allows corner cuts to show
  },
  
  /**
   * Inner frame that holds the actual content
   * Creates the "picture frame" effect with white borders
   */
  pageFrame: {
    flex: 1,
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 0,
    backgroundColor: Colors.background,
    position: 'relative',
    overflow: 'visible',
  },

  /**
   * Container for non-scrollable page content
   * Provides consistent padding within the frame
   */
  pageContent: {
    flex: 1,
    padding: Spacing.lg,
  },
  
  /**
   * Scrollable content container
   * Used for pages with content that may exceed viewport height
   */
  pageScrollView: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  
  /**
   * Content wrapper inside ScrollView
   * Ensures consistent spacing and minimum height
   */
  pageScrollContent: {
    paddingTop: Spacing.lg,
    paddingHorizontal: Spacing.xxxl,
    paddingBottom: Spacing.xl,
    minHeight: '100%',
  },
});

// =============================================================================
// DECORATIVE STYLES
// =============================================================================

/**
 * Decorative corner cuts that create the 45-degree frame effect
 * Positioned absolutely to overlay the frame corners
 */
export const DecorationStyles = StyleSheet.create({
  cornerCutTopLeft: {
    position: 'absolute',
    top: -2,
    left: -2,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderTopWidth: 15,
    borderRightWidth: 15,
    borderTopColor: Colors.white,
    borderRightColor: 'transparent',
    zIndex: 10,
  },
  
  cornerCutTopRight: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderTopWidth: 15,
    borderLeftWidth: 15,
    borderTopColor: Colors.white,
    borderLeftColor: 'transparent',
    zIndex: 10,
  },
  
  cornerCutBottomLeft: {
    position: 'absolute',
    bottom: -2,
    left: -2,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 15,
    borderRightWidth: 15,
    borderBottomColor: Colors.white,
    borderRightColor: 'transparent',
    zIndex: 10,
  },
  
  cornerCutBottomRight: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 15,
    borderLeftWidth: 15,
    borderBottomColor: Colors.white,
    borderLeftColor: 'transparent',
    zIndex: 10,
  },
});

// =============================================================================
// TYPOGRAPHY STYLES
// =============================================================================

/**
 * Text and typography styles
 */
export const TypographyStyles = StyleSheet.create({
  /**
   * Main section headers with consistent styling
   * Used for primary page headings
   */
  contentPageHeader: {
    color: Colors.white,
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.xl,
    fontWeight: 'bold',
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginTop: Spacing.md,
    marginBottom: Spacing.xl,
    textAlign: 'center',
  },
  
  /**
   * Highlighted text within headers
   * Typically used for name or important keywords
   */
  contentPageHeaderHighlight: {
    color: Colors.textHighlight,
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.xl,
    fontWeight: 'bold',
    letterSpacing: 4,
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  /**
   * Subsection container with consistent spacing
   */
  section: {
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.sm,
    letterSpacing: 2,
    marginBottom: Spacing.xxl,
  },
  
  /**
   * Subsection headers for content organization
   */
  sectionHeader: {
    color: Colors.white,
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.lg,
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: 0,
    marginBottom: Spacing.lg,
    textAlign: 'center',
	},
  
	/**
   * Highlighted text within section headers
   * Typically used for name or important keywords
   */
  sectionHeaderHighlight: {
    color: Colors.textHighlight,
    fontFamily: Fonts.robotoMono,
    fontSize: FontSizes.lg,
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textAlign: 'center',
  },
  
	/**
   * General content text styling
   */
  subSectionContent: {
    color: Colors.white,
    fontFamily: Fonts.lora,
    fontWeight: '400',
    textTransform: 'capitalize',
    marginTop: 0,
    marginBottom: Spacing.xs,
  },
});

// =============================================================================
// UTILITY STYLES
// =============================================================================

/**
 * Utility and helper styles
 */
export const UtilityStyles = StyleSheet.create({
  /**
   * Fade overlay for elements near bottom border
   * Prevents visual clipping at page boundaries
   */
  bottomFadeOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'transparent',
    pointerEvents: 'none',
  },

  /**
   * Reduced opacity for elements that may be partially cut off
   */
  fadeElement: {
    opacity: 0.8,
  },
});
