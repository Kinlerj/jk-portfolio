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

import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet } from 'react-native';
import { Fonts, FontSizes, Spacing } from './theme';

// =============================================================================
// LAYOUT STYLES
// =============================================================================

/**
 * Core layout and container styles
 * Returns theme-aware styles using the current theme colors
 */
export function useLayoutStyles() {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const borderColor = useThemeColor({}, 'border');

  return StyleSheet.create({
    /**
     * Root container for the entire application
     * Establishes the base styling and full-height layout
     */
    rootContainer: {
      backgroundColor,
      minHeight: '100%',
      fontSize: FontSizes.md,
      textAlign: 'center',
      color: textColor,
      flex: 1,
    },
    
    /**
     * Page container with frame effect
     * Creates the outer white border that frames each page
     */
    page: {
      flex: 1,
      backgroundColor: textColor,
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
      borderColor: textColor,
      borderRadius: 0,
      backgroundColor,
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
      backgroundColor,
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
}

// =============================================================================
// DECORATIVE STYLES
// =============================================================================

/**
 * Decorative corner cuts that create the 45-degree frame effect
 * Positioned absolutely to overlay the frame corners
 */
export function useDecorationStyles() {
  const textColor = useThemeColor({}, 'text');

  return StyleSheet.create({
    cornerCutTopLeft: {
      position: 'absolute',
      top: -2,
      left: -2,
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderTopWidth: 15,
      borderRightWidth: 15,
      borderTopColor: textColor,
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
      borderTopColor: textColor,
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
      borderBottomColor: textColor,
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
      borderBottomColor: textColor,
      borderLeftColor: 'transparent',
      zIndex: 10,
    },
  });
}

// =============================================================================
// TYPOGRAPHY STYLES
// =============================================================================

/**
 * Text and typography styles
 * Returns theme-aware typography styles
 */
export function useTypographyStyles() {
  const textColor = useThemeColor({}, 'text');
  const highlightColor = useThemeColor({}, 'textHighlight');

  return StyleSheet.create({
    /**
     * Main section headers with consistent styling
     * Used for primary page headings
     */
    contentPageHeader: {
      color: textColor,
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
      color: highlightColor,
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
      color: textColor,
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
      color: highlightColor,
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
      color: textColor,
      fontFamily: Fonts.lora,
      fontWeight: '400',
      textTransform: 'capitalize',
      marginTop: 0,
      marginBottom: Spacing.xs,
    },
  });
}

// =============================================================================
// UTILITY STYLES
// =============================================================================

/**
 * Utility and helper styles
 * Returns theme-aware utility styles
 */
export function useUtilityStyles() {
  return StyleSheet.create({
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
}

// =============================================================================
// LEGACY EXPORTS
// =============================================================================

/**
 * Legacy exports for backward compatibility
 * Use these for gradual migration from static styles to theme-aware styles
 */
export const LayoutStyles = {
  get rootContainer() { throw new Error('Use useLayoutStyles() hook instead'); },
  get page() { throw new Error('Use useLayoutStyles() hook instead'); },
  get pageFrame() { throw new Error('Use useLayoutStyles() hook instead'); },
  get pageContent() { throw new Error('Use useLayoutStyles() hook instead'); },
  get pageScrollView() { throw new Error('Use useLayoutStyles() hook instead'); },
  get pageScrollContent() { throw new Error('Use useLayoutStyles() hook instead'); },
};

export const DecorationStyles = {
  get cornerCutTopLeft() { throw new Error('Use useDecorationStyles() hook instead'); },
  get cornerCutTopRight() { throw new Error('Use useDecorationStyles() hook instead'); },
  get cornerCutBottomLeft() { throw new Error('Use useDecorationStyles() hook instead'); },
  get cornerCutBottomRight() { throw new Error('Use useDecorationStyles() hook instead'); },
};

export const TypographyStyles = {
  get contentPageHeader() { throw new Error('Use useTypographyStyles() hook instead'); },
  get contentPageHeaderHighlight() { throw new Error('Use useTypographyStyles() hook instead'); },
  get section() { throw new Error('Use useTypographyStyles() hook instead'); },
  get sectionHeader() { throw new Error('Use useTypographyStyles() hook instead'); },
  get sectionHeaderHighlight() { throw new Error('Use useTypographyStyles() hook instead'); },
  get subSectionContent() { throw new Error('Use useTypographyStyles() hook instead'); },
};

export const UtilityStyles = {
  get bottomFadeOverlay() { throw new Error('Use useUtilityStyles() hook instead'); },
  get fadeElement() { throw new Error('Use useUtilityStyles() hook instead'); },
};
